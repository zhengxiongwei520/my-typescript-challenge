type Chainable<X extends Object = {}> = {
  option<T extends string, K>(key: T extends X ? never : T, value: K)
    : Chainable<Omit<X, T> & { [k in T]: K }>
  get(): X
}



















// type Chainable<X extends Object = {}> = {
//   option<T extends string, K>(key: T extends keyof X ? never : T, value: K)
//     : Chainable<
//       Omit<X, T> &
//       { [k in T]: K }>
//   get(): X
// }