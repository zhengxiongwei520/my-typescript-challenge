type Equal5360<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type Include<T, U> = T extends [infer L, ...infer R]
? true extends Equal5360<U, L>
  ? true
  : Include<R, U>
: false

type Unique<T, U extends any[] = []> = T extends [infer L, ...infer R]
? true extends Include<U, L>
  ? Unique<R, U>
  : [L, ...Unique<R, [...U, L]>]
: T