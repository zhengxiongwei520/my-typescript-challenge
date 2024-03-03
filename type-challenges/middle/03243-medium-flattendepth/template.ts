type FlattenOnce<T> = T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...First, ...FlattenDepth<Rest>] 
    : [First, ...FlattenDepth<Rest>]
  : []

type IsNoArray<T> = T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? false
    : IsNoArray<Rest>
  : true

type FlattenDepth<T, U extends number = 1> = U extends 0
  ? T
  : true extends IsNoArray<T>
    ? T
    : FlattenDepth<FlattenOnce<T>, MinusOne<U>>

