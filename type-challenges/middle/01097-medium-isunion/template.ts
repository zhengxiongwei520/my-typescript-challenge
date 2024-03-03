type IsNever1097<T> = [T] extends [never] ? true : false

type IsUnion<T, U = T> = true extends IsNever1097<T>
  ? false
    : T extends U
    ? [U] extends [T]
      ? false
      : true
  : never

//
// T extends U 并且 [U] extends [T] 为true的时候表示不是联合类型