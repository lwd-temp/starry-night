// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: ['.latte', '.mustache', '.tpl'],
  injections: {
    'text.html.smarty - (meta.embedded | meta.tag | comment.block | meta.block.literal), L:text.html.smarty meta.tag':
      {patterns: [{include: '#comments'}, {include: '#blocks'}]}
  },
  names: ['latte', 'mustache', 'smarty'],
  patterns: [{include: 'text.html.basic'}],
  repository: {
    blocks: {
      patterns: [
        {
          begin: '(\\{)(literal)(\\})',
          captures: {
            0: {name: 'meta.embedded.line.tag.literal.smarty'},
            1: {name: 'punctuation.definition.tag.begin.smarty'},
            2: {name: 'support.function.built-in.smarty'},
            3: {name: 'punctuation.definition.tag.end.smarty'}
          },
          end: '(\\{/)(literal)(\\})',
          name: 'meta.block.literal.smarty',
          patterns: [{include: 'text.html.basic'}]
        },
        {
          begin: '(\\{%?)',
          beginCaptures: {
            0: {name: 'source.smarty'},
            1: {name: 'punctuation.section.embedded.begin.smarty'}
          },
          contentName: 'source.smarty',
          end: '(%?\\})',
          endCaptures: {
            0: {name: 'source.smarty'},
            1: {name: 'punctuation.section.embedded.end.smarty'}
          },
          name: 'meta.embedded.line.tag.smarty',
          patterns: [
            {include: '#strings'},
            {include: '#variables'},
            {include: '#lang'}
          ]
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '(\\{%?)\\*',
          beginCaptures: {1: {name: 'punctuation.definition.comment.smarty'}},
          end: '\\*(%?\\})',
          name: 'comment.block.smarty'
        }
      ]
    },
    lang: {
      patterns: [
        {
          match:
            '(!==|!=|!|<=|>=|<|>|===|==|%|&&|\\|\\|)|\\b(and|or|eq|neq|ne|gte|gt|ge|lte|lt|le|not|mod)\\b',
          name: 'keyword.operator.smarty'
        },
        {
          match: '\\b(TRUE|FALSE|true|false)\\b',
          name: 'constant.language.smarty'
        },
        {
          match:
            '\\b(if|else|elseif|foreach|foreachelse|section|switch|case|break|default)\\b',
          name: 'keyword.control.smarty'
        },
        {
          captures: {0: {name: 'variable.parameter.smarty'}},
          match: '\\b([a-zA-Z]+)=',
          name: 'meta.attribute.smarty'
        },
        {
          match:
            '\\b(capture|config_load|counter|cycle|debug|eval|fetch|include_php|include|insert|literal|math|strip|rdelim|ldelim|assign|constant|block|html_[a-z_]*)\\b',
          name: 'support.function.built-in.smarty'
        },
        {
          match:
            '\\|(capitalize|cat|count_characters|count_paragraphs|count_sentences|count_words|date_format|default|escape|indent|lower|nl2br|regex_replace|replace|spacify|string_format|strip_tags|strip|truncate|upper|wordwrap)',
          name: 'support.function.variable-modifier.smarty'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.smarty'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.smarty'}},
          name: 'string.quoted.single.smarty',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.smarty'}]
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.smarty'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.smarty'}},
          name: 'string.quoted.double.smarty',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.smarty'}]
        }
      ]
    },
    variables: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.smarty'}},
          match: '\\b(\\$)Smarty\\.',
          name: 'variable.other.global.smarty'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.variable.smarty'},
            2: {name: 'variable.other.smarty'}
          },
          match: '(\\$)([a-zA-Z_][a-zA-Z0-9_]*)\\b',
          name: 'variable.other.smarty'
        },
        {
          captures: {
            1: {name: 'keyword.operator.smarty'},
            2: {name: 'variable.other.property.smarty'}
          },
          match: '(->)([a-zA-Z_][a-zA-Z0-9_]*)\\b',
          name: 'variable.other.smarty'
        },
        {
          captures: {
            1: {name: 'keyword.operator.smarty'},
            2: {name: 'meta.function-call.object.smarty'},
            3: {name: 'punctuation.definition.variable.smarty'},
            4: {name: 'punctuation.definition.variable.smarty'}
          },
          match: '(->)([a-zA-Z_][a-zA-Z0-9_]*)(\\().*?(\\))',
          name: 'variable.other.smarty'
        }
      ]
    }
  },
  scopeName: 'text.html.smarty'
}

export default grammar
