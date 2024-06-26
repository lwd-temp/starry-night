// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.f77', '.fpp'],
  injections: {
    'source.fortran - (source.fortran.modern)': {
      patterns: [
        {
          begin: '^[Cc](?=\\b|[Cc])',
          beginCaptures: {0: {name: 'punctuation.definition.comment.fortran'}},
          end: '$\\n?',
          name: 'comment.line.c.fortran',
          patterns: [{match: '\\\\\\s*\\n'}]
        },
        {
          begin: '^\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.fortran'}},
          end: '$\\n?',
          name: 'comment.line.asterisk.fortran',
          patterns: [{match: '\\\\\\s*\\n'}]
        }
      ]
    }
  },
  names: ['fortran'],
  patterns: [
    {include: '#preprocessor-rule-enabled'},
    {include: '#preprocessor-rule-disabled'},
    {include: '#preprocessor-rule-other'},
    {
      match: '(?i:(r8|r4|\\.TRUE\\.|\\.FALSE\\.))',
      name: 'constant.language.fortran'
    },
    {
      match: '\\b[\\+\\-]?[0-9]+\\.?[0-9a-zA-Z_]*\\b',
      name: 'constant.numeric.fortran'
    },
    {
      begin:
        '(?x:\t\t\t\t\t\t\t\t# extended mode\n\t\t\t\t\t^\n\t\t\t\t\t\\s*\t\t\t\t\t\t\t\t\t# start of line and possibly some space\n\t\t\t\t\t([a-zA-Z\\(\\)]*)(?<!end)\t\t\t\t# 1: possibly some type specification but not the word end\n\t\t\t\t\t\\s*\t\t\t\t\t\t\t\t\t# possibly some space\n\t\t\t\t\t(?i:(function|subroutine))\\b\t\t# 2: function or subroutine\n\t\t\t\t\t\\s+\t\t\t\t\t\t\t\t\t# some space\n\t\t\t\t\t([A-Za-z_][A-Za-z0-9_]*)\t\t\t# 3: name\n\t\t\t\t\t)',
      beginCaptures: {
        1: {name: 'storage.type.fortran'},
        2: {name: 'storage.type.function.fortran'},
        3: {name: 'entity.name.function.fortran'}
      },
      end: '(?x:\t\t\t\t\t\t\t\t\t# extended mode\n\t\t\t\t\t((?i:end))\t\t\t\t\t\t\t# 1: the word end\n\t\t\t\t\t(\t\t\t\t\t\t\t\t\t# followed by\n\t\t\t\t\t\t$\t\t\t\t\t\t\t\t# end of line\n\t\t\t\t\t|\t\t\t\t\t\t\t\t\t# or\n\t\t\t\t\t\t\\s*\t\t\t\t\t\t\t\t# possibly some space\n\t\t\t\t\t\t(?i:(function|subroutine))\t\t# 2: function or subroutine\n\t\t\t\t\t\t((\\s+[A-Za-z_][A-Za-z0-9_]*)?)\t# 3: possibly the name\n\t\t\t\t\t)\n\t\t\t\t\t)',
      endCaptures: {
        1: {name: 'keyword.other.fortran'},
        3: {name: 'storage.type.function.fortran'},
        4: {name: 'entity.name.function.end.fortran'}
      },
      name: 'meta.function.fortran',
      patterns: [
        {
          begin: '\\G\\s*(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.parameters.begin.fortran'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.parameters.end.fortran'}
          },
          patterns: [
            {
              captures: {
                1: {name: 'variable.parameter.fortran'},
                2: {name: 'punctuation.separator.arguments.fortan'}
              },
              match: '([^\\s),]*)\\s*(,)?'
            }
          ]
        },
        {include: '$base'}
      ]
    },
    {
      begin:
        '\\b(?i:(integer|real|double\\s+precision|complex|logical|character))\\b(?=.*::)',
      beginCaptures: {1: {name: 'storage.type.fortran'}},
      end: '(?=!)|$',
      name: 'meta.specification.fortran',
      patterns: [{include: '$base'}]
    },
    {
      match:
        '\\b(?i:(go\\s*to|assign|to|if|then|else|elseif|end\\s*if|continue|stop|pause|do|end\\s*do|while|cycle))\\b',
      name: 'keyword.control.fortran'
    },
    {
      match:
        '\\b(?i:(program|end\\s+program|entry|block\\s+data|call|return|contains|include))\\b',
      name: 'keyword.control.programming-units.fortran'
    },
    {
      match:
        '\\b(?i:(open|close|read|write|print|inquire|backspace|endfile|format))\\b',
      name: 'keyword.control.io.fortran'
    },
    {
      match: '((?<!\\=)\\=(?!\\=)|\\-|\\+|\\/\\/|\\/|(?!^)\\*|::)',
      name: 'keyword.operator.fortran'
    },
    {
      match:
        '(?i:(\\.and\\.|\\.or\\.|\\.eq\\.|\\.lt\\.|\\.le\\.|\\.gt\\.|\\.ge\\.|\\.ne\\.|\\.not\\.|\\.eqv\\.|\\.neqv\\.))',
      name: 'keyword.operator.logical.fortran'
    },
    {
      match: '\\b(?i:(present)(?=\\())',
      name: 'keyword.other.instrisic.argument.fortran'
    },
    {
      match:
        '\\b(?i:(abs|aimag|aint|anint|cmplx|conjg|dble|dim|dprod|int|max|min|mod|nint|real|sign|digits|epsilon|huge|maxexponent|minexponent|precision|radix|range|tiny)(?=\\())',
      name: 'keyword.other.instrisic.numeric.fortran'
    },
    {
      match:
        '\\b(?i:(achar|adjustl|adjustr|char|iachar|ichar|index|len_trim|repeat|scan|string|trim|verify|len)(?=\\())',
      name: 'keyword.other.instrisic.string.fortran'
    },
    {
      match:
        '\\b(?i:(((acos|asin|atan|atan2|cos|cosh|exp|log|log10|sin|sinh|sqrt|tan|tanh)(?=\\())|(random_number|random_seed)))\\b',
      name: 'keyword.other.instrisic.math.fortran'
    },
    {
      match:
        '\\b(?i:(kind|selected_int_kind|selected_real_kind|transfer)(?=\\())',
      name: 'keyword.other.instrisic.data.fortran'
    },
    {
      match: '\\b(?i:(logical)(?=\\())',
      name: 'keyword.other.instrisic.logical.fortran'
    },
    {
      match:
        '\\b(?i:(((bit_size|btest|iand|ibclr|ibits|ibset|ieor|ior|ishift|ishiftc|not)(?=\\())|mvbits))\\b',
      name: 'keyword.other.instrisic.bit.fortran'
    },
    {
      match:
        '\\b(?i:(exponent|fraction|nearest|rrspacing|scale|set_exponent|spacing)(?=\\())',
      name: 'keyword.other.instrisic.floating-point.fortran'
    },
    {
      match:
        '\\b(?i:(((dot_product|sum|matmul|transpose|all|any|count|maxval|minval|maxloc|minloc|product|sum|lbound|ubound|shape|size|merge|pack|unpack|reshape|spread|cshift|eoshift)(?=\\())|(where|elsewhere|end\\s*where)))\\b',
      name: 'keyword.other.instrisic.array.fortran'
    },
    {
      match: '\\b(?i:(((dtime)(?=\\())|(date_and_time|system_clock)))\\b',
      name: 'keyword.other.instrisic.fortran'
    },
    {
      match:
        '\\b(?i:(integer|real|double\\s+precision|complex|logical|character|block\\sdata|operator|assignment))\\b',
      name: 'storage.type.fortran'
    },
    {
      match:
        '\\b(?i:(dimension|common|equivalence|parameter|external|intrinsic|save|data|implicit\\s*none|implicit|intent|in|out|inout))\\b',
      name: 'storage.modifier.fortran'
    },
    {
      applyEndPatternLast: true,
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.fortran'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.fortran'}},
      name: 'string.quoted.single.fortran',
      patterns: [
        {match: "''", name: 'constant.character.escape.apostrophe.fortran'}
      ]
    },
    {
      applyEndPatternLast: true,
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.fortran'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.fortran'}},
      name: 'string.quoted.double.fortran',
      patterns: [{match: '""', name: 'constant.character.escape.quote.fortran'}]
    },
    {
      begin: '^\\s*#\\s*(error|warning)\\b',
      captures: {1: {name: 'keyword.control.import.error.fortran'}},
      end: '$\\n?',
      name: 'meta.preprocessor.diagnostic.fortran',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.fortran'
        }
      ]
    },
    {
      begin: '^\\s*#\\s*(include|import)\\b\\s+',
      captures: {1: {name: 'keyword.control.import.include.fortran'}},
      end: '(?=(?://|/\\*))|$\\n?',
      name: 'meta.preprocessor.fortran.include',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.fortran'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.fortran'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.fortran'}},
          name: 'string.quoted.double.include.fortran'
        },
        {
          begin: '<',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.fortran'}
          },
          end: '>',
          endCaptures: {0: {name: 'punctuation.definition.string.end.fortran'}},
          name: 'string.quoted.other.lt-gt.include.fortran'
        }
      ]
    },
    {include: '#pragma-mark'},
    {
      begin:
        '^\\s*#\\s*(define|defined|elif|else|if|ifdef|ifndef|line|pragma|undef)\\b',
      captures: {1: {name: 'keyword.control.import.fortran'}},
      end: '(?=(?://|/\\*))|$\\n?',
      name: 'meta.preprocessor.fortran',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.fortran'
        }
      ]
    }
  ],
  repository: {
    disabled: {
      begin: '^\\s*#\\s*if(n?def)?\\b.*$',
      end: '^\\s*#\\s*endif\\b.*$',
      patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
    },
    'pragma-mark': {
      captures: {
        1: {name: 'meta.preprocessor.fortran'},
        2: {name: 'keyword.control.import.pragma.fortran'},
        3: {name: 'meta.toc-list.pragma-mark.fortran'}
      },
      match: '^\\s*(#\\s*(pragma\\s+mark)\\s+(.*))',
      name: 'meta.section'
    },
    'preprocessor-rule-disabled': {
      begin: '^\\s*(#(if)\\s+(0)\\b).*',
      captures: {
        1: {name: 'meta.preprocessor.fortran'},
        2: {name: 'keyword.control.import.if.fortran'},
        3: {name: 'constant.numeric.preprocessor.fortran'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b)',
          captures: {
            1: {name: 'meta.preprocessor.fortran'},
            2: {name: 'keyword.control.import.else.fortran'}
          },
          end: '(?=^\\s*#\\s*endif\\b.*$)',
          patterns: [{include: '$base'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*$)',
          name: 'comment.block.preprocessor.if-branch',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        }
      ]
    },
    'preprocessor-rule-enabled': {
      begin: '^\\s*(#(if)\\s+(0*1)\\b)',
      captures: {
        1: {name: 'meta.preprocessor.fortran'},
        2: {name: 'keyword.control.import.if.fortran'},
        3: {name: 'constant.numeric.preprocessor.fortran'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b).*',
          captures: {
            1: {name: 'meta.preprocessor.fortran'},
            2: {name: 'keyword.control.import.else.fortran'}
          },
          contentName: 'comment.block.preprocessor.else-branch',
          end: '(?=^\\s*#\\s*endif\\b.*$)',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*$)',
          patterns: [{include: '$base'}]
        }
      ]
    },
    'preprocessor-rule-other': {
      begin: '^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))',
      captures: {
        1: {name: 'meta.preprocessor.fortran'},
        2: {name: 'keyword.control.import.fortran'}
      },
      end: '^\\s*(#\\s*(endif)\\b).*$',
      patterns: [{include: '$base'}]
    }
  },
  scopeName: 'source.fortran'
}

export default grammar
