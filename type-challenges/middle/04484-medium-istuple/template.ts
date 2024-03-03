type IsTuple<T> = [T] extends [never] // 去掉never
  ? false
  : T extends readonly [...unknown[]]
  ? any[] extends T
    ? false
    : true
  : false
  