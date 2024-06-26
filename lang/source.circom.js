// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/iden3/circom-highlighting-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.circom'],
  names: ['circom'],
  patterns: [
    {match: '^#!/usr/bin/env node', name: 'comment.line.js'},
    {
      captures: {
        1: {name: 'support.class.js'},
        2: {name: 'support.constant.js'},
        3: {name: 'keyword.operator.js'}
      },
      match: '([a-zA-Z_?.$][\\w?.$]*)\\.(prototype)\\s*(=)\\s*',
      name: 'meta.class.js'
    },
    {
      captures: {
        1: {name: 'support.class.js'},
        2: {name: 'support.constant.js'},
        3: {name: 'entity.name.function.js'},
        4: {name: 'keyword.operator.js'},
        5: {name: 'storage.type.function.js'},
        6: {name: 'punctuation.definition.parameters.begin.js'},
        7: {name: 'variable.parameter.function.js'},
        8: {name: 'punctuation.definition.parameters.end.js'}
      },
      match:
        '([a-zA-Z_?.$][\\w?.$]*)\\.(prototype)\\.([a-zA-Z_?.$][\\w?.$]*)\\s*(=)\\s*(template)?\\s*(\\()(.*?)(\\))',
      name: 'meta.function.prototype.js'
    },
    {
      captures: {
        1: {name: 'support.class.js'},
        2: {name: 'support.constant.js'},
        3: {name: 'entity.name.function.js'},
        4: {name: 'keyword.operator.js'}
      },
      match:
        '([a-zA-Z_?.$][\\w?.$]*)\\.(prototype)\\.([a-zA-Z_?.$][\\w?.$]*)\\s*(=)\\s*',
      name: 'meta.function.js'
    },
    {
      captures: {
        1: {name: 'support.class.js'},
        2: {name: 'entity.name.function.js'},
        3: {name: 'keyword.operator.js'},
        4: {name: 'storage.type.function.js'},
        5: {name: 'punctuation.definition.parameters.begin.js'},
        6: {name: 'variable.parameter.function.js'},
        7: {name: 'punctuation.definition.parameters.end.js'}
      },
      match:
        '([a-zA-Z_?.$][\\w?.$]*)\\.([a-zA-Z_?.$][\\w?.$]*)\\s*(=)\\s*(function)\\s*(\\()(.*?)(\\))',
      name: 'meta.function.js'
    },
    {
      captures: {
        1: {name: 'entity.name.function.js'},
        2: {name: 'keyword.operator.js'},
        3: {name: 'storage.type.function.js'},
        4: {name: 'punctuation.definition.parameters.begin.js'},
        5: {name: 'variable.parameter.function.js'},
        6: {name: 'punctuation.definition.parameters.end.js'}
      },
      match: '([a-zA-Z_?$][\\w?$]*)\\s*(=)\\s*(tenplate)\\s*(\\()(.*?)(\\))',
      name: 'meta.function.js'
    },
    {
      captures: {
        1: {name: 'storage.type.function.js'},
        2: {name: 'entity.name.function.js'},
        3: {name: 'punctuation.definition.parameters.begin.js'},
        4: {name: 'variable.parameter.function.js'},
        5: {name: 'punctuation.definition.parameters.end.js'}
      },
      match: '\\b(template)\\s+([a-zA-Z_$]\\w*)?\\s*(\\()(.*?)(\\))',
      name: 'meta.function.js'
    },
    {
      captures: {
        1: {name: 'entity.name.function.js'},
        2: {name: 'storage.type.function.js'},
        3: {name: 'punctuation.definition.parameters.begin.js'},
        4: {name: 'variable.parameter.function.js'},
        5: {name: 'punctuation.definition.parameters.end.js'}
      },
      match:
        '\\b([a-zA-Z_?.$][\\w?.$]*)\\s*:\\s*\\b(template)?\\s*(\\()(.*?)(\\))',
      name: 'meta.function.json.js'
    },
    {
      captures: {
        1: {name: 'string.quoted.single.js'},
        10: {name: 'punctuation.definition.parameters.begin.js'},
        11: {name: 'variable.parameter.function.js'},
        12: {name: 'punctuation.definition.parameters.end.js'},
        2: {name: 'punctuation.definition.string.begin.js'},
        3: {name: 'entity.name.function.js'},
        4: {name: 'punctuation.definition.string.end.js'},
        5: {name: 'string.quoted.double.js'},
        6: {name: 'punctuation.definition.string.begin.js'},
        7: {name: 'entity.name.function.js'},
        8: {name: 'punctuation.definition.string.end.js'},
        9: {name: 'entity.name.function.js'}
      },
      match:
        '(?:((\')([^\']*)(\'))|((")([^"]*)(")))\\s*:\\s*\\b(template)?\\s*(\\()([^)]*)(\\))',
      name: 'meta.function.json.js'
    },
    {
      captures: {
        1: {name: 'keyword.operator.new.js'},
        2: {name: 'entity.name.type.instance.js'}
      },
      match: '(new)\\s+(\\w+(?:\\.\\w*)?)',
      name: 'meta.class.instance.constructor'
    },
    {match: '\\b(console)\\b', name: 'entity.name.type.object.js.firebug'},
    {
      match: '\\.(warn|info|log|error|time|timeEnd|assert)\\b',
      name: 'support.function.js.firebug'
    },
    {
      match: '\\b((0(x|X)[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?))\\b',
      name: 'constant.numeric.js'
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.js'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.js'}},
      name: 'string.quoted.single.js',
      patterns: [
        {
          match:
            '\\\\(x[[:xdigit:]]{2}|[0-2][0-7]{,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
          name: 'constant.character.escape.js'
        }
      ]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.js'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.js'}},
      name: 'string.quoted.double.js',
      patterns: [
        {
          match:
            '\\\\(x[[:xdigit:]]{2}|[0-2][0-7]{,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)',
          name: 'constant.character.escape.js'
        }
      ]
    },
    {
      begin: '/\\*\\*(?!/)',
      captures: {0: {name: 'punctuation.definition.comment.js'}},
      end: '\\*/',
      name: 'comment.block.documentation.js'
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.js'}},
      end: '\\*/',
      name: 'comment.block.js'
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.js'}},
      match: '(//).*$\\n?',
      name: 'comment.line.double-slash.js'
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.js'}},
      match: '^(#!\\/).*$\\n?',
      name: 'comment.line.double-slash.js'
    },
    {
      captures: {
        0: {name: 'punctuation.definition.comment.html.js'},
        2: {name: 'punctuation.definition.comment.html.js'}
      },
      match: '(<!--|-->)',
      name: 'comment.block.html.js'
    },
    {
      match:
        '\\b(boolean|byte|char|class|double|enum|float|function|template|int|interface|long|short|var|void)\\b',
      name: 'storage.type.js'
    },
    {
      match:
        '\\b(const|export|extends|final|implements|native|private|protected|public|static|synchronized|throws|transient|volatile)\\b',
      name: 'storage.modifier.js'
    },
    {
      match:
        '\\b(break|case|catch|continue|default|do|else|finally|for|goto|if|import|package|return|switch|throw|try|while|include)\\b',
      name: 'keyword.control.js'
    },
    {
      match: '\\b(delete|in|instanceof|new|typeof|with)\\b',
      name: 'keyword.operator.js'
    },
    {match: '\\btrue\\b', name: 'constant.language.boolean.true.js'},
    {match: '\\bfalse\\b', name: 'constant.language.boolean.false.js'},
    {match: '\\bnull\\b', name: 'constant.language.null.js'},
    {match: '\\b(super|this)\\b', name: 'variable.language.js'},
    {match: '\\b(debugger)\\b', name: 'keyword.other.js'},
    {
      match:
        '\\b(Anchor|Applet|Area|Array|Boolean|Button|Checkbox|Date|document|event|FileUpload|Form|Frame|Function|Hidden|History|Image|JavaArray|JavaClass|JavaObject|JavaPackage|java|Layer|Link|Location|Math|MimeType|Number|navigator|netscape|Object|Option|Packages|Password|Plugin|Promise|Radio|RegExp|Reset|Select|String|Style|Submit|screen|sun|Text|Textarea|window|XMLHttpRequest)\\b',
      name: 'support.class.js'
    },
    {
      match:
        '\\b(s(h(ift|ow(Mod(elessDialog|alDialog)|Help))|croll(X|By(Pages|Lines)?|Y|To)?|t(op|rike)|i(n|zeToContent|debar|gnText)|ort|u(p|b(str(ing)?)?)|pli(ce|t)|e(nd|t(Re(sizable|questHeader)|M(i(nutes|lliseconds)|onth)|Seconds|Ho(tKeys|urs)|Year|Cursor|Time(out)?|Interval|ZOptions|Date|UTC(M(i(nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(ome|andleEvent)|navigate|c(har(CodeAt|At)|o(s|n(cat|textual|firm)|mpile)|eil|lear(Timeout|Interval)?|a(ptureEvents|ll)|reate(StyleSheet|Popup|EventObject))|t(o(GMTString|S(tring|ource)|U(TCString|pperCase)|Lo(caleString|werCase))|est|a(n|int(Enabled)?))|i(s(NaN|Finite)|ndexOf|talics)|d(isableExternalCapture|ump|etachEvent)|u(n(shift|taint|escape|watch)|pdateCommands)|j(oin|avaEnabled)|p(o(p|w)|ush|lugins.refresh|a(ddings|rse(Int|Float)?)|r(int|ompt|eference))|e(scape|nableExternalCapture|val|lementFromPoint|x(p|ec(Script|Command)?))|valueOf|UTC|queryCommand(State|Indeterm|Enabled|Value)|f(i(nd|le(ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(nt(size|color)|rward)|loor|romCharCode)|watch|l(ink|o(ad|g)|astIndexOf)|a(sin|nchor|cos|t(tachEvent|ob|an(2)?)|pply|lert|b(s|ort))|r(ou(nd|teEvents)|e(size(By|To)|calc|turnValue|place|verse|l(oad|ease(Capture|Events)))|andom)|g(o|et(ResponseHeader|M(i(nutes|lliseconds)|onth)|Se(conds|lection)|Hours|Year|Time(zoneOffset)?|Da(y|te)|UTC(M(i(nutes|lliseconds)|onth)|Seconds|Hours|Da(y|te)|FullYear)|FullYear|A(ttention|llResponseHeaders)))|m(in|ove(B(y|elow)|To(Absolute)?|Above)|ergeAttributes|a(tch|rgins|x))|b(toa|ig|o(ld|rderWidths)|link|ack|ind))\\b(?=\\()',
      name: 'support.function.js'
    },
    {
      match:
        '\\b(s(ub(stringData|mit)|plitText|e(t(NamedItem|Attribute(Node)?)|lect))|has(ChildNodes|Feature)|namedItem|c(l(ick|o(se|neNode))|reate(C(omment|DATASection|aption)|T(Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(ntityReference|lement)|Attribute))|tabIndex|i(nsert(Row|Before|Cell|Data)|tem)|open|delete(Row|C(ell|aption)|T(Head|Foot)|Data)|focus|write(ln)?|a(dd|ppend(Child|Data))|re(set|place(Child|Data)|move(NamedItem|Child|Attribute(Node)?)?)|get(NamedItem|Element(sBy(Name|TagName)|ById)|Attribute(Node)?)|blur)\\b(?=\\()',
      name: 'support.function.dom.js'
    },
    {
      match:
        '(?<=\\.)(s(ystemLanguage|cr(ipts|ollbars|een(X|Y|Top|Left))|t(yle(Sheets)?|atus(Text|bar)?)|ibling(Below|Above)|ource|uffixes|e(curity(Policy)?|l(ection|f)))|h(istory|ost(name)?|as(h|Focus))|y|X(MLDocument|SLDocument)|n(ext|ame(space(s|URI)|Prop))|M(IN_VALUE|AX_VALUE)|c(haracterSet|o(n(structor|trollers)|okieEnabled|lorDepth|mp(onents|lete))|urrent|puClass|l(i(p(boardData)?|entInformation)|osed|asses)|alle(e|r)|rypto)|t(o(olbar|p)|ext(Transform|Indent|Decoration|Align)|ags)|SQRT(1_2|2)|i(n(ner(Height|Width)|put)|ds|gnoreCase)|zIndex|o(scpu|n(readystatechange|Line)|uter(Height|Width)|p(sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(i(splay|alog(Height|Top|Width|Left|Arguments)|rectories)|e(scription|fault(Status|Ch(ecked|arset)|View)))|u(ser(Profile|Language|Agent)|n(iqueID|defined)|pdateInterval)|_content|p(ixelDepth|ort|ersonalbar|kcs11|l(ugins|atform)|a(thname|dding(Right|Bottom|Top|Left)|rent(Window|Layer)?|ge(X(Offset)?|Y(Offset)?))|r(o(to(col|type)|duct(Sub)?|mpter)|e(vious|fix)))|e(n(coding|abledPlugin)|x(ternal|pando)|mbeds)|v(isibility|endor(Sub)?|Linkcolor)|URLUnencoded|P(I|OSITIVE_INFINITY)|f(ilename|o(nt(Size|Family|Weight)|rmName)|rame(s|Element)|gColor)|E|whiteSpace|l(i(stStyleType|n(eHeight|kColor))|o(ca(tion(bar)?|lName)|wsrc)|e(ngth|ft(Context)?)|a(st(M(odified|atch)|Index|Paren)|yer(s|X)|nguage))|a(pp(MinorVersion|Name|Co(deName|re)|Version)|vail(Height|Top|Width|Left)|ll|r(ity|guments)|Linkcolor|bove)|r(ight(Context)?|e(sponse(XML|Text)|adyState))|global|x|m(imeTypes|ultiline|enubar|argin(Right|Bottom|Top|Left))|L(N(10|2)|OG(10E|2E))|b(o(ttom|rder(Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(Color|Image)))\\b',
      name: 'support.constant.js'
    },
    {
      match:
        '(?<=\\.)(s(hape|ystemId|c(heme|ope|rolling)|ta(ndby|rt)|ize|ummary|pecified|e(ctionRowIndex|lected(Index)?)|rc)|h(space|t(tpEquiv|mlFor)|e(ight|aders)|ref(lang)?)|n(o(Resize|tation(s|Name)|Shade|Href|de(Name|Type|Value)|Wrap)|extSibling|ame)|c(h(ildNodes|Off|ecked|arset)?|ite|o(ntent|o(kie|rds)|de(Base|Type)?|l(s|Span|or)|mpact)|ell(s|Spacing|Padding)|l(ear|assName)|aption)|t(ype|Bodies|itle|Head|ext|a(rget|gName)|Foot)|i(sMap|ndex|d|m(plementation|ages))|o(ptions|wnerDocument|bject)|d(i(sabled|r)|o(c(type|umentElement)|main)|e(clare|f(er|ault(Selected|Checked|Value)))|at(eTime|a))|useMap|p(ublicId|arentNode|r(o(file|mpt)|eviousSibling))|e(n(ctype|tities)|vent|lements)|v(space|ersion|alue(Type)?|Link|Align)|URL|f(irstChild|orm(s)?|ace|rame(Border)?)|width|l(ink(s)?|o(ngDesc|wSrc)|a(stChild|ng|bel))|a(nchors|c(ce(ssKey|pt(Charset)?)|tion)|ttributes|pplets|l(t|ign)|r(chive|eas)|xis|Link|bbr)|r(ow(s|Span|Index)|ules|e(v|ferrer|l|adOnly))|m(ultiple|e(thod|dia)|a(rgin(Height|Width)|xLength))|b(o(dy|rder)|ackground|gColor))\\b',
      name: 'support.constant.dom.js'
    },
    {
      match:
        '\\b(ELEMENT_NODE|ATTRIBUTE_NODE|TEXT_NODE|CDATA_SECTION_NODE|ENTITY_REFERENCE_NODE|ENTITY_NODE|PROCESSING_INSTRUCTION_NODE|COMMENT_NODE|DOCUMENT_NODE|DOCUMENT_TYPE_NODE|DOCUMENT_FRAGMENT_NODE|NOTATION_NODE|INDEX_SIZE_ERR|DOMSTRING_SIZE_ERR|HIERARCHY_REQUEST_ERR|WRONG_DOCUMENT_ERR|INVALID_CHARACTER_ERR|NO_DATA_ALLOWED_ERR|NO_MODIFICATION_ALLOWED_ERR|NOT_FOUND_ERR|NOT_SUPPORTED_ERR|INUSE_ATTRIBUTE_ERR)\\b',
      name: 'support.constant.dom.js'
    },
    {
      match:
        '\\bon(R(ow(s(inserted|delete)|e(nter|xit))|e(s(ize(start|end)?|et)|adystatechange))|Mouse(o(ut|ver)|down|up|move)|B(efore(cut|deactivate|u(nload|pdate)|p(aste|rint)|editfocus|activate)|lur)|S(croll|top|ubmit|elect(start|ionchange)?)|H(over|elp)|C(hange|ont(extmenu|rolselect)|ut|ellchange|l(ick|ose))|D(eactivate|ata(setc(hanged|omplete)|available)|r(op|ag(start|over|drop|en(ter|d)|leave)?)|blclick)|Unload|P(aste|ropertychange)|Error(update)?|Key(down|up|press)|Focus|Load|A(ctivate|fter(update|print)|bort))\\b',
      name: 'support.function.event-handler.js'
    },
    {
      match:
        '!|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|(?<!\\()/=|%=|\\+=|\\-=|&=|\\^=|\\b(in|instanceof|new|delete|typeof|void)\\b',
      name: 'keyword.operator.js'
    },
    {match: '\\b(Infinity|NaN|undefined)\\b', name: 'constant.language.js'},
    {
      begin: '(?<=[=(:]|^|return|&&|\\|\\||!)\\s*(/)(?![/*+{}?])',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.js'}},
      end: '(/)[igm]*',
      endCaptures: {1: {name: 'punctuation.definition.string.end.js'}},
      name: 'string.regexp.js',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.js'}]
    },
    {match: '\\;', name: 'punctuation.terminator.statement.js'},
    {match: ',[ |\\t]*', name: 'meta.delimiter.object.comma.js'},
    {match: '\\.', name: 'meta.delimiter.method.period.js'},
    {match: '\\{|\\}', name: 'meta.brace.curly.js'},
    {match: '\\(|\\)', name: 'meta.brace.round.js'},
    {match: '\\[|\\]', name: 'meta.brace.square.js'},
    {
      match: '\\b(output|signal|input|component|template)\\b',
      name: 'storage.type.js'
    },
    {match: 'include', name: 'support.function.js'},
    {match: ' === | <-- | --> | <== | ==> ', name: 'support.class.js'}
  ],
  scopeName: 'source.circom'
}

export default grammar
