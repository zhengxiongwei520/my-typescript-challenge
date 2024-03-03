// 我的答案
type Equal18142<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type All<T extends any[], U, OriginalT extends any[] = T, ResultArray extends unknown[] = []> = 
T extends [infer L, ...infer R]
? true extends Equal18142<L, U>
  ? All<R, U, OriginalT, [...ResultArray, 1]>
  : false
: OriginalT['length'] extends ResultArray['length']
  ? true
  : false

