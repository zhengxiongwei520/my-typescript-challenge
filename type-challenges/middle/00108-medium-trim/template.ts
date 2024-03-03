type TrimIgnoreString = ' ' | '\n' | '\t'

// 最优雅的写法
// type Trim<S extends string> = S extends
//   `${TrimIgnoreString}${infer Rest}` | `${infer Rest}${TrimIgnoreString}`
//   ?
//   Trim<Rest>
//   :
//   S

type Trim<S extends string> = TrimRight108<TrimLeft108<S>>

type TrimLeft108<T extends string> = T extends
  `${infer L extends TrimIgnoreString}${infer R}`
  ?
  TrimLeft108<R>
  :
  T
type TrimRight108<T extends string> = T extends
  `${infer L}${TrimIgnoreString}`
  ?
  TrimRight108<L>
  :
  T

// 这个写法不行 
// 暂时只能总结为infer extends 不能放在末尾？
// type TrimRight108<T extends string> = T extends
// `${infer L}${infer R extends TrimIgnoreString}`
// ?
// TrimRight108<L>
// :
// T
