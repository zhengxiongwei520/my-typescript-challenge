type z = `/^(\+|\-)?(\d*)?(\%)?$/`

type PercentageParser<T extends string, U = []> = T extends `${infer L}${infer R}` ?
  L extends '+' | '-'
  ? [L, ...(R extends `${infer X}%` ? [X, '%'] : [R, ''])]
  : ['', ...(T extends `${infer Y}%` ? [Y, '%'] : [T, ''])]
  : ['', '', '']