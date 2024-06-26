// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.thrift'],
  names: ['thrift'],
  patterns: [
    {include: '#comments'},
    {
      captures: {
        1: {name: 'keyword.other.include.thrift'},
        2: {name: 'string.quoted.thrift'},
        3: {name: 'punctuation.definition.string.begin.thrift'},
        4: {name: 'punctuation.definition.string.end.thrift'}
      },
      match: '(?<!\\S)(include)(?!\\S)(?:\\s+(([\'"])(?>.*?(\\3))))?',
      name: 'meta.include.thrift'
    },
    {
      captures: {
        1: {name: 'keyword.other.cpp-include.thrift'},
        2: {name: 'string.quoted.thrift'},
        3: {name: 'punctuation.definition.string.begin.thrift'},
        4: {name: 'punctuation.definition.string.end.thrift'}
      },
      match: '(?<!\\S)(cpp_include)(?!\\S)(?:\\s+(([\'"])(?>.*?(\\3))))?',
      name: 'meta.cpp-include.thrift'
    },
    {
      captures: {
        1: {name: 'keyword.other.namespace.thrift'},
        2: {name: 'support.other.namespace-language.thrift'},
        3: {name: 'variable.other.namespace.thrift'}
      },
      match:
        '(?<!\\S)(namespace)(?!\\S)(?:\\s+([a-zA-Z_][\\w.]*)(?:\\s+([a-zA-Z_][\\w.]*))?)?',
      name: 'meta.namespace.thrift'
    },
    {
      captures: {
        1: {name: 'keyword.other.namespace.thrift'},
        2: {name: 'variable.other.namespace.thrift'}
      },
      match:
        '(?<!\\S)((?:php|xsd)_namespace)(?!\\S)(?:\\s+([a-zA-Z_][\\w.]*))?',
      name: 'meta.namespace.thrift'
    },
    {
      captures: {
        1: {name: 'invalid.deprecated.namespace.thrift'},
        2: {name: 'variable.other.namespace.thrift'}
      },
      match:
        '(?<!\\S)((?:cpp|ruby|csharp)_namespace|py_module|(?:java|perl)_package|smalltalk_(?:category|prefix)|cocoa_prefix)(?!\\S)(?:\\s+([a-zA-Z_][\\w.]*))?'
    },
    {
      begin: '(?=(struct|s?enum|union|service|const|typedef|exception)\\b)',
      end: '(?x)$.^ # this regex should never end',
      patterns: [
        {include: '#comments'},
        {
          begin:
            '(?<!\\S)(const)(?!\\S)(?:\\s+(?<ft>map\\s*<\\s*\\g<ft>\\s*,\\s*\\g<ft>\\s*>|set\\s*<\\s*\\g<ft>\\s*>|list\\s*<\\s*\\g<ft>\\s*>\\s*cpp_type|[a-zA-Z_][\\w.]*)(?:\\s+([a-zA-Z_][\\w.]*)(?:\\s*=)?)?)?',
          beginCaptures: {
            1: {name: 'keyword.other.const.thrift'},
            2: {name: 'storage.type.const.thrift'},
            3: {name: 'variable.other.const.thrift'}
          },
          end: '$|^',
          name: 'meta.const.thrift',
          patterns: [{include: '#comments'}, {include: '#value'}]
        },
        {
          begin:
            '(?<!\\S)(typedef)(?!\\S)(?:\\s+(?<ft>map\\s*<\\s*\\g<ft>\\s*,\\s*\\g<ft>\\s*>|set\\s*<\\s*\\g<ft>\\s*>|list\\s*<\\s*\\g<ft>\\s*>\\s*cpp_type|[a-zA-Z_][\\w.]*)(?:\\s+([a-zA-Z_][\\w.]*))?)?',
          beginCaptures: {
            1: {name: 'keyword.other.typedef.thrift'},
            2: {name: 'storage.type.typedef.thrift'},
            3: {name: 'variable.other.typedef.thrift'}
          },
          end: '$|^',
          name: 'meta.typedef.thrift',
          patterns: [{include: '#comments'}]
        },
        {
          begin:
            '(?<!\\S)(union)(?!\\S)(?:\\s+([a-zA-Z_][\\w.]*)\\s*(?![^\\s{]))?',
          beginCaptures: {
            1: {name: 'keyword.other.union.thrift'},
            2: {name: 'entity.name.type.union.thrift'}
          },
          end: '(?<=\\})|$',
          name: 'meta.union.thrift',
          patterns: [
            {
              match: '(?<!\\S)xsd_all(?!\\S)',
              name: 'keyword.other.xsd-all.thrift'
            },
            {
              begin: '\\{',
              beginCaptures: {
                0: {name: 'punctuation.section.union.begin.thrift'}
              },
              end: '\\}',
              endCaptures: {0: {name: 'punctuation.section.union.end.thrift'}},
              patterns: [{include: '#comments'}, {include: '#field'}]
            }
          ]
        },
        {
          begin:
            '(?<!\\S)(enum)(?!\\S)(?:\\s+([a-zA-Z_][\\w.]*)\\s*(?![^\\s{]))?',
          beginCaptures: {
            1: {name: 'keyword.other.enum.thrift'},
            2: {name: 'entity.name.type.enum.thrift'}
          },
          end: '(?<=\\})|$',
          name: 'meta.enum.thrift',
          patterns: [
            {
              begin: '\\{',
              beginCaptures: {
                0: {name: 'punctuation.section.enum.begin.thrift'}
              },
              end: '\\}',
              endCaptures: {0: {name: 'punctuation.section.enum.end.thrift'}},
              patterns: [
                {
                  captures: {
                    1: {name: 'variable.other.enum.thrift'},
                    2: {name: 'constant.numeric.integer.thrift'}
                  },
                  match:
                    '(?<!\\S)([a-zA-Z_][\\w.]*)(?:\\s*=\\s*(\\d*)(?:\\s*[,;])?)?'
                },
                {include: '#comments'},
                {match: '\\S', name: 'invalid.illegal.thrift'}
              ]
            }
          ]
        },
        {
          begin:
            '(?<!\\S)(senum)(?!\\S)(?:\\s+([a-zA-Z_][\\w.]*)\\s*(?![^\\s{]))?',
          beginCaptures: {
            1: {name: 'keyword.other.senum.thrift'},
            2: {name: 'entity.name.type.senum.thrift'}
          },
          end: '(?<=\\})|$',
          name: 'meta.senum.thrift',
          patterns: [
            {
              begin: '\\{',
              beginCaptures: {
                0: {name: 'punctuation.section.senum.begin.thrift'}
              },
              end: '\\}',
              endCaptures: {0: {name: 'punctuation.section.senum.end.thrift'}},
              patterns: [
                {
                  captures: {1: {name: 'variable.other.senum.thrift'}},
                  match: '(?<!\\S)([a-zA-Z_][\\w.]*)(?:\\s*[,;])?'
                },
                {include: '#comments'},
                {match: '\\S', name: 'invalid.illegal.thrift'}
              ]
            }
          ]
        },
        {
          begin:
            '(?<!\\S)(struct)(?!\\S)(?:\\s+([a-zA-Z_][\\w.]*)\\s*(?![^\\s{]))?',
          beginCaptures: {
            1: {name: 'keyword.other.struct.thrift'},
            2: {name: 'entity.name.type.struct.thrift'}
          },
          end: '(?<=\\})|$',
          name: 'meta.struct.thrift',
          patterns: [
            {
              match: '(?<!\\S)xsd_all(?!\\S)',
              name: 'keyword.other.xsd-all.thrift'
            },
            {
              begin: '\\{',
              beginCaptures: {
                0: {name: 'punctuation.section.struct.begin.thrift'}
              },
              end: '\\}',
              endCaptures: {0: {name: 'punctuation.section.struct.end.thrift'}},
              patterns: [{include: '#comments'}, {include: '#field'}]
            }
          ]
        },
        {
          begin:
            '(?<!\\S)(exception)(?!\\S)(?:\\s+([a-zA-Z_][\\w.]*)\\s*(?![^\\s{]))?',
          beginCaptures: {
            1: {name: 'keyword.other.exception.thrift'},
            2: {name: 'entity.name.type.exception.thrift'}
          },
          end: '(?<=\\})|$',
          name: 'meta.exception.thrift',
          patterns: [
            {
              begin: '\\{',
              beginCaptures: {
                0: {name: 'punctuation.section.exception.begin.thrift'}
              },
              end: '\\}',
              endCaptures: {
                0: {name: 'punctuation.section.exception.end.thrift'}
              },
              patterns: [{include: '#comments'}, {include: '#field'}]
            }
          ]
        },
        {
          begin:
            '(?<!\\S)(service)(?!\\S)(?:\\s+([a-zA-z_][\\w.]*)(?:\\s+(extends)(?:\\s+([a-zA-Z_][\\w.]*))?)?\\s*(?![^\\s{]))?',
          beginCaptures: {
            1: {name: 'keyword.other.service.thrift'},
            2: {name: 'entity.name.type.service.thrift'},
            3: {name: 'keyword.other.service.extends.thrift'},
            4: {name: 'entity.other.inherited-class.thrift'}
          },
          end: '(?<=\\})|$',
          name: 'meta.service.thrift',
          patterns: [
            {
              begin: '\\{',
              beginCaptures: {
                0: {name: 'punctuation.section.service.begin.thrift'}
              },
              end: '\\}',
              endCaptures: {
                0: {name: 'punctuation.section.service.end.thrift'}
              },
              patterns: [
                {include: '#comments'},
                {
                  begin:
                    '(?x)(?<!\\S)\n\t\t\t\t\t\t\t\t\t\t\t(async(?!\\S))?\\s*\n\t\t\t\t\t\t\t\t\t\t\t(?<ft>\n\t\t\t\t\t\t\t\t\t\t\t\tmap\\s*<\\s*\\g<ft>\\s*,\\s*\\g<ft>\\s*> |\n\t\t\t\t\t\t\t\t\t\t\t\tset\\s*<\\s*\\g<ft>\\s*> |\n\t\t\t\t\t\t\t\t\t\t\t\tlist\\s*<\\s*\\g<ft>\\s*>\\s*(cpp_type(?!\\S))? |\n\t\t\t\t\t\t\t\t\t\t\t\t(?!async\\b)[a-zA-Z_][\\w.]*\n\t\t\t\t\t\t\t\t\t\t\t)\\s*\n\t\t\t\t\t\t\t\t\t\t\t(?:\n\t\t\t\t\t\t\t\t\t\t\t\t(?<!\\S)([a-zA-Z_][\\w.]*)\\s*(?![^\\s(])\n\t\t\t\t\t\t\t\t\t\t\t)?',
                  beginCaptures: {
                    1: {name: 'keyword.other.async.thrift'},
                    2: {name: 'storage.type.function.thrift'},
                    3: {name: 'keyword.other.cpp_type.thrift'},
                    4: {name: 'entity.name.function.thrift'}
                  },
                  end: '$|^',
                  name: 'meta.service.function.thrift',
                  patterns: [
                    {
                      begin: '\\(',
                      beginCaptures: {
                        0: {
                          name: 'punctuation.definition.arguments.begin.thrift'
                        }
                      },
                      end: '\\)',
                      endCaptures: {
                        0: {name: 'punctuation.definition.arguments.end.thrift'}
                      },
                      patterns: [{include: '#comments'}, {include: '#field'}]
                    },
                    {
                      begin: '(?<![^\\s)])(throws)(?![^\\s(])',
                      beginCaptures: {
                        1: {
                          name: 'keyword.other.service.function.throws.thrift'
                        }
                      },
                      end: '$',
                      patterns: [
                        {
                          begin: '\\(',
                          beginCaptures: {
                            0: {
                              name: 'punctuation.definition.arguments.begin.thrift'
                            }
                          },
                          end: '\\)',
                          endCaptures: {
                            0: {
                              name: 'punctuation.definition.arguments.end.thrift'
                            }
                          },
                          patterns: [
                            {include: '#comments'},
                            {include: '#field'}
                          ]
                        }
                      ]
                    },
                    {include: '#comments'}
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '(^[ \\t]+)?(?=#)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.thrift'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '#',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.thrift'}
              },
              end: '\\n',
              name: 'comment.line.number-sign.thrift'
            }
          ]
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.thrift'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.thrift'}
              },
              end: '\\n',
              name: 'comment.line.double-slash.thrift'
            }
          ]
        },
        {
          begin: '/\\*\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.thrift'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.thrift'}},
          name: 'comment.block.documentation.thrift'
        },
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.thrift'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.thrift'}},
          name: 'comment.block.thrift'
        }
      ]
    },
    field: {
      begin:
        '(?x)\n\t\t\t\t\t\t(?<![^\\s{(])(?=\\S)\n\t\t\t\t\t\t(\\d+\\s*:)?[ \\t]*\n\t\t\t\t\t\t(?:\t(required|optional)(?!\\S)[ \\t]*\n\t\t\t\t\t\t|\t(?=\\S)(?!=required|optional|\\d)\n\t\t\t\t\t\t)',
      beginCaptures: {
        1: {name: 'entity.other.field-id.thrift'},
        2: {name: 'keyword.other.requiredness.thrift'}
      },
      end: '[,;]|(?=[)#]|//|/\\*)|$',
      endCaptures: {0: {name: 'punctuation.separator.fields.thrift'}},
      name: 'meta.field.thrift',
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t\t(?<ft>\n\t\t\t\t\t\t\t\tmap\\s*<\\s*\\g<ft>\\s*,\\s*\\g<ft>\\s*> |\n\t\t\t\t\t\t\t\tset\\s*<\\s*\\g<ft>\\s*> |\n\t\t\t\t\t\t\t\tlist\\s*<\\s*\\g<ft>\\s*>\\s*(cpp_type(?!\\S))? |\n\t\t\t\t\t\t\t\t[a-zA-Z_][\\w.]*\n\t\t\t\t\t\t\t)[ \\t]*\n\t\t\t\t\t\t\t(?:([a-zA-Z_][\\w.]*)[ \\t]*)? # identifier\n\t\t\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'storage.type.field.thrift'},
            2: {name: 'keyword.other.cpp-type.thrift'},
            3: {name: 'variable.other.field-name.thrift'}
          },
          end: '(?=[,;]|[)#]|//|/\\*)|$',
          patterns: [
            {
              begin: '=',
              end: '(?=[,;]|[)#]|//|/\\*)|$',
              patterns: [
                {
                  match: '(?<!\\S)(xsd_optional)\\b',
                  name: 'keyword.other.xsd_optional.thrift'
                },
                {
                  match: '(?<!\\S)(xsd_nillable)\\b',
                  name: 'keyword.other.xsd_nillable.thrift'
                },
                {include: '#value'}
              ]
            }
          ]
        }
      ]
    },
    value: {
      patterns: [
        {
          match: '[+-]?\\d*\\.\\d+([eE][+-]?\\d+)?',
          name: 'constant.numeric.float.thrift'
        },
        {match: '[+-]?\\d+', name: 'constant.numeric.integer.thrift'},
        {match: '[a-zA-Z_][\\w.]*', name: 'constant.other.const-data.thrift'},
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.thrift'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.thrift'}},
          name: 'string.quoted.single.thrift'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.thrift'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.begin.thrift'}
          },
          name: 'string.quoted.double.thrift'
        },
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.array.begin.thrift'}
          },
          end: '\\]',
          endCaptures: {0: {name: 'punctuation.definition.array.end.thrift'}},
          name: 'meta.array.thrift',
          patterns: [{match: '[,;]'}, {include: '#value'}]
        },
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.definition.map.begin.thrift'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.map.end.thrift'}},
          name: 'meta.map.thrift',
          patterns: [{match: '[:,;]'}, {include: '#value'}]
        },
        {match: '\\S', name: 'invalid.illegal.thrift'}
      ]
    }
  },
  scopeName: 'source.thrift'
}

export default grammar
