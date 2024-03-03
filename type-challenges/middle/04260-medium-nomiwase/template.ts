type StringToUnion4260<S extends string> = S extends `${infer L}${infer R}` ? L | StringToUnion4260<R> : never

type textA = StringToUnion4260<'AB'>
type textAA = Expand<textA>

type AllCombinations<S extends string, U extends string = StringToUnion4260<S>> =
  // [U] extends [never]
  // ? ''
  // : '' | { [P in U]: `${P}${StringToUnion4260<Exclude<U, P>>}` }[U]

[U] extends [never]
  ? ''
  : '' | { [P in U]: `${P}${AllCombinations<Exclude<U, P>, StringToUnion4260<Exclude<U, P>>>}` }[U]

  // P in U
  // [
  //   A: xx
  //   B: xx
  //   C: xx
  // ]