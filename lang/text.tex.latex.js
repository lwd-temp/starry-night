// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/textmate/latex.tmbundle>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.tex'],
  extensions: [
    '.tex',
    '.aux',
    '.bbx',
    '.cbx',
    '.dtx',
    '.ins',
    '.lbx',
    '.ltx',
    '.mkii',
    '.mkiv',
    '.mkvi',
    '.sty',
    '.toc'
  ],
  names: ['tex', 'latex'],
  patterns: [
    {
      match:
        '(?<=\\\\[\\w@]|\\\\[\\w@]{2}|\\\\[\\w@]{3}|\\\\[\\w@]{4}|\\\\[\\w@]{5}|\\\\[\\w@]{6})\\s',
      name: 'meta.space-after-command.latex'
    },
    {
      begin:
        '((\\\\)(?:usepackage|documentclass))(?:(\\[)([^\\]]*)(\\]))?(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.preamble.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.arguments.begin.latex'},
        4: {name: 'variable.parameter.latex'},
        5: {name: 'punctuation.definition.arguments.end.latex'},
        6: {name: 'punctuation.definition.arguments.begin.latex'}
      },
      contentName: 'support.class.latex',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.arguments.end.latex'}},
      name: 'meta.preamble.latex',
      patterns: [{include: '$self'}]
    },
    {
      begin: '((\\\\)(?:include|input))(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.include.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.arguments.begin.latex'}
      },
      contentName: 'support.class.latex',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.arguments.end.latex'}},
      name: 'meta.include.latex',
      patterns: [{include: '$self'}]
    },
    {
      begin:
        '(?x)\n\t\t\t\t(\t\t\t\t\t\t\t\t\t\t\t\t\t# Capture 1\n\t\t\t\t\t(\\\\)\t\t\t\t\t\t\t\t\t\t\t# Marker\n\t\t\t\t\t(\n\t\t\t\t\t\t(?:sub){0,2}section\t\t\t\t\t\t\t# Functions\n\t\t\t\t\t  | (?:sub)?paragraph\n\t\t\t\t\t  | chapter|part|addpart\n\t\t\t\t\t  | addchap|addsec|minisec\n\t\t\t\t\t)\n\t\t\t\t\t(?:\\*)?\t\t\t\t\t\t\t\t\t\t\t# Optional Unnumbered\n\t\t\t\t)\n\t\t\t\t(?:\n\t\t\t\t\t(\\[)([^\\[]*?)(\\])\t\t\t\t\t\t\t\t# Optional Title\n\t\t\t\t)??\n\t\t\t\t(\\{)\t\t\t\t\t\t\t\t\t\t\t\t# Opening Bracket\n\t\t\t\t',
      beginCaptures: {
        1: {name: 'support.function.section.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        4: {name: 'punctuation.definition.arguments.optional.begin.latex'},
        5: {name: 'entity.name.section.latex'},
        6: {name: 'punctuation.definition.arguments.optional.end.latex'},
        7: {name: 'punctuation.definition.arguments.begin.latex'}
      },
      contentName: 'entity.name.section.latex',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.arguments.end.latex'}},
      name: 'meta.function.section.$3.latex',
      patterns: [{include: '$self'}]
    },
    {
      begin: '(^\\s*)?(?=\\\\begin\\{lstlisting\\})',
      beginCaptures: {
        0: {name: 'punctuation.whitespace.embedded.leading.latex'}
      },
      end: '(?!\\G)(\\s*$\\n?)?',
      endCaptures: {
        0: {name: 'punctuation.whitespace.embedded.trailing.latex'}
      },
      patterns: [
        {
          begin:
            '(((\\\\)begin)(\\{)(lstlisting)(\\})(?:(\\[).*(\\]))?(\\s*%\\s*(?i:Java)\\n?))',
          captures: {
            1: {name: 'meta.function.embedded.latex'},
            2: {name: 'support.function.be.latex'},
            3: {name: 'punctuation.definition.function.latex'},
            4: {name: 'punctuation.definition.arguments.begin.latex'},
            5: {name: 'variable.parameter.function.latex'},
            6: {name: 'punctuation.definition.arguments.end.latex'},
            7: {name: 'punctuation.definition.arguments.optional.begin.latex'},
            8: {name: 'punctuation.definition.arguments.optional.end.latex'},
            9: {name: 'comment.line.percentage.latex'}
          },
          contentName: 'meta.function.embedded.latex',
          end: '(((\\\\)end)(\\{)(lstlisting)(\\}))',
          name: 'meta.embedded.block.java',
          patterns: [
            {
              begin: '^(?!\\\\end\\{lstlisting\\})',
              end: '(?=\\\\end\\{lstlisting\\})',
              name: 'source.java',
              patterns: [{include: 'source.java'}]
            }
          ]
        },
        {
          begin:
            '(((\\\\)begin)(\\{)(lstlisting)(\\})(?:(\\[).*(\\]))?(\\s*%\\s*(?i:Python)\\n?))',
          captures: {
            1: {name: 'meta.function.embedded.latex'},
            2: {name: 'support.function.be.latex'},
            3: {name: 'punctuation.definition.function.latex'},
            4: {name: 'punctuation.definition.arguments.begin.latex'},
            5: {name: 'variable.parameter.function.latex'},
            6: {name: 'punctuation.definition.arguments.end.latex'},
            7: {name: 'punctuation.definition.arguments.optional.begin.latex'},
            8: {name: 'punctuation.definition.arguments.optional.end.latex'},
            9: {name: 'comment.line.percentage.latex'}
          },
          contentName: 'meta.function.embedded.latex',
          end: '(((\\\\)end)(\\{)(lstlisting)(\\}))',
          name: 'meta.embedded.block.python',
          patterns: [
            {
              begin: '^(?!\\\\end\\{lstlisting\\})',
              end: '(?=\\\\end\\{lstlisting\\})',
              name: 'source.python',
              patterns: [{include: 'source.python'}]
            }
          ]
        },
        {
          begin:
            '((\\\\)begin)(\\{)(lstlisting)(\\})(?:(\\[).*(\\]))?(\\s*%.*\\n?)?',
          captures: {
            1: {name: 'meta.function.embedded.latex'},
            2: {name: 'support.function.be.latex'},
            3: {name: 'punctuation.definition.function.latex'},
            4: {name: 'punctuation.definition.arguments.begin.latex'},
            5: {name: 'variable.parameter.function.latex'},
            6: {name: 'punctuation.definition.arguments.end.latex'},
            7: {name: 'punctuation.definition.arguments.optional.begin.latex'},
            8: {name: 'punctuation.definition.arguments.optional.end.latex'},
            9: {name: 'comment.line.percentage.latex'}
          },
          contentName: 'meta.function.embedded.latex',
          end: '(((\\\\)end)(\\{)(lstlisting)(\\}))',
          name: 'meta.embedded.block.generic'
        }
      ]
    },
    {
      begin: '(?:\\s*)((\\\\)begin)(\\{)((?:V|v)erbatim|alltt)(\\})',
      captures: {
        1: {name: 'support.function.be.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.arguments.begin.latex'},
        4: {name: 'variable.parameter.function.latex'},
        5: {name: 'punctuation.definition.arguments.end.latex'}
      },
      contentName: 'markup.raw.verbatim.latex',
      end: '((\\\\)end)(\\{)(\\4)(\\})',
      name: 'meta.function.verbatim.latex'
    },
    {
      captures: {
        1: {name: 'support.function.url.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.arguments.begin.latex'},
        4: {name: 'markup.underline.link.latex'},
        5: {name: 'punctuation.definition.arguments.end.latex'}
      },
      match: '(?:\\s*)((\\\\)(?:url|href))(\\{)([^}]*)(\\})',
      name: 'meta.function.link.url.latex'
    },
    {
      captures: {
        1: {name: 'support.function.be.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.arguments.begin.latex'},
        4: {name: 'variable.parameter.function.latex'},
        5: {name: 'punctuation.definition.arguments.end.latex'}
      },
      match: '(?:\\s*)((\\\\)begin)(\\{)(document)(\\})',
      name: 'meta.function.begin-document.latex'
    },
    {
      captures: {
        1: {name: 'support.function.be.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.arguments.begin.latex'},
        4: {name: 'variable.parameter.function.latex'},
        5: {name: 'punctuation.definition.arguments.end.latex'}
      },
      match: '(?:\\s*)((\\\\)end)(\\{)(document)(\\})',
      name: 'meta.function.end-document.latex'
    },
    {
      begin:
        '(?x)\n\t\t\t\t\t(?:\\s*)\t\t\t\t\t\t\t\t\t\t# Optional whitespace\n\t\t\t\t\t((\\\\)begin)\t\t\t\t\t\t\t\t\t# Marker - Function\n\t\t\t\t\t(\\{)\t\t\t\t\t\t\t\t\t\t# Open Bracket\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t(?:\n\t\t\t\t\t\t\t\talign|equation|eqnarray\t\t\t# Argument\n\t\t\t\t\t\t\t  | multline|aligned|alignat\n\t\t\t\t\t\t\t  | split|gather|gathered\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(?:\\*)?\t\t\t\t\t\t\t\t# Optional Unnumbered\n\t\t\t\t\t\t)\n\t\t\t\t\t(\\})\t\t\t\t\t\t\t\t\t\t# Close Bracket\n\t\t\t\t\t(\\s*\\n)?\t\t\t\t# Match to end of line absent of content\n\t\t\t\t',
      captures: {
        1: {name: 'support.function.be.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.arguments.begin.latex'},
        4: {name: 'variable.parameter.function.latex'},
        5: {name: 'punctuation.definition.arguments.end.latex'}
      },
      contentName: 'string.other.math.block.environment.latex',
      end: '(?x)\n\t\t\t\t\t(?:\\s*)\t\t\t\t\t\t\t\t\t\t# Optional whitespace\n\t\t\t\t\t((\\\\)end)\t\t\t\t\t\t\t\t\t# Marker - Function\n\t\t\t\t\t(\\{)\t\t\t\t\t\t\t\t\t\t# Open Bracket\n\t\t\t\t\t\t(\\4)\t\t\t\t# Previous capture from begin\n\t\t\t\t\t(\\})\t\t\t\t\t\t\t\t\t\t# Close Bracket\n\t\t\t\t\t(?:\\s*\\n)?\t\t\t\t# Match to end of line absent of content\n\t\t\t\t',
      name: 'meta.function.environment.math.latex',
      patterns: [{include: '$base'}]
    },
    {
      begin:
        '(?x)\n\t\t\t\t\t(?:\\s*)\t\t\t\t\t\t\t\t\t\t# Optional whitespace\n\t\t\t\t\t((\\\\)begin)\t\t\t\t\t\t\t\t\t# Marker - Function\n\t\t\t\t\t(\\{)\t\t\t\t\t\t\t\t\t\t# Open Bracket\n\t\t\t\t\t\t(array|tabular[xy*]?)\n\t\t\t\t\t(\\})\t\t\t\t\t\t\t\t\t\t# Close Bracket\n\t\t\t\t\t(\\s*\\n)?\t\t\t\t# Match to end of line absent of content\n\t\t\t\t',
      captures: {
        1: {name: 'support.function.be.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.arguments.begin.latex'},
        4: {name: 'variable.parameter.function.latex'},
        5: {name: 'punctuation.definition.arguments.end.latex'}
      },
      contentName: 'meta.data.environment.tabular.latex',
      end: '(?x)\n\t\t\t\t\t(?:\\s*)\t\t\t\t\t\t\t\t\t\t# Optional whitespace\n\t\t\t\t\t((\\\\)end)\t\t\t\t\t\t\t\t\t# Marker - Function\n\t\t\t\t\t(\\{)\t\t\t\t\t\t\t\t\t\t# Open Bracket\n\t\t\t\t\t\t(\\4)\t\t\t\t# Previous capture from begin\n\t\t\t\t\t(\\})\t\t\t\t\t\t\t\t\t\t# Close Bracket\n\t\t\t\t\t(?:\\s*\\n)?\t\t\t\t# Match to end of line absent of content\n\t\t\t\t',
      name: 'meta.function.environment.tabular.latex',
      patterns: [
        {match: '\\\\\\\\', name: 'punctuation.definition.table.row.latex'},
        {
          begin:
            '(?:^|(?<=\\\\\\\\))(?!\\\\\\\\|\\s*\\\\end\\{(?:tabular|array))',
          end: '(?=\\\\\\\\|\\s*\\\\end\\{(?:tabular|array))',
          name: 'meta.row.environment.tabular.latex',
          patterns: [
            {match: '&', name: 'punctuation.definition.table.cell.latex'},
            {
              begin: '(?:^|(?<=&))((?!&|\\\\\\\\|$))',
              end: '(?=&|\\\\\\\\|\\s*\\\\end\\{(?:tabular|array))',
              name: 'meta.cell.environment.tabular.latex',
              patterns: [{include: '$base'}]
            },
            {include: '$base'}
          ]
        },
        {include: '$base'}
      ]
    },
    {
      begin:
        '(?:\\s*)((\\\\)begin)(\\{)(itemize|enumerate|description|list)(\\})',
      captures: {
        1: {name: 'support.function.be.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.arguments.latex'},
        4: {name: 'variable.parameter.function.latex'},
        5: {name: 'punctuation.definition.arguments.latex'}
      },
      end: '((\\\\)end)(\\{)(\\4)(\\})(?:\\s*\\n)?',
      name: 'meta.function.environment.list.latex',
      patterns: [{include: '$base'}]
    },
    {
      begin: '(?:\\s*)((\\\\)begin)(\\{)(tikzpicture)(\\})',
      captures: {
        1: {name: 'support.function.be.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.arguments.latex'},
        4: {name: 'variable.parameter.function.latex'},
        5: {name: 'punctuation.definition.arguments.latex'}
      },
      end: '((\\\\)end)(\\{)(tikzpicture)(\\})(?:\\s*\\n)?',
      name: 'meta.function.environment.latex.tikz',
      patterns: [{include: 'text.tex.latex'}]
    },
    {
      begin: '(?:\\s*)((\\\\)begin)(\\{)(\\w+[*]?)(\\})',
      captures: {
        1: {name: 'support.function.be.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.arguments.latex'},
        4: {name: 'variable.parameter.function.latex'},
        5: {name: 'punctuation.definition.arguments.latex'}
      },
      end: '((\\\\)end)(\\{)(\\4)(\\})(?:\\s*\\n)?',
      name: 'meta.function.environment.general.latex',
      patterns: [{include: '$base'}]
    },
    {
      captures: {1: {name: 'punctuation.definition.function.latex'}},
      match: '(\\\\)(newcommand|renewcommand)\\b',
      name: 'storage.type.function.latex'
    },
    {
      begin: '((\\\\)marginpar)(\\{)',
      beginCaptures: {
        1: {name: 'support.function.marginpar.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.marginpar.begin.latex'}
      },
      contentName: 'meta.paragraph.margin.latex',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.marginpar.end.latex'}},
      patterns: [{include: '$base'}]
    },
    {
      begin: '((\\\\)footnote)((?:\\[[^\\[]*?\\])*)(\\{)',
      beginCaptures: {
        1: {name: 'support.function.footnote.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.definition.arguments.begin.latex'},
                2: {name: 'variable.parameter.latex'},
                3: {name: 'punctuation.definition.arguments.end.latex'}
              },
              match: '(\\[)([^\\[]*?)(\\])'
            }
          ]
        },
        4: {name: 'punctuation.definition.footnote.begin.latex'}
      },
      contentName: 'meta.footnote.latex',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.footnote.end.latex'}},
      patterns: [{include: '$base'}]
    },
    {
      begin: '((\\\\)emph)(\\{)',
      beginCaptures: {
        1: {name: 'support.function.emph.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.emph.begin.latex'}
      },
      contentName: 'markup.italic.emph.latex',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.emph.end.latex'}},
      name: 'meta.function.emph.latex',
      patterns: [{include: '$base'}]
    },
    {
      begin: '((\\\\)textit)(\\{)',
      captures: {
        1: {name: 'support.function.textit.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.textit.begin.latex'}
      },
      contentName: 'markup.italic.textit.latex',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.textit.end.latex'}},
      name: 'meta.function.textit.latex',
      patterns: [{include: '$base'}]
    },
    {
      begin: '((\\\\)textbf)(\\{)',
      captures: {
        1: {name: 'support.function.textbf.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.textbf.begin.latex'}
      },
      contentName: 'markup.bold.textbf.latex',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.textbf.end.latex'}},
      name: 'meta.function.textbf.latex',
      patterns: [{include: '$base'}]
    },
    {
      begin: '((\\\\)texttt)(\\{)',
      captures: {
        1: {name: 'support.function.texttt.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.texttt.begin.latex'}
      },
      contentName: 'markup.raw.texttt.latex',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.texttt.end.latex'}},
      name: 'meta.function.texttt.latex',
      patterns: [{include: '$base'}]
    },
    {
      captures: {
        0: {name: 'keyword.other.item.latex'},
        1: {name: 'punctuation.definition.keyword.latex'}
      },
      match: '(\\\\)item\\b',
      name: 'meta.scope.item.latex'
    },
    {
      begin:
        '(?x)\n\t\t\t\t\t(\n\t\t\t\t\t\t(\\\\)\t\t\t\t\t\t\t\t\t\t# Marker\n\t\t\t\t\t\t(?:auto|foot|full|no|short|[tT]ext)?\t\t# Function Name\n\t\t\t\t\t\t[cC]ite\n\t\t\t\t\t\t(?:al)?(?:t|p|author|year(?:par)?|title)?[ANP]*\n\t\t\t\t\t\t\\*?\t\t\t\t\t\t\t\t\t\t\t# Optional Unabreviated\n\t\t\t\t\t)\n\t\t\t\t\t(?:(\\[)[^\\]]*(\\]))?\t\t\t\t\t\t\t\t# Optional\n\t\t\t\t\t(?:(\\[)[^\\]]*(\\]))?\t\t\t\t\t\t\t\t#   Arguments\n\t\t\t\t\t(\\{)\t\t\t\t\t\t\t\t\t\t\t# Opening Bracket\n\t\t\t\t',
      captures: {
        1: {name: 'keyword.control.cite.latex'},
        2: {name: 'punctuation.definition.keyword.latex'},
        3: {name: 'punctuation.definition.arguments.optional.begin.latex'},
        4: {name: 'punctuation.definition.arguments.optional.end.latex'},
        5: {name: 'punctuation.definition.arguments.optional.begin.latex'},
        6: {name: 'punctuation.definition.arguments.optional.end.latex'},
        7: {name: 'punctuation.definition.arguments.latex'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.arguments.latex'}},
      name: 'meta.citation.latex',
      patterns: [
        {match: '[\\w:.]+', name: 'constant.other.reference.citation.latex'}
      ]
    },
    {
      begin: '((\\\\)(?:\\w*[r|R]ef\\*?))(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.ref.latex'},
        2: {name: 'punctuation.definition.keyword.latex'},
        3: {name: 'punctuation.definition.arguments.begin.latex'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.arguments.begin.latex'}},
      name: 'meta.reference.label.latex',
      patterns: [
        {
          match: '[a-zA-Z0-9\\.,:/*!^_-]',
          name: 'constant.other.reference.label.latex'
        }
      ]
    },
    {
      begin: '((\\\\)label)(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.label.latex'},
        2: {name: 'punctuation.definition.keyword.latex'},
        3: {name: 'punctuation.definition.arguments.begin.latex'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.arguments.end.latex'}},
      name: 'meta.definition.label.latex',
      patterns: [
        {
          match: '[a-zA-Z0-9\\.,:/*!^_-]',
          name: 'variable.parameter.definition.label.latex'
        }
      ]
    },
    {
      begin: '((\\\\)(?:verb|lstinline)[\\*]?)\\s*((\\\\)scantokens)(\\{)',
      beginCaptures: {
        1: {name: 'support.function.verb.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'support.function.verb.latex'},
        4: {name: 'punctuation.definition.verb.latex'},
        5: {name: 'punctuation.definition.begin.latex'}
      },
      contentName: 'markup.raw.verb.latex',
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.definition.end.latex'}},
      name: 'meta.function.verb.latex',
      patterns: [{include: '$self'}]
    },
    {
      captures: {
        1: {name: 'support.function.verb.latex'},
        2: {name: 'punctuation.definition.function.latex'},
        3: {name: 'punctuation.definition.verb.latex'},
        4: {name: 'markup.raw.verb.latex'},
        5: {name: 'punctuation.definition.verb.latex'}
      },
      match:
        '((\\\\)(?:verb|lstinline)[\\*]?)\\s*((?<=\\s)\\S|[^a-zA-Z])(.*?)(\\3|$)',
      name: 'meta.function.verb.latex'
    },
    {
      begin: '"`',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.latex'}},
      end: '"\'',
      endCaptures: {0: {name: 'punctuation.definition.string.end.latex'}},
      name: 'string.quoted.double.european.latex',
      patterns: [{include: '$base'}]
    },
    {
      begin: '``',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.latex'}},
      end: "''|\"",
      endCaptures: {0: {name: 'punctuation.definition.string.end.latex'}},
      name: 'string.quoted.double.latex',
      patterns: [{include: '$base'}]
    },
    {
      begin: '">',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.latex'}},
      end: '"<',
      endCaptures: {0: {name: 'punctuation.definition.string.end.latex'}},
      name: 'string.quoted.double.guillemot.latex',
      patterns: [{include: '$base'}]
    },
    {
      begin: '"<',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.latex'}},
      end: '">',
      endCaptures: {0: {name: 'punctuation.definition.string.end.latex'}},
      name: 'string.quoted.double.guillemot.latex',
      patterns: [{include: '$base'}]
    },
    {
      begin: '\\\\\\(',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.latex'}},
      end: '\\\\\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.latex'}},
      name: 'string.other.math.latex',
      patterns: [{include: '$base'}]
    },
    {
      begin: '\\\\\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.latex'}},
      end: '\\\\\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.end.latex'}},
      name: 'string.other.math.latex',
      patterns: [{include: '$base'}]
    },
    {
      match: "(?<!\\S)'.*?'",
      name: 'invalid.illegal.string.quoted.single.latex'
    },
    {
      match: '(?<!\\S)".*?"',
      name: 'invalid.illegal.string.quoted.double.latex'
    },
    {
      captures: {1: {name: 'punctuation.definition.constant.latex'}},
      match:
        '(\\\\)(text(s(terling|ixoldstyle|urd|e(ction|venoldstyle|rvicemark))|yen|n(ineoldstyle|umero|aira)|c(ircledP|o(py(left|right)|lonmonetary)|urrency|e(nt(oldstyle)?|lsius))|t(hree(superior|oldstyle|quarters(emdash)?)|i(ldelow|mes)|w(o(superior|oldstyle)|elveudash)|rademark)|interrobang(down)?|zerooldstyle|o(hm|ne(superior|half|oldstyle|quarter)|penbullet|rd(feminine|masculine))|d(i(scount|ed|v(orced)?)|o(ng|wnarrow|llar(oldstyle)?)|egree|agger(dbl)?|blhyphen(char)?)|uparrow|p(ilcrow|e(so|r(t(housand|enthousand)|iodcentered))|aragraph|m)|e(stimated|ightoldstyle|uro)|quotes(traight(dblbase|base)|ingle)|f(iveoldstyle|ouroldstyle|lorin|ractionsolidus)|won|l(not|ira|e(ftarrow|af)|quill|angle|brackdbl)|a(s(cii(caron|dieresis|acute|grave|macron|breve)|teriskcentered)|cutedbl)|r(ightarrow|e(cipe|ferencemark|gistered)|quill|angle|brackdbl)|g(uarani|ravedbl)|m(ho|inus|u(sicalnote)?|arried)|b(igcircle|orn|ullet|lank|a(ht|rdbl)|rokenbar)))\\b',
      name: 'constant.character.latex'
    },
    {
      captures: {
        1: {name: 'punctuation.definition.column-specials.begin.latex'},
        2: {name: 'punctuation.definition.column-specials.end.latex'}
      },
      match: '(?:<|>)(\\{)\\$(\\})',
      name: 'meta.column-specials.latex'
    },
    {include: 'text.tex'}
  ],
  scopeName: 'text.tex.latex'
}

export default grammar
