// 感觉没有做的必要
// 一个类型拿来做计算。。

// type Fibonacci<T extends number> = any

type Fibonacci<T extends number, N extends unknown[] = [1], Cur extends unknown[] = [1], Pre extends unknown[] = [1]> =
  N['length'] extends T
  ? Cur['length']
  : Fibonacci<T, [...N, 1], Pre, [...Pre, ...Cur]>