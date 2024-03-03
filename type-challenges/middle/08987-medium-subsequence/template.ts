// 
type Test8987 = Expand<[] | ['1'] extends any[] ? true : false>
type Test8987A = Expand<TUOZHAN<[] | ['1'] | ['2']>>
type TUOZHAN<T> = T extends any[] ? [...T, [3]] : []
type Subsequence<T extends any[], A extends any[] = []> = 
T extends [infer L, ...infer R]
  ? Subsequence<R, A | [...A, L]>
  : A

  // [...A, L]这个大有玄机
  // 首先A extends any[]，但是这个A是any[]的联合类型 比如为 [1] | [2] 这样也符合any[]
  // 其次 由于A是数组的联合类型，所以A的每个类型都会跟L拼成新的数组
  // [...A, L]

  // L为1 R为2  A = [] | [1]
  // L为2 R为[] A = [] | [...([1] | []), [2]] -> 

// type Subsequence<
//   T extends any[],
//   Res extends any[] = []
//   > = T extends [infer F, ...infer R] ? Subsequence<R, Res | [...Res, F]> : Res