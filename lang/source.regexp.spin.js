/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [
    {match: '\\\\[bBAZzG]|\\^|\\$', name: 'keyword.control.anchor.regexp'},
    {match: '\\\\[1-9][0-9]?', name: 'keyword.other.back-reference.regexp'},
    {
      match: '[?+*][?+]?|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??',
      name: 'keyword.operator.quantifier.regexp'
    },
    {match: '\\|', name: 'keyword.operator.or.regexp'},
    {begin: '\\(\\?\\#', end: '\\)', name: 'comment.block.regexp'},
    {
      match: '(?<=^|\\s)#\\s[[a-zA-Z0-9,. \\t?!-:][^\\x{00}-\\x{7F}]]*$',
      name: 'comment.line.number-sign.regexp'
    },
    {match: '\\(\\?[iLmsux]+\\)', name: 'keyword.other.option-toggle.regexp'},
    {
      match: '(\\()(\\?P=([a-zA-Z_][a-zA-Z_0-9]*\\w*))(\\))',
      name: 'keyword.other.back-reference.named.regexp'
    },
    {
      begin: '(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))',
      beginCaptures: {
        1: {name: 'punctuation.definition.group.regexp'},
        2: {name: 'punctuation.definition.group.assertion.regexp'},
        3: {name: 'meta.assertion.look-ahead.regexp'},
        4: {name: 'meta.assertion.negative-look-ahead.regexp'},
        5: {name: 'meta.assertion.look-behind.regexp'},
        6: {name: 'meta.assertion.negative-look-behind.regexp'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.group.regexp'}},
      name: 'meta.group.assertion.regexp',
      patterns: [{include: '$self'}]
    },
    {
      begin: '(\\()(\\?\\(([1-9][0-9]?|[a-zA-Z_][a-zA-Z_0-9]*)\\))',
      beginCaptures: {
        1: {name: 'punctuation.definition.group.regexp'},
        2: {name: 'punctuation.definition.group.assertion.conditional.regexp'},
        3: {name: 'entity.name.section.back-reference.regexp'}
      },
      end: '(\\))',
      name: 'meta.group.assertion.conditional.regexp',
      patterns: [{include: '$self'}]
    },
    {
      begin: '(\\()((\\?P<)([a-z]\\w*)(>)|(\\?:))?',
      beginCaptures: {
        1: {name: 'punctuation.definition.group.regexp'},
        3: {name: 'punctuation.definition.group.capture.regexp'},
        4: {name: 'entity.name.section.group.regexp'},
        5: {name: 'punctuation.definition.group.capture.regexp'},
        6: {name: 'punctuation.definition.group.no-capture.regexp'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.group.regexp'}},
      name: 'meta.group.regexp',
      patterns: [{include: '$self'}]
    },
    {include: '#character-class'}
  ],
  repository: {
    'character-class': {
      patterns: [
        {
          match: '\\\\[wWsSdDhH]|\\.',
          name: 'constant.character.character-class.regexp'
        },
        {match: '\\\\.', name: 'constant.character.escape.backslash.regexp'},
        {
          begin: '(\\[)(\\^)?',
          beginCaptures: {
            1: {name: 'punctuation.definition.character-class.regexp'},
            2: {name: 'keyword.operator.negation.regexp'}
          },
          end: '(\\])',
          endCaptures: {
            1: {name: 'punctuation.definition.character-class.regexp'}
          },
          name: 'constant.other.character-class.set.regexp',
          patterns: [
            {include: '#character-class'},
            {
              captures: {
                2: {name: 'constant.character.escape.backslash.regexp'},
                4: {name: 'constant.character.escape.backslash.regexp'}
              },
              match: '((\\\\.)|.)\\-((\\\\.)|[^\\]])',
              name: 'constant.other.character-class.range.regexp'
            }
          ]
        }
      ]
    }
  },
  scopeName: 'source.regexp.spin'
}

export default grammar
