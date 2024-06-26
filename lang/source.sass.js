// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atom/language-sass>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.css'],
  extensions: ['.sass'],
  names: ['sass'],
  patterns: [
    {
      begin: '(?:(!)|(\\$))([a-zA-Z0-9_-]+)\\s*(?=(\\|\\|)?=|:\\s+)',
      beginCaptures: {
        1: {name: 'invalid.illegal.deprecated.sass'},
        2: {name: 'punctuation.definition.entity.sass'},
        3: {name: 'variable.other.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.variable-declaration.sass',
      patterns: [
        {
          begin: '(?:(:)\\s+)|((\\|\\|)?=)',
          beginCaptures: {
            1: {name: 'punctuation.separator.key-value.css'},
            2: {name: 'invalid.illegal.deprecated.sass'}
          },
          end: '(?=;?$)',
          name: 'meta.property-value.sass',
          patterns: [{include: '#property-value'}]
        }
      ]
    },
    {
      begin: '\\s*((@)if\\b)\\s+',
      beginCaptures: {
        1: {name: 'keyword.control.if.sass'},
        2: {name: 'punctuation.definition.entity.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.at-rule.if.sass',
      patterns: [{include: '#property-value'}]
    },
    {
      begin: '\\s*((@)(?:(?:else(?=\\s*$))|(?:else\\s+if\\s+(?=\\S+))))',
      beginCaptures: {
        1: {name: 'keyword.control.else.sass'},
        2: {name: 'punctuation.definition.entity.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.at-rule.else.sass',
      patterns: [{include: '#property-value'}]
    },
    {
      begin: '\\s*((@)while\\b)\\s+',
      beginCaptures: {
        1: {name: 'keyword.control.while.sass'},
        2: {name: 'punctuation.definition.entity.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.at-rule.while.sass',
      patterns: [{include: '#property-value'}]
    },
    {
      begin: '\\s*((@)for\\b)\\s+',
      beginCaptures: {
        1: {name: 'keyword.control.for.sass'},
        2: {name: 'punctuation.definition.entity.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.at-rule.for.sass',
      patterns: [{include: '#property-value'}]
    },
    {
      begin: '\\s*((@)each\\b)\\s+',
      beginCaptures: {
        1: {name: 'keyword.control.each.sass'},
        2: {name: 'punctuation.definition.entity.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.at-rule.each.sass',
      patterns: [{include: '#property-value'}]
    },
    {
      begin: '^((@)function\\b)\\s*([a-zA-Z0-9_-]+)',
      beginCaptures: {
        1: {name: 'keyword.control.at-rule.function.sass'},
        2: {name: 'punctuation.definition.entity.sass'},
        3: {name: 'support.function.misc.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.at-rule.function.sass',
      patterns: [{include: '#property-value'}]
    },
    {
      begin: '\\s*((@)return\\b)\\s+',
      beginCaptures: {
        1: {name: 'keyword.control.return.sass'},
        2: {name: 'punctuation.definition.entity.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.at-rule.return.sass',
      patterns: [{include: '#property-value'}]
    },
    {
      begin: '^(=\\s*|(?:(@)mixin))\\s+([a-zA-Z0-9_-]+)',
      beginCaptures: {
        1: {name: 'keyword.control.at-rule.mixin.sass'},
        2: {name: 'punctuation.definition.entity.sass'},
        3: {name: 'variable.other.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.variable-declaration.sass.mixin',
      patterns: [{include: '#property-value'}]
    },
    {
      begin: '\\s*((@)content)\\s*$',
      beginCaptures: {
        1: {name: 'keyword.control.content.sass'},
        2: {name: 'punctuation.definition.entity.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.at-rule.content.sass',
      patterns: [{include: '#property-value'}]
    },
    {
      begin:
        '^\\s*(\\+(?!\\s+)|(?:(@)include(?=\\s+)))\\s*(?:([\\w-]+)(\\.))?([a-zA-Z0-9_-]+)',
      beginCaptures: {
        1: {name: 'keyword.control.at-rule.include.sass'},
        2: {name: 'punctuation.definition.entity.sass'},
        3: {name: 'variable.sass'},
        4: {name: 'punctuation.access.module.sass'},
        5: {name: 'variable.other.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.function.include.sass',
      patterns: [{include: '#property-value'}]
    },
    {
      captures: {
        1: {name: 'keyword.control.at-rule.extend.sass'},
        2: {name: 'variable.other.sass'},
        3: {name: 'invalid.illegal.punctuation.sass'}
      },
      match: '^\\s*(@extend)\\s+([.*&#%a-zA-Z][-_:.*&#a-zA-Z]*)\\s*(;)?\\s*$',
      name: 'meta.function.extend.sass'
    },
    {
      begin: '\\s*((@)(warn|debug|error)\\b)\\s*',
      beginCaptures: {
        1: {name: 'keyword.control.warn.sass'},
        2: {name: 'punctuation.definition.entity.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.at-rule.warn.sass',
      patterns: [{include: '#string-single'}, {include: '#string-double'}]
    },
    {
      begin: '^\\s*((@)at-root)(?!(?:\\s+[^.\\(])|(?:\\s+\\((?!with)))',
      beginCaptures: {
        1: {name: 'keyword.control.at-root.sass'},
        2: {name: 'punctuation.definition.entity.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.at-rule.at-root.sass',
      patterns: [
        {
          captures: {
            1: {name: 'support.function.misc.sass'},
            2: {name: '.entity.other.attribute-name'}
          },
          match:
            '(?:(\\((?:with(?:out)?)\\s*:\\s*[a-zA-Z ]+\\))|((?:[.*&#a][:*&#a-zA-Z]+)+))'
        }
      ]
    },
    {
      begin: '^\\s*((@)use\\b)\\s*',
      beginCaptures: {
        1: {name: 'keyword.control.at-rule.use.sass'},
        2: {name: 'punctuation.definition.keyword.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.at-rule.use.sass',
      patterns: [
        {match: '\\b(as|with)\\b', name: 'keyword.control.operator'},
        {match: '\\b[\\w-]+\\b', name: 'variable.sass'},
        {match: '\\*', name: 'variable.language.expanded-namespace.sass'},
        {include: '#string-single'},
        {include: '#string-double'},
        {include: '#comments'},
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.module.begin.bracket.round.sass'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.module.end.bracket.round.sass'}
          },
          patterns: [{include: '#property-value'}]
        }
      ]
    },
    {
      begin: '\\s*((@)forward\\b)\\s*',
      captures: {
        1: {name: 'keyword.control.at-rule.forward.sass'},
        2: {name: 'punctuation.definition.keyword.sass'}
      },
      end: '\\s*(?=;)',
      name: 'meta.at-rule.forward.sass',
      patterns: [
        {match: '\\b(as|hide|show)\\b', name: 'keyword.control.operator'},
        {
          captures: {
            1: {name: 'entity.other.attribute-name.module.sass'},
            2: {name: 'punctuation.definition.wildcard.sass'}
          },
          match: '\\b([\\w-]+)(\\*)'
        },
        {match: '\\b[\\w-]+\\b', name: 'entity.name.function.sass'},
        {include: '#variable-usage'},
        {include: '#string-single'},
        {include: '#string-double'},
        {include: '#comments'}
      ]
    },
    {
      begin: '^\\s*(\\+)([a-zA-Z0-9_-]+)',
      beginCaptures: {
        1: {name: 'punctuation.definition.entity.sass'},
        2: {name: 'variable.other.sass'},
        3: {name: 'punctuation.definition.entity.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.variable-usage.sass',
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.entity.css'},
            2: {name: 'variable.other.sass'}
          },
          match: '(!|\\$)([a-zA-Z0-9_-]+)',
          name: 'meta.variable-usage.sass'
        },
        {include: '#string-single'},
        {include: '#string-double'}
      ]
    },
    {
      begin: '(?=[.*&#\\[a-zA-Z][:.*&#a-zA-Z]*)',
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.selector.css',
      patterns: [
        {include: '#comments'},
        {
          captures: {
            1: {name: 'keyword.other.parent-reference.sass'},
            2: {name: 'entity.other.attribute-name.parent-selector-suffix.sass'}
          },
          match: '(&)([a-zA-Z0-9_-]*)'
        },
        {
          captures: {1: {name: 'punctuation.definition.entity.css'}},
          match: '(\\.)[a-zA-Z0-9_-]+',
          name: 'entity.other.attribute-name.class.sass'
        },
        {include: 'source.css#tag-names'},
        {
          captures: {1: {name: 'punctuation.definition.entity.sass'}},
          match: '(#)[a-zA-Z][a-zA-Z0-9_-]*',
          name: 'entity.other.attribute-name.id.css.sass'
        },
        {match: '\\*', name: 'entity.name.tag.wildcard.sass'},
        {include: 'source.css#pseudo-classes'},
        {include: 'source.css#pseudo-elements'},
        {include: 'source.css#functional-pseudo-classes'},
        {
          captures: {
            1: {
              name: 'punctuation.definition.attribute-selector.begin.bracket.square.sass'
            },
            2: {name: 'entity.other.attribute-name.attribute.sass'},
            3: {name: 'keyword.operator.sass'},
            4: {name: 'string.unquoted.attribute-value.sass'},
            5: {name: 'string.quoted.double.attribute-value.sass'},
            6: {name: 'punctuation.definition.string.begin.sass'},
            7: {name: 'punctuation.definition.string.end.sass'},
            8: {
              name: 'punctuation.definition.attribute-selector.end.bracket.square.sass'
            }
          },
          match:
            '(?i)(\\[)\\s*(-?[_a-z\\\\[[:^ascii:]]][-_a-z0-9\\\\[[:^ascii:]]]*)(?:\\s*([~|^$*]?=)\\s*(?:(-?[_a-z\\\\[[:^ascii:]]][-_a-z0-9\\\\[[:^ascii:]]]*)|((?>([\'"])(?:[^\\\\]|\\\\.)*?(\\6)))))?\\s*(])',
          name: 'meta.attribute-selector.css.sass'
        }
      ]
    },
    {include: '#comments'},
    {
      begin: '^(=|@keyframes\\s+)([a-zA-Z0-9_-]+)',
      beginCaptures: {
        1: {name: 'keyword.control.at-rule.keyframes.sass'},
        2: {name: 'variable.other.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.variable-declaration.sass.mixin',
      patterns: [{include: '#property-value'}]
    },
    {
      begin: '^\\s*((@)import\\b)',
      beginCaptures: {
        1: {name: 'keyword.control.at-rule.import.sass'},
        2: {name: 'punctuation.definition.keyword.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      name: 'meta.at-rule.import.sass',
      patterns: [
        {include: '#string-double'},
        {
          begin: '(url)\\s*(\\()\\s*',
          beginCaptures: {
            1: {name: 'support.function.url.sass'},
            2: {name: 'punctuation.section.function.sass'}
          },
          end: '\\s*(\\))\\s*',
          endCaptures: {1: {name: 'punctuation.section.function.sass'}},
          patterns: [
            {match: '[^\'") \\t]+', name: 'variable.parameter.url.sass'},
            {include: '#string-single'},
            {include: '#string-double'}
          ]
        },
        {match: '([^"\'\\n;]+)', name: 'variable.parameter.url.sass'}
      ]
    },
    {
      begin: '^\\s*((@)media)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.at-rule.media.sass'},
        2: {name: 'punctuation.definition.keyword.sass'}
      },
      end: '$',
      name: 'meta.at-rule.media.sass',
      patterns: [
        {match: '\\b(only)\\b', name: 'keyword.control.operator.css.sass'},
        {
          begin: '\\(',
          beginCaptures: {
            0: {
              name: 'punctuation.definition.media-query.begin.bracket.round.sass'
            }
          },
          end: '\\)',
          endCaptures: {
            0: {
              name: 'punctuation.definition.media-query.end.bracket.round.sass'
            }
          },
          name: 'meta.property-list.media-query.sass',
          patterns: [
            {
              begin: '(?<![-a-z])(?=[-a-z])',
              end: '$|(?![-a-z])',
              name: 'meta.property-name.media-query.sass',
              patterns: [
                {include: 'source.css#media-features'},
                {include: 'source.css#property-names'}
              ]
            },
            {
              begin: '(:)\\s*',
              beginCaptures: {
                1: {name: 'punctuation.separator.key-value.sass'}
              },
              contentName: 'meta.property-value.media-query.sass',
              end: '\\s*(?=\\))',
              patterns: [{include: '#property-value'}]
            }
          ]
        },
        {include: '#variable-usage'},
        {include: '#conditional-operators'},
        {include: 'source.css#media-types'}
      ]
    },
    {
      begin: '^\\s+(:)(?=[-a-z])',
      beginCaptures: {1: {name: 'punctuation.separator.key-value.css'}},
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      patterns: [
        {include: '#property-name'},
        {
          begin: '\\s+',
          end: '(?=;?$)',
          name: 'meta.property-value.sass',
          patterns: [{include: '#property-value'}]
        }
      ]
    },
    {
      begin: '^\\s+([-A-Za-z]+)\\s*(?=(\\|\\|)?=|:[ \\t]+)',
      beginCaptures: {
        1: {patterns: [{include: '#property-name'}]},
        2: {name: 'punctuation.separator.key-value.css'},
        3: {name: 'invalid.illegal.deprecated.sass'}
      },
      end: '(;)?$',
      endCaptures: {1: {name: 'invalid.illegal.punctuation.sass'}},
      patterns: [
        {
          begin: '(?:(:)\\s+)|((\\|\\|)?=)',
          beginCaptures: {
            1: {name: 'punctuation.separator.key-value.css'},
            2: {name: 'invalid.illegal.deprecated.sass'}
          },
          end: '(?=;?$)',
          name: 'meta.property-value.sass',
          patterns: [{include: '#property-value'}]
        }
      ]
    }
  ],
  repository: {
    comments: {
      patterns: [
        {
          captures: {1: {name: 'invalid.illegal.sass'}},
          match: '\\w+\\s*((//|/\\*).*)'
        },
        {
          begin: '^(\\s*)(///)',
          beginCaptures: {2: {name: 'punctuation.definition.comment.sass'}},
          end: '^(?!\\s\\1)',
          name: 'comment.block.documentation.sass',
          patterns: [{include: 'source.sassdoc'}]
        },
        {
          begin: '^(\\s*)(/\\*)',
          beginCaptures: {2: {name: 'punctuation.definition.comment.sass'}},
          end: '(\\*/)|^(?!\\s\\1)',
          endCaptures: {1: {name: 'punctuation.definition.comment.sass'}},
          name: 'comment.block.sass'
        },
        {
          begin: '^(\\s*)(//)',
          beginCaptures: {2: {name: 'punctuation.definition.comment.sass'}},
          end: '^(?!\\s\\1)',
          name: 'comment.line.sass'
        }
      ]
    },
    'conditional-operators': {
      patterns: [
        {match: '==|!=|<=|>=|<|>', name: 'keyword.operator.comparison.sass'},
        {match: '\\b(not|or|and)\\b', name: 'keyword.operator.logical.sass'}
      ]
    },
    'property-name': {
      begin: '(?=[-A-Za-z]+)',
      end: '(?!\\G)',
      name: 'meta.property-name.sass',
      patterns: [{include: 'source.css#property-names'}]
    },
    'property-value': {
      patterns: [
        {include: 'source.css#numeric-values'},
        {match: '[-+*/](?!\\s*[-+*/])', name: 'keyword.operator.css'},
        {include: '#variable-usage'},
        {
          match: '\\b(true|false)\\b',
          name: 'support.constant.property-value.css.sass'
        },
        {include: 'source.css#property-keywords'},
        {include: 'source.css#color-keywords'},
        {
          captures: {1: {name: 'punctuation.definition.constant.css'}},
          match: '(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b',
          name: 'constant.other.color.rgb-value.css'
        },
        {include: '#string-double'},
        {include: '#string-single'},
        {
          begin: '([\\w-]+)(\\.)([\\w-]+)(\\()',
          beginCaptures: {
            1: {name: 'variable.sass'},
            2: {name: 'punctuation.access.module.sass'},
            3: {name: 'support.function.misc.sass'},
            4: {name: 'punctuation.section.function.sass'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.section.function.sass'}},
          patterns: [
            {include: '#string-double'},
            {include: '#string-single'},
            {include: '#variable-usage'},
            {include: 'source.css#numeric-values'}
          ]
        },
        {
          begin: '(rgb|url|attr|counter|counters|local|format)\\s*(\\()',
          beginCaptures: {
            1: {name: 'support.function.misc.sass'},
            2: {name: 'punctuation.section.function.sass'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.section.function.sass'}},
          patterns: [
            {include: '#string-single'},
            {include: '#string-double'},
            {
              match:
                '(\\b0*((1?[0-9]{1,2})|(2([0-4][0-9]|5[0-5])))\\s*,\\s*)(0*((1?[0-9]{1,2})|(2([0-4][0-9]|5[0-5])))\\s*,\\s*)(0*((1?[0-9]{1,2})|(2([0-4][0-9]|5[0-5])))\\b)',
              name: 'constant.other.color.rgb-value.sass'
            },
            {
              match:
                '\\b([0-9]{1,2}|100)\\s*%,\\s*([0-9]{1,2}|100)\\s*%,\\s*([0-9]{1,2}|100)\\s*%',
              name: 'constant.other.color.rgb-percentage.sass'
            },
            {match: '[^\'") \\t]+', name: 'variable.parameter.misc.sass'}
          ]
        },
        {match: '!\\s*important', name: 'keyword.other.important.sass'},
        {match: '(from|to|through|in)', name: 'keyword.operator.control.sass'},
        {include: '#conditional-operators'}
      ]
    },
    'string-double': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.sass'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.sass'}},
      name: 'string.quoted.double.sass',
      patterns: [
        {
          match: '\\\\([[:xdigit:]]{1,6}|.)',
          name: 'constant.character.escape.sass'
        }
      ]
    },
    'string-single': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.sass'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.sass'}},
      name: 'string.quoted.single.sass',
      patterns: [
        {
          match: '\\\\([[:xdigit:]]{1,6}|.)',
          name: 'constant.character.escape.sass'
        }
      ]
    },
    'variable-usage': {
      captures: {
        1: {name: 'variable.sass'},
        2: {name: 'punctuation.access.module.sass'},
        3: {name: 'punctuation.definition.entity.css'},
        4: {name: 'variable.other.sass'}
      },
      match: '(?:([\\w-]+)(\\.)(?=\\$))?(!|\\$)([a-zA-Z0-9_-]+)',
      name: 'meta.variable-usage.sass'
    }
  },
  scopeName: 'source.sass'
}

export default grammar
