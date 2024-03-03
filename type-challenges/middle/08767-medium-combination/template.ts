// 答案
type Combination<T extends any[], U extends string = ''> =
T extends [infer L, ...infer R]
  ? Combination<R, U | Combination<R, U>>
  : U


  


// 答案
// type Combination<T extends string[], A = T[number], U = A> =
//   U extends string
//   ? U | `${U} ${Combination<[], Exclude<A, U>>}`
//   : never 