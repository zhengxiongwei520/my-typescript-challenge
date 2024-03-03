type Pop<T extends any[]> = T extends [...infer F, infer L]
  ?
  F
  :
  // never
  []

// 我一开始的答案是never 但是这样就是导致空数组的时候是never 所以应该改为[]