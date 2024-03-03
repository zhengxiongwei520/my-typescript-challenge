type FlipArguments<T> = T extends (...params: infer P) => infer CB
  ? ((...args: Rever3196<P>) => CB)
  : never


type Rever3196<T> = T extends [infer First, ...infer Rest]
  ? [...Rever3196<Rest>, First]
  : [] 