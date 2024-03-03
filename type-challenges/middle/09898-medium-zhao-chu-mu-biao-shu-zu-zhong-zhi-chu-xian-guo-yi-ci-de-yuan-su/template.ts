type Equal9898<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type IndexOf9898<T extends any[], S extends any, A extends any[] = []> = 
T extends [infer L, ...infer R]
? true extends Equal9898<L, S>
  ? A['length']
  : IndexOf9898<R, S, [...A, unknown]>
: -1

// 对每个字符进行递归
// 先判断R(剩余字符)中能否找到L(首字符)
// 如果不能 还要是否在DeadArr中找到L 如果能找到不加入Result中，不能找到就加入Result中
// DeadArr是表示字符在R剩余字符中出现过 所以当然不能加入最终结果

type FindEles<T extends unknown[], Result extends unknown[] = [], DeadArr extends unknown[] = []> = 
T extends [infer L, ...infer R]
? IndexOf9898<R, L> extends -1 
  // 不在Result 但是要判断是否在DearArr里边
  ? IndexOf9898<DeadArr, L> extends -1 
    ? FindEles<R, [...Result, L], DeadArr>
    : FindEles<R, Result, DeadArr>
  : FindEles<R, Result, [...DeadArr, L]>
: Result
   