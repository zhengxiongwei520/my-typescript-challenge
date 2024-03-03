// type MyAwaited<T> = any

type MyAwaited<T> = T extends PromiseLike<infer R> ? MyAwaited<R> : T 

// type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
//   ? U extends PromiseLike<any>
//   ? MyAwaited<U>
//   : U
//   : never;

// type MyAwaited<T> = T extends PromiseLike<infer K>
//   ? K extends PromiseLike<any> ? MyAwaited<K> : K
//   : void

// await return type await
// promise只能通过await then来获取返回值