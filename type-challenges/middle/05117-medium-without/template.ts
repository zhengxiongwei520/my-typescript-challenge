type Test5117 = Expand<[1, 2] extends [1, 2, 3] ? true : keyof [1, 2]>

type ToUnion5117<T> = T extends any[] ? T[number] : T

type Without<T extends any[], U> = T extends [infer L, ...infer R]
? L extends ToUnion5117<U>
  ? [...Without<R, U>]
  : [L, ...Without<R, U>]
: T