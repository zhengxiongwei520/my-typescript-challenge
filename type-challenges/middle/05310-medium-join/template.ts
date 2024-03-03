type Join<T extends string[], U extends string | number> = 
  T extends [infer L extends string, ...infer R extends string[]]
  ? R['length'] extends 0 
    ? `${L}${Join<R, U>}`  // `${L}` 可以这么缩写 因为到这里肯定是递归最后一层了
    : `${L}${U}${Join<R, U>}`
  : ''
