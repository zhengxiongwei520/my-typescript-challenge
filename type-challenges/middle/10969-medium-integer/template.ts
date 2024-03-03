// 初版答案
// typeof x的case会报错 是因为 typeof y传的是number类型 不是具体数值 1 1.0这种
// type Integer<T extends string | number> = 
// `${T}` extends `${string}.${string}`
// ? never
// : T

// 优化
// type Integer<T extends string | number> = 
// T extends number ? never :
//   `${T}` extends `${string}.${string}`
//   ? never
//   : T

// 还有一种方法 妙用bigint 这个类型只能是整数
type Integer<T extends number> = `${T}` extends `${bigint}`
  ? T
  : never