// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atom/language-property-list>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.plist', '.glyphs'],
  names: ['openstep-property-list'],
  patterns: [
    {
      begin: '(?=\\(|\\{)',
      end: '(?=not)possible',
      patterns: [
        {include: '#dictionary'},
        {include: '#array'},
        {include: '#comment'},
        {include: '#stray'}
      ]
    },
    {include: '#comment'},
    {include: '#stray'}
  ],
  repository: {
    array: {
      begin: '\\G\\(',
      beginCaptures: {0: {name: 'punctuation.definition.array.begin.plist'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.array.end.plist'}},
      name: 'meta.scope.array.plist',
      patterns: [
        {include: '#array_item'},
        {include: '#comment'},
        {include: '#stray'}
      ]
    },
    array_item: {
      begin: '(?=<|\\(|\\{|"|\'|[-a-zA-Z0-9_.])',
      end: ',|(?=\\))',
      endCaptures: {0: {name: 'punctuation.separator.array.plist'}},
      name: 'meta.scope.array-item.plist',
      patterns: [
        {include: '#dictionary'},
        {include: '#array'},
        {include: '#string'},
        {include: '#binary'},
        {include: '#comment'},
        {include: '#stray'}
      ]
    },
    binary: {
      begin: '\\G<',
      beginCaptures: {1: {name: 'punctuation.definition.data.plist'}},
      contentName: 'constant.numeric.base64.plist',
      end: '(=?)\\s*(>)',
      endCaptures: {
        1: {name: 'punctuation.terminator.data.plist'},
        2: {name: 'punctuation.definition.data.plist'}
      },
      name: 'meta.binary-data.plist',
      patterns: [
        {
          match: '[^A-Za-z0-9+/ \\n]',
          name: 'invalid.illegal.invalid-character.plist'
        }
      ]
    },
    comment: {
      patterns: [
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.plist'}
          },
          end: '\\*/',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.begin.plist'}
          },
          name: 'comment.block.plist'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.plist'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.plist'}
              },
              end: '\\n',
              name: 'comment.line.double-slash.plist'
            }
          ]
        }
      ]
    },
    dictionary: {
      begin: '\\G\\{',
      beginCaptures: {
        0: {name: 'punctuation.definition.dictionary.begin.plist'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.dictionary.end.plist'}},
      name: 'meta.scope.dictionary.plist',
      patterns: [
        {include: '#dictionary_item'},
        {include: '#comment'},
        {include: '#stray'}
      ]
    },
    dictionary_item: {
      begin:
        '(?>((")((?:[^"\\\\]|\\\\.)*)("))|((\')((?:[^\'\\\\]|\\\\.)*)(\'))|([-a-zA-Z0-9_.]+))',
      beginCaptures: {
        1: {name: 'string.quoted.double.plist'},
        2: {name: 'punctuation.definition.string.begin.plist'},
        3: {
          name: 'constant.other.key.plist',
          patterns: [{include: '#string-contents'}]
        },
        4: {name: 'punctuation.definition.string.end.plist'},
        5: {name: 'string.quoted.single.plist'},
        6: {name: 'punctuation.definition.string.begin.plist'},
        7: {
          name: 'constant.other.key.plist',
          patterns: [{include: '#string-contents'}]
        },
        8: {name: 'punctuation.definition.string.end.plist'},
        9: {name: 'constant.other.key.plist'}
      },
      end: ';|(?=\\})',
      endCaptures: {0: {name: 'punctuation.separator.dictionary.plist'}},
      name: 'meta.scope.dictionary-item.${3/[[\\s\\x20-\\x7F]&&[:^alnum:]]//g}${7/[[\\s\\x20-\\x7F]&&[:^alnum:]]//g}${9/[[\\s\\x20-\\x7F]&&[:^alnum:]]//g}.plist',
      patterns: [{include: '#dictionary_item_contents'}]
    },
    dictionary_item_contents: {
      patterns: [
        {
          begin: '=',
          end: '(?=;|\\})',
          patterns: [
            {
              begin: '(?=<|\\(|\\{|"|\'|[-a-zA-Z0-9_.])',
              end: '(?=;|\\})',
              patterns: [
                {include: '#dictionary'},
                {include: '#array'},
                {include: '#string'},
                {include: '#binary'},
                {include: '#stray'}
              ]
            },
            {include: '#stray_alpha'}
          ]
        },
        {include: '#stray'}
      ]
    },
    stray: {
      begin: '\\S',
      end: '(?=\\{|\\(|/\\*|//|"|\'|<|,|;|\\)|\\}|=)',
      name: 'invalid.illegal.character-not-allowed-here.plist'
    },
    stray_alpha: {
      begin: '\\S',
      end: '(?=\\{|\\(|/\\*|//|"|\'|<|,|;|\\)|\\}|=|\\b[a-zA-Z0-9]|[-_.])',
      name: 'invalid.illegal.character-not-allowed-here.plist'
    },
    string: {
      patterns: [
        {
          begin: "\\G'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.plist'}
          },
          end: "'(?!')",
          endCaptures: {0: {name: 'punctuation.definition.string.end.plist'}},
          name: 'string.quoted.single.plist',
          patterns: [{include: '#string-contents'}]
        },
        {
          begin: '\\G"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.plist'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.plist'}},
          name: 'string.quoted.double.plist',
          patterns: [{include: '#string-contents'}]
        },
        {
          match: '\\G[-+]?\\d+(\\.\\d*)?(E[-+]\\d+)?(?!\\w)',
          name: 'constant.numeric.plist'
        },
        {match: '\\G[-a-zA-Z0-9_.]+', name: 'string.unquoted.plist'}
      ]
    },
    'string-contents': {
      match: '\\\\([uU]([[:xdigit:]]{4}|[[:xdigit:]]{2})|\\d{1,3}|.)',
      name: 'constant.character.escape.plist'
    }
  },
  scopeName: 'source.plist'
}

export default grammar
