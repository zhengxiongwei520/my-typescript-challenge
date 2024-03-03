
// 我的答案 test是通过的 但是F[K]会有报错？
// 参考别人的回答之后发现，F上有可能不存在K类型，所以要先判断
type Merge<F, S> = {
  [K in keyof (F & S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
}

// &是让类型更严格，类型收缩
// 比如 泛型F是{a: string} S泛型是{b: number}
// F & S就是{a:string, b:number}
// F | S就是{a:string} | {b:number} 你可以选择任一联合类型

// git上的回答
// type Merge<F, S> = {
//   [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
// }