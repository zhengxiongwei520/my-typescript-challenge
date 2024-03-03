type Flatten<T extends any[]> = T extends [infer L, ...infer R]
  ?
  L extends [...infer P] ? [...Flatten<L>, ...Flatten<R>] : [L, ...Flatten<R>]
  :
  []
  // 如果T不是数组
  // [...T]


  // {
    // [Key in keyof T]: T[Key] extends [...infer P] ? Flatten<P> : T[Key]
  // }

// T[Key] 等于 [2]    [2] extends any[] ?
// [, ...Flatten<>]

// 我们最终是要获