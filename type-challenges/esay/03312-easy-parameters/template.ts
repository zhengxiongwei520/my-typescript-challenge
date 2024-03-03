type MyParameters<T extends (...args: any[]) => any> = T extends
  (...params: infer P) => any
  ?
  P
  :
  undefined
 