// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `bsd-2-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.factor'],
  names: ['factor'],
  patterns: [
    {
      captures: {
        2: {name: 'keyword.colon.factor'},
        3: {name: 'entity.name.function.factor'},
        4: {name: 'comment.stack-effect.factor'}
      },
      match: '(^|(?<=\\s))(::?)\\s+([^\\s]+)\\s',
      name: 'definition.word.factor'
    },
    {
      captures: {
        2: {name: 'keyword.colon.factor'},
        3: {name: 'entity.name.method.factor'},
        4: {name: 'comment.stack-effect.factor'}
      },
      match: '(^|(?<=\\s))(C:)\\s+([^\\s]+)\\s',
      name: 'definition.word.class.factor'
    },
    {
      captures: {
        2: {name: 'keyword.colon.factor'},
        3: {name: 'entity.name.class.factor'},
        4: {name: 'entity.name.method.factor'},
        5: {name: 'comment.stack-effect.factor'}
      },
      match: '(^|(?<=\\s))(M:)\\s+([^\\s]+)\\s+([^\\s]+)\\s',
      name: 'definition.word.method.factor'
    },
    {
      captures: {
        2: {name: 'keyword.colon.factor'},
        3: {name: 'entity.name.generic.factor'},
        5: {name: 'comment.stack-effect.factor'}
      },
      match: '(^|(?<=\\s))(GENERIC:)\\s+([^\\s]+)\\s',
      name: 'definition.word.generic.factor'
    },
    {
      captures: {
        2: {name: 'keyword.colon.factor'},
        3: {name: 'entity.name.generic.factor'},
        5: {name: 'comment.stack-effect.factor'}
      },
      match: '(^|(?<=\\s))(GENERIC#)\\s+([^\\s]+)\\s(\\d+)\\s',
      name: 'definition.word.generic.factor'
    },
    {
      captures: {
        2: {name: 'storage.type.factor'},
        3: {name: 'entity.name.class.factor'}
      },
      match: '(^|(?<=\\s))(TUPLE:|BUILTIN:)\\s+([^\\s]+)\\s+(([^\\s]+)+)',
      name: 'meta.class.factor'
    },
    {
      match:
        '(^|(?<=\\s))(>boolean|<wrapper>|\\(clone\\)|-rot|2bi|2bi@|2bi\\*|2curry|2dip|2drop|2dup|2keep|2nip|2over|2tri|2tri@|2tri\\*|2with|3bi|3curry|3dip|3drop|3dup|3keep|3tri|4dip|4drop|4dup|4keep|=|\\?|\\?if|and|assert|assert=|assert\\?|bi|bi-curry|bi-curry@|bi-curry\\*|bi@|bi\\*|boa|boolean|boolean\\?|both\\?|build|call|callstack|callstack>array|callstack\\?|clear|clone|compose|compose\\?|curry|curry\\?|datastack|die|dip|do|drop|dup|dupd|either\\?|eq\\?|equal\\?|execute|hashcode|hashcode\\*|identity-hashcode|identity-tuple|identity-tuple\\?|if|if\\*|keep|loop|most|new|nip|not|null|object|or|over|pick|prepose|retainstack|rot|same\\?|swap|swapd|throw|tri|tri-curry|tri-curry@|tri-curry\\*|tri@|tri\\*|tuple|tuple\\?|unless|unless\\*|until|when|when\\*|while|with|wrapper|wrapper\\?|xor)(\\s|$)',
      name: 'keyword.control.kernel.factor'
    },
    {
      match:
        '(^|(?<=\\s))(\\+@|change|change-global|counter|dec|get|get-global|global|inc|init-namespaces|initialize|is-global|namespace|namestack|off|on|set|set-global|set-namestack|toggle|with-global|with-scope|with-variable|with-variables)(\\s|$)',
      name: 'keyword.control.namespaces.factor'
    },
    {
      match:
        '(^|(?<=\\s))(>alist|<enum>|2cache|\\?at|\\?of|assoc|assoc>map|assoc-all\\?|assoc-any\\?|assoc-clone-like|assoc-combine|assoc-diff|assoc-diff!|assoc-differ|assoc-each|assoc-empty\\?|assoc-filter|assoc-filter!|assoc-filter-as|assoc-find|assoc-hashcode|assoc-intersect|assoc-like|assoc-map|assoc-map-as|assoc-partition|assoc-refine|assoc-size|assoc-stack|assoc-subset\\?|assoc-union|assoc-union!|assoc=|assoc\\?|at|at\\*|at\\+|cache|change-at|clear-assoc|delete-at|delete-at\\*|enum|enum\\?|extract-keys|inc-at|key\\?|keys|map>assoc|maybe-set-at|new-assoc|of|push-at|rename-at|set-at|sift-keys|sift-values|substitute|unzip|value-at|value-at\\*|value\\?|values|zip|zip-as|zip-index|zip-index-as)(\\s|$)',
      name: 'keyword.control.assocs.factor'
    },
    {
      match:
        '(^|(?<=\\s))(2cleave|2cleave>quot|3cleave|3cleave>quot|4cleave|4cleave>quot|alist>quot|call-effect|case|case>quot|case-find|cleave|cleave>quot|cond|cond>quot|deep-spread>quot|execute-effect|linear-case-quot|no-case|no-case\\?|no-cond|no-cond\\?|recursive-hashcode|shallow-spread>quot|spread|to-fixed-point|wrong-values|wrong-values\\?)(\\s|$)',
      name: 'keyword.control.combinators.factor'
    },
    {
      match:
        '(^|(?<=\\s))(>|>=|>bignum|>fixnum|>float|>integer|<|<=|<fp-nan>|\\(all-integers\\?\\)|\\(each-integer\\)|\\(find-integer\\)|-|/|/f|/i|/mod|2/|2^|\\*|\\+|\\?1\\+|abs|align|all-integers\\?|bignum|bignum\\?|bit\\?|bitand|bitnot|bitor|bits>double|bits>float|bitxor|complex|complex\\?|denominator|double>bits|each-integer|even\\?|find-integer|find-last-integer|fixnum|fixnum\\?|float|float>bits|float\\?|fp-bitwise=|fp-infinity\\?|fp-nan-payload|fp-nan\\?|fp-qnan\\?|fp-sign|fp-snan\\?|fp-special\\?|if-zero|imaginary-part|integer|integer>fixnum|integer>fixnum-strict|integer\\?|log2|log2-expects-positive|log2-expects-positive\\?|mod|neg|neg\\?|next-float|next-power-of-2|number|number=|number\\?|numerator|odd\\?|power-of-2\\?|prev-float|ratio|ratio\\?|rational|rational\\?|real|real-part|real\\?|recip|rem|sgn|shift|sq|times|u>|u>=|u<|u<=|unless-zero|unordered\\?|when-zero|zero\\?)(\\s|$)',
      name: 'keyword.control.math.factor'
    },
    {
      match:
        '(^|(?<=\\s))(<repetition>|<reversed>|<slice>|1sequence|2all\\?|2each|2map|2map-as|2map-reduce|2reduce|2selector|2sequence|3append|3append-as|3each|3map|3map-as|3sequence|4sequence|\\?first|\\?last|\\?nth|\\?second|\\?set-nth|accumulate|accumulate!|accumulate-as|all\\?|any\\?|append|append!|append-as|assert-sequence|assert-sequence=|assert-sequence\\?|binary-reduce|bounds-check|bounds-check\\?|bounds-error|bounds-error\\?|but-last|but-last-slice|cartesian-each|cartesian-map|cartesian-product|change-nth|check-slice|check-slice-error|clone-like|collapse-slice|collector|collector-for|concat|concat-as|copy|count|cut|cut-slice|cut\\*|delete-all|delete-slice|drop-prefix|each|each-from|each-index|empty\\?|exchange|filter|filter!|filter-as|find|find-from|find-index|find-index-from|find-last|find-last-from|first|first2|first3|first4|flip|follow|fourth|glue|halves|harvest|head|head-slice|head-slice\\*|head\\*|head\\?|if-empty|immutable|immutable-sequence|immutable-sequence\\?|immutable\\?|index|index-from|indices|infimum|infimum-by|insert-nth|interleave|iota|iota-tuple|iota-tuple\\?|join|join-as|last|last-index|last-index-from|length|lengthen|like|longer|longer\\?|longest|map|map!|map-as|map-find|map-find-last|map-index|map-index-as|map-integers|map-reduce|map-sum|max-length|member-eq\\?|member\\?|midpoint@|min-length|mismatch|move|new-like|new-resizable|new-sequence|non-negative-integer-expected|non-negative-integer-expected\\?|nth|nths|pad-head|pad-tail|padding|partition|pop|pop\\*|prefix|prepend|prepend-as|produce|produce-as|product|push|push-all|push-either|push-if|reduce|reduce-index|remove|remove!|remove-eq|remove-eq!|remove-nth|remove-nth!|repetition|repetition\\?|replace-slice|replicate|replicate-as|rest|rest-slice|reverse|reverse!|reversed|reversed\\?|second|selector|selector-for|sequence|sequence-hashcode|sequence=|sequence\\?|set-first|set-fourth|set-last|set-length|set-nth|set-second|set-third|short|shorten|shorter|shorter\\?|shortest|sift|slice|slice-error|slice-error\\?|slice\\?|snip|snip-slice|start|start\\*|subseq|subseq\\?|suffix|suffix!|sum|sum-lengths|supremum|supremum-by|surround|tail|tail-slice|tail-slice\\*|tail\\*|tail\\?|third|trim|trim-head|trim-head-slice|trim-slice|trim-tail|trim-tail-slice|unclip|unclip-last|unclip-last-slice|unclip-slice|unless-empty|virtual-exemplar|virtual-sequence|virtual-sequence\\?|virtual@|when-empty)(\\s|$)',
      name: 'keyword.control.sequences.factor'
    },
    {
      match:
        '(^|(?<=\\s))(>array|<array>|1array|2array|3array|4array|array|array\\?|pair|pair\\?|resize-array)(\\s|$)',
      name: 'keyword.control.arrays.factor'
    },
    {
      match:
        '(^|(?<=\\s))(\\(each-stream-block-slice\\)|\\(each-stream-block\\)|\\(stream-contents-by-block\\)|\\(stream-contents-by-element\\)|\\(stream-contents-by-length-or-block\\)|\\(stream-contents-by-length\\)|\\+byte\\+|\\+character\\+|bad-seek-type|bad-seek-type\\?|bl|contents|each-block|each-block-size|each-block-slice|each-line|each-morsel|each-stream-block|each-stream-block-slice|each-stream-line|error-stream|flush|input-stream|input-stream\\?|invalid-read-buffer|invalid-read-buffer\\?|lines|nl|output-stream|output-stream\\?|print|read|read-into|read-partial|read-partial-into|read-until|read1|readln|seek-absolute|seek-absolute\\?|seek-end|seek-end\\?|seek-input|seek-output|seek-relative|seek-relative\\?|stream-bl|stream-contents|stream-contents\\*|stream-copy|stream-copy\\*|stream-element-type|stream-flush|stream-length|stream-lines|stream-nl|stream-print|stream-read|stream-read-into|stream-read-partial|stream-read-partial-into|stream-read-partial-unsafe|stream-read-unsafe|stream-read-until|stream-read1|stream-readln|stream-seek|stream-seekable\\?|stream-tell|stream-write|stream-write1|tell-input|tell-output|with-error>output|with-error-stream|with-error-stream\\*|with-input-output\\+error-streams|with-input-output\\+error-streams\\*|with-input-stream|with-input-stream\\*|with-output>error|with-output-stream|with-output-stream\\*|with-output\\+error-stream|with-output\\+error-stream\\*|with-streams|with-streams\\*|write|write1)(\\s|$)',
      name: 'keyword.control.io.factor'
    },
    {
      match:
        '(^|(?<=\\s))(>string|<string>|1string|resize-string|string|string\\?)(\\s|$)',
      name: 'keyword.control.strings.factor'
    },
    {
      match:
        '(^|(?<=\\s))(>vector|<vector>|1vector|\\?push|vector|vector\\?)(\\s|$)',
      name: 'keyword.control.vectors.factor'
    },
    {
      match:
        '(^|(?<=\\s))(<condition>|<continuation>|<restart>|attempt-all|attempt-all-error|attempt-all-error\\?|callback-error-hook|callcc0|callcc1|cleanup|compute-restarts|condition|condition\\?|continuation|continuation\\?|continue|continue-restart|continue-with|current-continuation|error|error-continuation|error-in-thread|error-thread|ifcc|ignore-errors|in-callback\\?|original-error|recover|restart|restart\\?|restarts|rethrow|rethrow-restarts|return|return-continuation|thread-error-hook|throw-continue|throw-restarts|with-datastack|with-return)(\\s|$)',
      name: 'keyword.control.continuations.factor'
    },
    {
      begin: '(^|(?<=\\s))(USING:)',
      end: '(?<=\\s);(\\s|$)',
      name: 'keyword.control.using.factor',
      patterns: [
        {match: '(^|(?<=\\s))[^\\s]+(\\s|$)', name: 'constant.namespace.factor'}
      ]
    },
    {match: '(^|(?<=\\s))(f|t)(\\s|$)', name: 'constant.language.factor'},
    {
      match: '(^|(?<=\\s))CHAR:\\s+[^\\s]+(\\s|$)',
      name: 'constant.character.factor'
    },
    {
      match: '(^|(?<=\\s))[+-]?\\d([\\d,]*\\d)?(\\s|$)',
      name: 'constant.numeric.integer.factor'
    },
    {
      match:
        '(^|(?<=\\s))[+-]?(\\d([\\d,]*\\d)?)?\\.\\d([\\d,]*\\d)?([Ee][+-]?\\d([\\d,]*\\d)?)?(\\s|$)',
      name: 'constant.numeric.float.factor'
    },
    {
      match:
        '(^|(?<=\\s))(-\\d([\\d,]*\\d)?)?-?\\d([\\d,]*\\d)?/\\d([\\d,]*\\d)?(\\s|$)',
      name: 'constant.numeric.neg-ratio.factor'
    },
    {
      match:
        '(^|(?<=\\s))\\+?(\\d([\\d,]*\\d)?\\+?)?\\d([\\d,]*\\d)?/\\d([\\d,]*\\d)?(\\s|$)',
      name: 'constant.numeric.pos-ratio.factor'
    },
    {
      match: '(^|(?<=\\s))[+-]?0b[01]([01,]*[01])?(\\s|$)',
      name: 'constant.numeric.binary.factor'
    },
    {
      match: '(^|(?<=\\s))[+-]?0o[0-7]([0-7,]*[0-7])?(\\s|$)',
      name: 'constant.numeric.octal.factor'
    },
    {
      match:
        '(^|(?<=\\s))[+-]?0x[0-9a-fA-Fp]([0-9a-fA-F,]*[0-9a-fA-F])?(p[0-9a-fA-Fp]([0-9a-fA-F,]*[0-9a-fA-F])?)?(\\s|$)',
      name: 'constant.numeric.hex.factor'
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.factor',
      patterns: [{include: '#escaped_characters'}]
    },
    {
      begin: '<"',
      end: '">',
      name: 'string.quoted.double.multiline.factor',
      patterns: [{include: '#escaped_characters'}]
    },
    {
      begin: '(^|(?<=\\s))(STRING:)\\s+(\\S+)',
      captures: {
        2: {name: 'keyword.colon.factor'},
        3: {name: 'entity.name.heredoc.factor'}
      },
      contentName: 'string.unquoted.heredoc.factor',
      end: '^;$',
      name: 'definition.word.heredoc.factor'
    },
    {match: 'inline|foldable', name: 'storage.modifier.factor'},
    {match: '(^|(?<=\\s))#?!(\\s.*)?$', name: 'comment.line.factor'},
    {
      begin: '\\((?=\\s)',
      end: '(^|(?<=\\s))\\)',
      name: 'comment.parens.factor'
    },
    {
      match: '\\b[^\\s]+:\\s+[^\\s]+(\\s|$)',
      name: 'keyword.control.postpone.factor'
    }
  ],
  repository: {
    escaped_characters: {
      patterns: [
        {
          match: '\\\\(\\\\|[abefnrtsv0"]|x[a-fA-F0-9]{2}|u[a-fA-F0-9]{6})',
          name: 'constant.character.escape.factor'
        },
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.factor'}
      ]
    }
  },
  scopeName: 'source.factor'
}

export default grammar
