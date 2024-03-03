type LengthOfString<S extends string, Counter extends string[] = []> = S extends `${infer L}${infer R}` ?
  LengthOfString<R, [L, ...Counter]>
  :
  Counter['length']