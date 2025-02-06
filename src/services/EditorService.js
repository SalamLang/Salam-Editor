const EditorService = (autoCompleteData, callback) => {
  const CM = window?.CM;
  if (!CM) {
    console.error("Codemirror is not loaded");
    return;
  }
  const { basicSetup } = CM["codemirror"];
  const { keymap, EditorView } = CM["@codemirror/view"];
  const { closeBrackets, completeFromList, acceptCompletion, autocompletion } =
    CM["@codemirror/autocomplete"];
  const { LRParser } = CM["@lezer/lr"];
  const { LRLanguage, HighlightStyle } = CM["@codemirror/language"];
  const { indentWithTab, defaultKeymap, indentMore, indentLess } =
    CM["@codemirror/commands"];
  const { LanguageSupport } = CM["@codemirror/language"];
  const { foldNodeProp, foldInside, indentNodeProp } =
    CM["@codemirror/language"];
  const { styleTags, tags } = CM["@lezer/highlight"];

  const parser = LRParser.deserialize({
    version: 14,
    states:
      "#SQYQPOOO#wQQO'#C_OOQO'#Ce'#CeQYQPOOOOQO'#Ca'#CaO$OQQO'#CfO%`QQO'#C`O%gQPO,58yOOQO-E6c-E6cO%lQPO'#CgO%tQQO,59QOOQO-E6d-E6dOOQO1G.e1G.eOOQO'#Cb'#CbOOQO,59R,59ROOQO-E6e-E6e",
    stateData:
      "'U~O^OSPOS~O_POtPOuPOvPOwPOxPOyPOzPO{PO|PO}PO!OPO!PPO!QPO!RPO!SPO!TPO!UPO!VPO!WPO!XPO~O`SOaSObSOcSOdSOeSOfSOgSOhSOiSOjSOkSOlSOmSOnSOoSOpSOqSO~OsSP~P!mOrXO`YXaYXbYXcYXdYXeYXfYXgYXhYXiYXjYXkYXlYXmYXnYXoYXpYXqYXsYX~OsSX~P!mOs[O~OV]OW]O~OrXO`YaaYabYacYadYaeYafYagYahYaiYajYakYalYamYanYaoYapYaqYasYa~O",
    goto: "}[PPP]adhPPkqwTQORRVPTTPUR^XQRORWRQUPRZUQYTR_Y",
    nodeNames:
      "⚠ LineComment Program Command Body Property Value String Identifier",
    maxTerm: 55,
    skippedNodes: [0, 1],
    repeatNodeCount: 3,
    tokenData: `@top Program { Layout }

@skip { Space | Comment }

TagContent {
  Tag |
  Attribute
}

Finish {
  "تمام"
}

Layout {
  "صفحه" Start Body Finish
}

Tag {
  Key Start Body Finish
}

Body {
  TagContent*
}

Attribute {
  Key Equal Value
}

Value {
  String |
  Number
}

@tokens {
  String { '"' (!["\\\\] | "\\\\" _)* '"' | "«" (!["\\\\»] | "\\\\" _)* "»" }
  Comment { "//" ![\\n]* }
  Number { ($[0-9\u0660-\u0669\u06F0-\u06F9])+ ("." ($[0-9\u0660-\u0669\u06F0-\u06F9])+)? }
  Start { ":" }
  Equal { "=" }

  Key { $[a-zA-Z_\\-0-9\u0600-\u06FF]+ (" " $[a-zA-Z_\\-0-9\u0600-\u06FF]+)* }
  Space { $[ \\t\\n\\r]+ }
}`,
    tokenizers: [0, 1],
    topRules: { Program: [0, 2] },
    tokenPrec: 0,
  });

  let before_space = 0;

  function getSpacesBeforeCursor(state) {
    const cursorPos = state.selection.main.head;
    const line = state.doc.lineAt(cursorPos);

    let spacesCount = 0;
    for (let i = line.from; i < cursorPos; i++) {
      if (line.text.charAt(i - line.from) === " ") {
        spacesCount++;
      }
    }

    return spacesCount;
  }

  const SALAMLanguage = LRLanguage.define({
    parser: parser.configure({
      props: [
        indentNodeProp.add({
          Application: (context) =>
            context.column(context.node.from) + context.unit,
        }),
        foldNodeProp.add({
          Application: foldInside,
        }),
        styleTags({
          Identifier: tags.variableName,
          Boolean: tags.bool,
          String: tags.string,
          LineComment: tags.lineComment,
          "( )": tags.paren,
        }),
      ],
    }),
    languageData: {
      // commentTokens: { line: ";" }
    },
  });

  const exampleCompletion = SALAMLanguage.data.of({
    autocomplete: completeFromList(autoCompleteData()),
  });

  function SALAM() {
    return new LanguageSupport(SALAMLanguage, [exampleCompletion]);
  }

  const elm_editor = document.querySelector("#editor");

  const tab = (view) => {
    const result = acceptCompletion(view);
    if (result) {
      const cursorPos = view.state.selection.main.head;
      const line = view.state.doc.lineAt(cursorPos);
      const targetLine = parseInt(line.number) - 1;
      const targetPos = view.state.doc.line(targetLine).from;
      view.dispatch({
        selection: { anchor: targetPos, head: targetPos },
      });
    }
    return result;
  };

  function customCloseBrackets() {
    closeBrackets({
      brackets: ["()", "[]", "{}", "«»"],
    });
  }

  const editor_options = {
    parent: elm_editor,
    styleActiveLine: true,
    lineNumbers: true,
    matchBrackets: true,
    viewportMargin: Infinity,

    extensions: [
      basicSetup,
      SALAM(),
      autocompletion(),
      keymap.of([
        {
          key: "Tab",
          run: (view) => tab(view),
        },
        indentWithTab,
      ]),
      EditorView.updateListener.of((update) => {
        if (update.changes) {
          console.log(before_space);
          const newText = update.state.doc.toString();
          callback(newText);
          localStorage.setItem("code", newText);
        }
      }),
    ],
    doc:
      localStorage.getItem("code") ??
      "صفحه:\n" +
        "    جهت = «راست به چپ» \n" +
        "    رنگ پس زمینه = «سفید»\n" +
        "\n" +
        "    جعبه:   \n" +
        "        عرض=«100%»   \n" +
        "        ارتفاع=«60» \n" +
        "      رنگ پس زمینه=«سفید»\n" +
        "      سایه جعبه=«0 0 15px -10px black» \n" +
        "      گردی=«20» \n" +
        "      مرز=«1px solid lightgrey»\n" +
        "      محتوا=«به سلام خوش اومدی»\n" +
        "      قرارگیری=«فلکس»\n" +
        "      توجیه محتوا=«مرکز»\n" +
        "      تراز محتوا=«مرکز»\n" +
        "      اندازه قلم=«22»\n" +
        "      نام قلم=«iranYekan»\n" +
        "    تمام\n" +
        "    جعبه:\n" +
        "      قرارگیری=«فلکس»\n" +
        "      تراز محتوا=«مرکز»\n" +
        "      توجیه محتوا=«مرکز»\n" +
        "      فاصله بالا=«20»\n" +
        "      تصویر:\n" +
        "        عرض=«120»\n" +
        "        منبع=«https://editor.salamlang.ir/images/favicon.svg»\n" +
        "      تمام\n" +
        "    تمام\n" +
        "    جعبه:\n" +
        "      قرارگیری=«فلکس»\n" +
        "      تراز محتوا=«مرکز»\n" +
        "      توجیه محتوا=«مرکز»\n" +
        "      فاصله بالا=20\n" +
        "      پاراگراف:\n" +
        "        وزن قلم=700\n" +
        "        نام قلم=«iranyekan»\n" +
        "        اندازه قلم=«25»\n" +
        "        رنگ=«نارنجی تیره» \n" +
        "        محتوا=«سلام اولین زبان برنامه برنامه نویسی فارسی!!»\n" +
        "      تمام\n" +
        "    تمام\n" +
        "تمام",
  };

  let editor = new EditorView(editor_options);
};

export default EditorService;
