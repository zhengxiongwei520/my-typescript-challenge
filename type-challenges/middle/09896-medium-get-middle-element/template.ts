type GetMiddleElement<T> =
  T extends [infer L, ...infer M, infer R]
  ? M extends []
  ? [L, R]
  : GetMiddleElement<M>
  : T
