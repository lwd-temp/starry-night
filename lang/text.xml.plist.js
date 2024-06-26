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
  dependencies: ['text.xml'],
  extensions: [
    '.sttheme',
    '.tmcommand',
    '.tmlanguage',
    '.tmpreferences',
    '.tmsnippet',
    '.tmtheme'
  ],
  names: ['xml-property-list'],
  patterns: [{include: '#xml'}],
  repository: {
    xml: {
      patterns: [
        {
          begin: '((<)((plist\\b)))',
          captures: {
            1: {name: 'meta.tag.plist.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          end: '((/)((plist))(>))',
          patterns: [
            {
              begin:
                '(?<=<plist)(?!>)\\s*(?:(version)(=)(?:((").*?("))|((\').*?(\'))))?',
              beginCaptures: {
                1: {name: 'entity.other.attribute-name.version.xml.plist'},
                2: {name: 'punctuation.separator.key-value.xml.plist'},
                3: {name: 'string.quoted.double.xml.plist'},
                4: {name: 'punctuation.definition.string.begin.xml.plist'},
                5: {name: 'punctuation.definition.string.end.xml.plist'},
                6: {name: 'string.quoted.single.xml.plist'},
                7: {name: 'punctuation.definition.string.begin.xml.plist'},
                8: {name: 'punctuation.definition.string.end.xml.plist'}
              },
              end: '(?=>)',
              name: 'meta.tag.plist.xml.plist'
            },
            {
              captures: {
                1: {name: 'meta.tag.plist.xml.plist'},
                2: {name: 'punctuation.definition.tag.xml.plist'},
                3: {name: 'meta.scope.between-tag-pair.xml.plist'}
              },
              match: '((>(<)))(?=/plist)'
            },
            {
              begin: '((>))(?!</plist)',
              beginCaptures: {
                1: {name: 'meta.tag.plist.xml.plist'},
                2: {name: 'punctuation.definition.tag.xml.plist'}
              },
              end: '(<)(?=/plist)',
              endCaptures: {
                0: {name: 'meta.tag.plist.xml.plist'},
                1: {name: 'punctuation.definition.tag.xml.plist'}
              },
              patterns: [{include: '#xml_tags'}]
            }
          ]
        },
        {include: '#xml_invalid'},
        {include: '#xml_comment'},
        {include: 'text.xml'},
        {include: '#xml_stray-char'}
      ]
    },
    xml_comment: {
      begin: '<!--',
      captures: {0: {name: 'punctuation.definition.comment.xml.plist'}},
      end: '(?<!-)-->',
      name: 'comment.block.xml.plist',
      patterns: [
        {
          match: '-(?=-->)|--',
          name: 'invalid.illegal.double-dash-not-allowed.xml.plist'
        }
      ]
    },
    xml_innertag: {
      patterns: [
        {
          match: '&([a-zA-Z0-9_-]+|#[0-9]+|#x[0-9a-fA-F]+);',
          name: 'constant.character.entity.xml.plist'
        },
        {match: '&', name: 'invalid.illegal.bad-ampersand.xml.plist'}
      ]
    },
    xml_invalid: {
      captures: {
        1: {name: 'meta.tag.boolean.xml.plist'},
        2: {name: 'punctuation.definition.tag.xml.plist'},
        3: {name: 'invalid.illegal.tag-not-recognized.xml.plist'},
        4: {name: 'punctuation.definition.tag.xml.plist'}
      },
      match: '((<)/?(\\w+).*?(>))'
    },
    'xml_stray-char': {
      match: '\\S',
      name: 'invalid.illegal.character-data-not-allowed-here.xml.plist'
    },
    xml_tags: {
      patterns: [
        {
          captures: {
            1: {name: 'meta.tag.dict.xml.plist'},
            10: {name: 'entity.name.tag.localname.xml.plist'},
            11: {name: 'punctuation.definition.tag.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'},
            6: {name: 'meta.tag.dict.xml.plist'},
            7: {name: 'punctuation.definition.tag.xml.plist'},
            8: {name: 'meta.scope.between-tag-pair.xml.plist'},
            9: {name: 'entity.name.tag.xml.plist'}
          },
          match: '((<)((dict))(>))(((<)/)((dict))(>))'
        },
        {
          captures: {
            1: {name: 'meta.tag.array.xml.plist'},
            10: {name: 'entity.name.tag.localname.xml.plist'},
            11: {name: 'punctuation.definition.tag.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'},
            6: {name: 'meta.tag.array.xml.plist'},
            7: {name: 'punctuation.definition.tag.xml.plist'},
            8: {name: 'meta.scope.between-tag-pair.xml.plist'},
            9: {name: 'entity.name.tag.xml.plist'}
          },
          match: '((<)((array))(>))(((<)/)((array))(>))'
        },
        {
          captures: {
            1: {name: 'meta.tag.string.xml.plist'},
            10: {name: 'entity.name.tag.localname.xml.plist'},
            11: {name: 'punctuation.definition.tag.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'},
            6: {name: 'meta.tag.string.xml.plist'},
            7: {name: 'punctuation.definition.tag.xml.plist'},
            8: {name: 'meta.scope.between-tag-pair.xml.plist'},
            9: {name: 'entity.name.tag.xml.plist'}
          },
          match: '((<)((string))(>))(((<)/)((string))(>))'
        },
        {
          begin: '((<)((key))(>))',
          captures: {
            1: {name: 'meta.tag.key.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          contentName: 'constant.other.name.xml.plist',
          end: '((</)((key))(>))',
          patterns: [
            {
              begin: '<!\\[CDATA\\[',
              captures: {0: {name: 'punctuation.definition.constant.xml'}},
              end: ']]>'
            }
          ]
        },
        {
          captures: {
            1: {name: 'meta.tag.dict.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          match: '((<)((dict))\\s*?/(>))'
        },
        {
          captures: {
            1: {name: 'meta.tag.array.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          match: '((<)((array))\\s*?/(>))'
        },
        {
          captures: {
            1: {name: 'meta.tag.string.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          match: '((<)((string))\\s*?/(>))'
        },
        {
          captures: {
            1: {name: 'meta.tag.key.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          match: '((<)((key))\\s*?/(>))'
        },
        {
          begin: '((<)((dict))(>))',
          captures: {
            1: {name: 'meta.tag.dict.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          end: '((</)((dict))(>))',
          patterns: [{include: '#xml_tags'}]
        },
        {
          begin: '((<)((array))(>))',
          captures: {
            1: {name: 'meta.tag.array.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          end: '((</)((array))(>))',
          patterns: [{include: '#xml_tags'}]
        },
        {
          begin: '((<)((string))(>))',
          captures: {
            1: {name: 'meta.tag.string.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          contentName: 'string.quoted.other.xml.plist',
          end: '((</)((string))(>))',
          patterns: [
            {include: '#xml_innertag'},
            {
              begin: '<!\\[CDATA\\[',
              captures: {0: {name: 'punctuation.definition.string.xml'}},
              end: ']]>',
              name: 'string.unquoted.cdata.xml'
            }
          ]
        },
        {
          begin: '((<)((real))(>))',
          captures: {
            1: {name: 'meta.tag.real.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          end: '((</)((real))(>))',
          patterns: [
            {
              begin: '(<!\\[CDATA\\[)',
              captures: {
                0: {name: 'punctuation.definition.constant.xml'},
                1: {name: 'constant.numeric.real.xml.plist'}
              },
              end: '(]]>)',
              patterns: [
                {
                  match: '[-+]?\\d+(\\.\\d*)?(E[-+]\\d+)?',
                  name: 'constant.numeric.real.xml.plist'
                },
                {match: '.', name: 'invalid.illegal.not-a-number.xml.plist'}
              ]
            },
            {
              match: '[-+]?\\d+(\\.\\d*)?(E[-+]\\d+)?',
              name: 'constant.numeric.real.xml.plist'
            },
            {match: '.', name: 'invalid.illegal.not-a-number.xml.plist'}
          ]
        },
        {
          begin: '((<)((integer))(>))',
          captures: {
            1: {name: 'meta.tag.integer.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          end: '((</)((integer))(>))',
          patterns: [
            {match: '[-+]?\\d+', name: 'constant.numeric.integer.xml.plist'},
            {match: '.', name: 'invalid.illegal.not-a-number.xml.plist'}
          ]
        },
        {
          captures: {
            1: {name: 'meta.tag.boolean.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          match: '((<)((true|false))\\s*?(/>))'
        },
        {
          begin: '((<)((data))(>))',
          captures: {
            1: {name: 'meta.tag.data.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          end: '((</)((data))(>))',
          patterns: [
            {match: '[A-Za-z0-9+/]', name: 'constant.numeric.base64.xml.plist'},
            {match: '=', name: 'constant.numeric.base64.xml.plist'},
            {
              match: '[^ \\n\\t]',
              name: 'invalid.illegal.invalid-character.xml.plist'
            }
          ]
        },
        {
          begin: '((<)((date))(>))',
          captures: {
            1: {name: 'meta.tag.date.xml.plist'},
            2: {name: 'punctuation.definition.tag.xml.plist'},
            3: {name: 'entity.name.tag.xml.plist'},
            4: {name: 'entity.name.tag.localname.xml.plist'},
            5: {name: 'punctuation.definition.tag.xml.plist'}
          },
          end: '((</)((date))(>))',
          patterns: [
            {
              match:
                '(?x)\n\t\t\t\t\t\t\t\t\t\t[0-9]{4}\t\t\t\t\t\t# Year\n\t\t\t\t\t\t\t\t\t\t-\t\t\t\t\t\t\t\t# Divider\n\t\t\t\t\t\t\t\t\t\t(0[1-9]|1[012])\t\t\t\t\t# Month\n\t\t\t\t\t\t\t\t\t\t-\t\t\t\t\t\t\t\t# Divider\n\t\t\t\t\t\t\t\t\t\t(?!00|3[2-9])[0-3][0-9]\t\t\t# Day\n\t\t\t\t\t\t\t\t\t\tT\t\t\t\t\t\t\t\t# Separator\n\t\t\t\t\t\t\t\t\t\t(?!2[5-9])[0-2][0-9]\t\t\t# Hour\n\t\t\t\t\t\t\t\t\t\t:\t\t\t\t\t\t\t\t# Divider\n\t\t\t\t\t\t\t\t\t\t[0-5][0-9]\t\t\t\t\t\t# Minute\n\t\t\t\t\t\t\t\t\t\t:\t\t\t\t\t\t\t\t# Divider\n\t\t\t\t\t\t\t\t\t\t(?!6[1-9])[0-6][0-9]\t\t\t# Second\n\t\t\t\t\t\t\t\t\t\tZ\t\t\t\t\t\t\t\t# Zulu\n\t\t\t\t\t\t\t\t\t',
              name: 'constant.other.date.xml.plist'
            }
          ]
        },
        {include: '#xml_invalid'},
        {include: '#xml_comment'},
        {include: '#xml_stray-char'}
      ]
    }
  },
  scopeName: 'text.xml.plist'
}

export default grammar
