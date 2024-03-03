type MyAwaited1<T> = T extends Promise<infer R> ? MyAwaited1<R> : T

declare function PromiseAll<T extends any[]>(values: readonly [...T])
  :
  Promise<
    { [Key in keyof T]: MyAwaited1<T[Key]> }
  >
