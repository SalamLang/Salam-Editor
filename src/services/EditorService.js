const EditorService = (callback) => {
    const CM = window?.CM;
    if (!CM) {
        console.error("Codemirror is not loaded");
        return;
    }

    const { EditorView, basicSetup } = CM["codemirror"];
    const { completeFromList } = CM["@codemirror/autocomplete"];
    const { LRParser } = CM["@lezer/lr"];
    const { LRLanguage } = CM["@codemirror/language"];
    const { LanguageSupport } = CM["@codemirror/language"];
    const { foldNodeProp, foldInside, indentNodeProp } = CM["@codemirror/language"];
    const { styleTags, tags } = CM["@lezer/highlight"];

    const parser = LRParser.deserialize({
        version: 14,
        states: "#SQYQPOOO#wQQO'#C_OOQO'#Ce'#CeQYQPOOOOQO'#Ca'#CaO$OQQO'#CfO%`QQO'#C`O%gQPO,58yOOQO-E6c-E6cO%lQPO'#CgO%tQQO,59QOOQO-E6d-E6dOOQO1G.e1G.eOOQO'#Cb'#CbOOQO,59R,59ROOQO-E6e-E6e",
        stateData: "'U~O^OSPOS~O_POtPOuPOvPOwPOxPOyPOzPO{PO|PO}PO!OPO!PPO!QPO!RPO!SPO!TPO!UPO!VPO!WPO!XPO~O`SOaSObSOcSOdSOeSOfSOgSOhSOiSOjSOkSOlSOmSOnSOoSOpSOqSO~OsSP~P!mOrXO`YXaYXbYXcYXdYXeYXfYXgYXhYXiYXjYXkYXlYXmYXnYXoYXpYXqYXsYX~OsSX~P!mOs[O~OV]OW]O~OrXO`YaaYabYacYadYaeYafYagYahYaiYajYakYalYamYanYaoYapYaqYasYa~O",
        goto: "}[PPP]adhPPkqwTQORRVPTTPUR^XQRORWRQUPRZUQYTR_Y",
        nodeNames: "⚠ LineComment Program Command Body Property Value String Identifier",
        maxTerm: 55,
        skippedNodes: [0, 1],
        repeatNodeCount: 3,
        tokenData: "Bb~RqXY#YYZ#Y]^#Ypq#Y}!O#k!Q![#k![!]$P!]!^$U!c!}#k#R#S#k#T#o#k$q$r$mCZC[&yC[C](^C^C_)yC`Ca+hCbCc,sCcCd-pCeCf.XCfCg0YCgCh0qCiCj1YCjCk1qCmCn2YCuCv3iCvCw7jCxCy8RCyCz8jCzC{;qC|C}=WEUEV?]FRFS@^FXFY@{~#_S^~XY#YYZ#Y]^#Ypq#Y~#pTW~}!O#k!Q![#k!c!}#k#R#S#k#T#o#k~$UOr~~$ZSP~OY$UZ;'S$U;'S;=`$g<%lO$U~$jP;=`<%l$U~$pWOr$ms#O$m#O#P%Y#P%R$m%R%S&U%S;'S$m;'S;=`&s<%lO$m~%]RO;'S$m;'S;=`%f;=`O$m~%iXOr$ms#O$m#O#P%Y#P%R$m%R%S&U%S;'S$m;'S;=`&s;=`<%l$m<%lO$m~&ZWV~Or$ms#O$m#O#P%Y#P%R$m%R%S&U%S;'S$m;'S;=`&s<%lO$m~&vP;=`<%l$m~&|PCzC{'P~'SPCcCd'V~'YPCZC[']~'`PCfCg'c~'fPC{C|'i~'lPpq'o~'rPCuCv'u~'xPC|C}'{~(OPCzC{(R~(UPC^C_(X~(^Om~~(aPCeCf(d~(gQC|C}(mE^E_)h~(pPCfCg(s~(vPCeCf(y~(|PCgCh)P~)SPCZC[)V~)YPCzC{)]~)`PFvFw)c~)hOi~~)kPCgCh)n~)qPC[C])t~)yO!O~~)|RCiCj*VCyCz*nC|C}+P~*YPC|C}*]~*`PFvFw*c~*fPCeCf*i~*nOy~~*qPCZC[*t~*wPCyCz*z~+POs~~+SPCjCk+V~+YPFvFw+]~+`PCaCb+c~+hOe~~+kRCcCd+tCmCn,VC{C|,h~+wPC|C}+z~+}PCxCy,Q~,VO!V~~,YPC[C],]~,`PC{C|,c~,hO!P~~,kPC^C_,n~,sOc~~,vPCkCl,y~-OP!Q~pq-R~-UPC[C]-X~-[PCmCn-_~-bPCcCd-e~-hPFvFw-k~-pOz~~-sPFRFS-v~-yPCyCz-|~.PPC{C|.S~.XO{~~.[QCcCd.bCzC{.s~.ePFvFw.h~.kPCuCv.n~.sO!W~~.vPFXFY.y~/OPn~pq/R~/UPEUEV/X~/[PCgCh/_~/bPpq/e~/hPCfCg/k~/nPCyCz/q~/tPFvFw/w~/zPCzC{/}~0QPC{C|0T~0YOl~~0]PC[C]0`~0cPCZC[0f~0iPCzC{0l~0qOb~~0tPC^C_0w~0zPC|C}0}~1QPCzC{1T~1YO!X~~1]PCuCv1`~1cPCaCb1f~1iPC{C|1l~1qO_~~1tPCbCc1w~1zPFvFw1}~2QPCyCz2T~2YOu~R2]PCzC{2`R2cPC|C}2fR2iPCZC[2lR2oPCzC{2rR2wPaQpq2zP2}PFXFY3QP3TPCeCf3WP3ZPC|C}3^P3aPC{C|3dP3iOxP~3lRCZC[3uCeCf4^C{C|5_~3xPCiCj3{~4OPCxCy4R~4UPC{C|4X~4^Op~~4aPCyCz4d~4gPC^C_4j~4mPpq4p~4sPCyCz4v~4yPC^C_4|~5PPCzC{5S~5VPFvFw5Y~5_Oh~~5bPCeCf5e~5hPCgCh5k~5nPC^C_5q~5tPpq5w~5zQCnCo6QCyCz7R~6TPFvFw6W~6ZPCeCf6^~6aPpq6d~6gPCyCz6j~6mPCeCf6p~6sPC^C_6v~6yPC[C]6|~7RO!S~~7UPCeCf7X~7[PC^C_7_~7bPC[C]7e~7jO!T~~7mPCkCl7p~7sPCmCn7v~7yPC{C|7|~8ROv~~8UPFvFw8X~8[PCzC{8_~8bPFRFS8e~8jO!R~~8mSCaCb8yCeCf:rCzC{:}C|C};`~8|QC^C_9SCcCd9e~9VPC|C}9Y~9]PCZC[9`~9eO`~~9hPC|C}9k~9nPCcCd9q~9tPC{C|9w~9zPpq9}~:QPCzC{:T~:WPCyCz:Z~:^PCZC[:a~:dPFvFw:g~:jPChCi:m~:rOj~~:uPCfCg:x~:}Oq~~;QPC[C];T~;WPCmCn;Z~;`Ok~~;cPCeCf;f~;iPCcCd;l~;qO!U~~;tQCyCz;zC|C}<c~;}PCZC[<Q~<TPFvFw<W~<ZPC{C|<^~<cOg~~<fPFvFw<i~<lPCgCh<o~<rPCzC{<u~<xPCcCd<{~=OPC{C|=R~=WOd~~=ZQCeCf=aFvFw=x~=dPC|C}=g~=jPCcCd=m~=pPFvFw=s~=xO|~~={PCeCf>O~>RPCZC[>U~>XPFvFw>[~>_PChCi>b~>ePFXFY>h~>kPCeCf>n~>qPpq>t~>wPCyCz>z~>}PC^C_?Q~?TPCzC{?W~?]O}~~?`PCZC[?c~?fPCeCf?i~?lPCZC[?o~?rPFXFY?u~?xPCeCf?{~@OPCZC[@R~@UPCuCv@X~@^Ot~~@aPCxCy@d~@gPCyCz@j~@mPCZC[@p~@sPC^C_@v~@{Of~~AOPCeCfAR~AUQCcCdA[C|C}Ag~A_PFvFwAb~AgOo~~AjPC{C|Am~ApP$I`$IaAs~AvPC[C]Ay~A|PCzC{BP~BSPCcCdBV~BYPFvFwB]~BbOw~",
        tokenizers: [0, 1],
        topRules: { "Program": [0, 2] },
        tokenPrec: 0
    });

    const SALAMLanguage = LRLanguage.define({
        parser: parser.configure({
            props: [
                indentNodeProp.add({
                    Application: context => context.column(context.node.from) + context.unit
                    // Application: delimitedIndent({ closing: ")", align: false })
                }),
                foldNodeProp.add({
                    Application: foldInside
                }),
                styleTags({
                    Identifier: tags.variableName,
                    Boolean: tags.bool,
                    String: tags.string,
                    LineComment: tags.lineComment,
                    "( )": tags.paren
                })
            ]
        }),
        languageData: {
            // commentTokens: { line: ";" }
        }
    });

    const exampleCompletion = SALAMLanguage.data.of({
        autocomplete: completeFromList([
            { label: "صفحه", type: "keyword" },
            { label: "تمام", type: "keyword" },
            { label: "پاراگراف", type: "keyword" },
            { label: "ضخیم", type: "keyword" },
            { label: "قطعه", type: "keyword" },
            { label: "گروه‌بندی", type: "keyword" },
            { label: "عنوان گروه", type: "keyword" },
            { label: "تصویر", type: "keyword" },
            { label: "پیوند", type: "keyword" },
            { label: "خط", type: "keyword" },
            { label: "خط بعدی", type: "keyword" },
            { label: "دکمه", type: "keyword" },
            { label: "ورودی", type: "keyword" },
            { label: "ویرایشگر متن", type: "keyword" },
            { label: "برچسب", type: "keyword" },
            { label: "جعبه", type: "keyword" },
            { label: "فهرست غیر مرتب", type: "keyword" },
            { label: "فهرست مرتب", type: "keyword" },
            { label: "مورد", type: "keyword" },
            { label: "جدول", type: "keyword" },
            { label: "ردیف", type: "keyword" },
            { label: "ستون", type: "keyword" }
        ])
    });

    function SALAM() {
        return new LanguageSupport(SALAMLanguage, [exampleCompletion])
    }

    const elm_editor = document.querySelector("#editor");
    const editor_options = {
        parent: elm_editor,
        styleActiveLine: true,
        lineNumbers: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        autoCloseTags: true,
        extensions: [
            basicSetup,
            SALAM(),
            EditorView.updateListener.of((update) => {
                if (update.changes) {
                    const newText = update.state.doc.toString();
                    callback(newText)
                }
            }),
        ],
    };
    new EditorView(editor_options);
}

export default EditorService;