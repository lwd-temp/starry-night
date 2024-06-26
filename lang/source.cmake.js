// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cmake', '.cmake.in'],
  names: ['cmake'],
  patterns: [
    {
      begin: '(?i)^\\s*(function|macro)\\s*(\\()',
      beginCaptures: {
        1: {name: 'support.function.cmake'},
        2: {name: 'punctuation.definition.parameters.begin.command.cmake'}
      },
      contentName: 'meta.function-call.function.cmake',
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end.command.cmake'}
      },
      name: 'meta.function-call.command.cmake',
      patterns: [{include: '#argument-constants'}, {include: '#items'}]
    },
    {
      begin:
        '(?ix)\n\t\t\t^\\s*\t# Start of the line with optional preceding space\n\t\t\t(?:\t# Either a control flow keyword\n\t\t\t\t((?:end)?(?:(?:else)?if|while|foreach)|return|else)\n\t\t\t\t|\t# Or a function\n\t\t\t\t(s(tring|ite_name|ource_group|ubdir(s|_depends)|e(t(_(source_files_properties|t(ests_properties|arget_properties)|directory_properties|property))?|parate_arguments))|c(test_(s(tart|ubmit|leep)|co(nfigure|verage)|test|up(date|load)|empty_binary_directory|r(un_script|ead_custom_files)|memcheck|build)|on(tinue|figure_file)|reate_test_sourcelist|make_(host_system_information|policy|minimum_required))|t(arget_(sources|compile_(options|definitions|features)|include_directories|link_libraries)|ry_(compile|run))|i(n(stall(_(targets|programs|files))?|clude(_(directories|external_msproject|regular_expression))?)|f)|o(utput_required_files|ption)|define_property|u(se_mangled_mesa|nset|tility_source)|project|e(n(d(if|f(oreach|unction)|while|macro)|able_(testing|language))|lse(if)?|x(port(_library_dependencies)?|ec(ute_process|_program)))|variable_(watch|requires)|qt_wrap_(cpp|ui)|f(i(nd_(p(a(ckage|th)|rogram)|file|library)|le)|oreach|unction|ltk_wrap_ui)|w(hile|rite_file)|l(i(st|nk_(directories|libraries))|oad_c(ommand|ache))|a(dd_(subdirectory|c(ompile_options|ustom_(command|target))|test|de(pendencies|finitions)|executable|library)|ux_source_directory)|re(turn|move(_definitions)?)|get_(source_file_property|cmake_property|t(est_property|arget_property)|directory_property|property|filename_component)|m(essage|a(cro|th|ke_directory|rk_as_advanced))|b(uild_(name|command)|reak))\n\t\t\t\t|\t# Or some function we don’t know about\n\t\t\t\t(\\w+)\n\t\t\t)\n\t\t\t\\s*(\\()\t# Finally, the opening parenthesis for the argument list\n\t\t\t',
      beginCaptures: {
        1: {name: 'keyword.control.cmake'},
        2: {name: 'support.function.cmake'},
        3: {name: 'punctuation.definition.parameters.begin.command.cmake'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end.command.cmake'}
      },
      name: 'meta.function-call.command.cmake',
      patterns: [{include: '#argument-constants'}, {include: '#items'}]
    },
    {include: '#items'}
  ],
  repository: {
    'argument-constants': {
      match:
        '\\b(R(UN(_(RESULT_VAR|OUTPUT_VARIABLE)|TIME(_DIRECTORY)?)|E(G(ULAR_EXPRESSION|EX)|MOVE(_(RECURSE|ITEM|DUPLICATES|AT))?|S(OURCE|ULT(_VAR(IABLE)?)?)|NAME|T(RY_(COUNT|DELAY)|URN_VALUE)|PLACE|VERSE|QUIRED(_VARIABLE(1|2))?|L(EASE|ATIVE(_PATH)?)|AD(_WITH_PREFIX)?)|AN(GE|DOM(_SEED)?))|G(R(OUP_(READ|EXECUTE)|EATER)|U(ID|ARD)|E(NE(RATE|X_STRIP)|T)|LOB(_RECURSE|AL)?)|M(ODULE|D5|ESSAGE(_NEVER)?|A(COSX_BUNDLE|TCH(ES|ALL)?|IN_DEPENDENCY|KE_(C_IDENTIFIER|DIRECTORY)))|B(RIEF_DOCS|YPRODUCTS|U(NDLE|ILD(_(TESTING|INTERFACE))?)|EFORE)|S(HA(RED|1|2(24|56)|384|512)|YSTEM|C(RIPT|HEDULE_RANDOM)|T(R(GREATER|I(NGS|DE|P)|EQUAL|LESS)|OP_TIME|A(RT|TIC))|O(RT|URCE(S)?)|UBSTRING|ET)|H(INTS|EX)|N(NNN|O(_(MODULE|S(YSTEM_ENVIRONMENT_PATH|OURCE_PERMISSIONS)|CMAKE_(BUILDS_PATH|SYSTEM_PA(CKAGE_REGISTRY|TH)|PA(CKAGE_REGISTRY|TH)|ENVIRONMENT_PATH|FIND_ROOT_PATH)|DEFAULT_PATH|POLICY_SCOPE)|T(E(QUAL)?)?)|UMBER_(ERRORS|WARNINGS)|EW(_PROCESS|LINE_STYLE)?|AME(S(PACE)?|LINK_(SKIP|ONLY))?)|C(RLF|M(P(00(17|48))?|AKE_(MODULE_PATH|CURRENT_(BINARY_DIR|SOURCE_DIR)|F(IND_ROOT_PATH_BOTH|LAGS)))?|T(EST_(B(INARY_DIRECTORY|UILD_(COMMAND|TARGET))|SOURCE_DIRECTORY|PROJECT_NAME))?|O(M(M(ENT|AND(_NAME)?)|P(ILE_(RESULT_VAR|OUTPUT_VARIABLE|DEFINITIONS)|ONENT(S)?|ARE)?)|N(CAT|TENT|DITION|FIG(S|UR(E(_FILE)?|ATION(S)?))?)|DE|PY(_FILE(_ERROR)?|ONLY)?)|DASH_UPLOAD(_TYPE)?|VS|LEAR|ACHE(D_VARIABLE)?)|_(BAR|COMMAND|VERSION(_(M(INOR|AJOR)|TWEAK|PATCH))?|FOO)|T(RACK|YPE|IME(STAMP|OUT)|O(_(NATIVE_PATH|CMAKE_PATH)|UPPER|LOWER)|EST(_VARIABLE)?|ARGET(S|_(OBJECTS|FILE))?)|I(MP(ORTED(_(NO_SONAME|LOCATION(_)?)?)?|LICIT_DEPENDS)|S_(SYMLINK|NEWER_THAN|DIRECTORY|ABSOLUTE)|N(S(TALL(_INTERFACE)?|ERT)|HERITED|CLUDE(S|_(INTERNALS|DIRECTORIES|LABEL))?|_LIST|TERFACE(_)?|PUT(_FILE)?)?|TEMS|DE)|O(R|BJECT|N(LY(_CMAKE_FIND_ROOT_PATH)?)?|UTPUT(_(STRIP_TRAILING_WHITESPACE|DIRECTORY|VARIABLE|QUIET|FILE))?|PTION(S|AL(_COMPONENTS)?)|FF(SET)?|WNER_(READ|EXECUTE|WRITE)|LD)|D(BAR|IRECTORY(_PERMISSIONS)?|O(S|WNLOAD)|E(STINATION|PENDS|FIN(ITION|ED))|VAR|FOO)|U(SE(S_TERMINAL|_SOURCE_PERMISSIONS)|N(IX|KNOWN)|TC|UID|P(PER|LOAD))|P(R(IVATE(_HEADER)?|O(GRAM(S|_ARGS)?|CESS|JECT(_(NAME|VERSION(_(M(INOR|AJOR)|TWEAK|PATCH))?))?|PERT(Y|IES))|E(_(BUILD|INSTALL_SCRIPT|LINK)|ORDER))|O(ST_(BUILD|INSTALL_SCRIPT)|P|LICY)|U(BLIC(_HEADER)?|SH)|ERMISSIONS|LATFORM|A(R(TS|ENT_SCOPE|ALLEL_LEVEL)|CKAGE|T(H(S|_(SUFFIXES|TO_MESA))|TERN)))|E(RROR_(STRIP_TRAILING_WHITESPACE|VARIABLE|QUIET|FILE)|X(CLUDE(_(FROM_ALL|LABEL))?|TRA_INCLUDE|ISTS|P(R|ORT(_LINK_INTERFACE_LIBRARIES)?)|ACT)|SCAPE_QUOTES|N(D|V)|QUAL)|V(S|ER(BATIM|SION(_(GREATER|EQUAL|LESS))?)|A(R(2|IABLE)?|LUE))|QU(IET|ERY)|F(RAMEWORK|I(ND|LE(S(_MATCHING)?|_PERMISSIONS)?)|O(RCE|O_(STRING|ENABLE)|LLOW_SYMLINKS)|U(NCTION|LL_DOCS)|LAGS|ATAL_ERROR)|01|W(RITE|IN(32|DOWS)|ORKING_DIRECTORY)|L(I(MIT|BRARY|ST(S|_DIRECTORIES)|NK_(INTERFACE_LIBRARIES|DIRECTORIES|P(RIVATE|UBLIC)|LIBRARIES))|OCK|D_LIBRARY_PATH|E(SS|NGTH)|F|A(BELS|NGUAGES))|A(R(G(S|N|C|_VAR|V(1|2))|CHIVE)|SCII|ND|PPEND(_STRING)?|FTER|L(IAS|PHABET|L(_BUILD)?)))\\b',
      name: 'keyword.other.argument-separator.cmake'
    },
    comments: {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.cmake'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.cmake'}},
          end: '\\n',
          name: 'comment.line.number-sign.cmake'
        }
      ]
    },
    constants: {
      match: '(?i)\\b(FALSE|OFF|NO|(\\w+-)?NOTFOUND)\\b',
      name: 'constant.language.boolean.cmake'
    },
    escapes: {
      patterns: [
        {match: '\\\\["()#$^ \\\\]', name: 'constant.character.escape.cmake'}
      ]
    },
    items: {
      patterns: [
        {include: '#comments'},
        {include: '#constants'},
        {include: '#strings'},
        {include: '#variables'},
        {include: '#escapes'}
      ]
    },
    strings: {
      patterns: [
        {
          captures: {1: {name: 'constant.language.boolean.cmake'}},
          match: '(?i)"(FALSE|OFF|NO|(.+-)?NOTFOUND)"',
          name: 'string.quoted.double.cmake'
        },
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.cmake',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.cmake'},
            {include: '#variables'}
          ]
        }
      ]
    },
    variables: {
      begin: '\\$(ENV)?\\{',
      beginCaptures: {0: {name: 'punctuation.definition.variable.begin.cmake'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.variable.end.cmake'}},
      name: 'variable.other.cmake',
      patterns: [{include: '#variables'}, {match: '\\w+'}]
    }
  },
  scopeName: 'source.cmake'
}

export default grammar
