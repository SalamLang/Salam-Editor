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
      `صفحه:
    جهت = «راست به چپ» 
    رنگ پس زمینه = «سفید»
    قلم:
      نام = «استعداد»
      منبع = «https://editor.salamlang.ir/fonts/Estedad-Light.ttf»
    تمام

    سراسری:
      نام قلم=«استعداد»
    تمام

    جعبه:   
      عرض=«100%»   
      ارتفاع=60 
      رنگ پس زمینه=«سفید»
      سایه جعبه=«0 0 15px -10px black» 
      گردی=20 
      مرز=«1px solid lightgrey»
      محتوا=«به سلام خوش اومدی»
      قرارگیری=«فلکس»
      توجیه محتوا=«مرکز»
      تراز محتوا=«مرکز»
      اندازه قلم=22
    تمام
    جعبه:
      قرارگیری=«فلکس»
      تراز محتوا=«مرکز»
      توجیه محتوا=«مرکز»
      فاصله بالا=20
      پیوند: 
        منبع=«https://salamlang.ir»
        تصویر:
        عرض=120
        منبع=«https://editor.salamlang.ir/images/favicon.svg»
      تمام
      تمام
    تمام
    جعبه:
      قرارگیری=«فلکس»
      تراز محتوا=«مرکز»
      توجیه محتوا=«مرکز»
      فاصله بالا=20
      پاراگراف:
        وزن قلم=700
        اندازه قلم=25
        رنگ=«نارنجی تیره» 
        محتوا=«سلام اولین زبان برنامه برنامه نویسی فارسی!!»
      تمام
    تمام
تمام`,
  };

  let editor = new EditorView(editor_options);
};

export default EditorService;
