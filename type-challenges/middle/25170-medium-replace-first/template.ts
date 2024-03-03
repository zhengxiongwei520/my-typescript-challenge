// type Equal25170<X, Y> =
//   (<T>() => T extends X ? 1 : 2) extends
//   (<T>() => T extends Y ? 1 : 2) ? true : false

// 一开始用的equal来做判断是否相等，发现[1, 'two', 3]这个case不通过
// 就改成了extends

type ReplaceFirst<T extends readonly unknown[], S, R, ResultArray extends any[] = [], Flag extends boolean = false> = 
T extends [infer L, ...infer Rest]
? true extends Flag
  ? [...ResultArray, L, ...Rest]
  // : true extends Equal25170<L, S>
  : L extends S
    ? ReplaceFirst<Rest, S, R, [...ResultArray, R], true>
    : ReplaceFirst<Rest, S, R, [...ResultArray, L]>
: ResultArray

// 自己写的还是复杂了 参考答案在下边

// type ReplaceFirst<T extends readonly unknown[], S, R> = 
// T extends readonly [infer F, ...infer Rest] 
// ? F extends S 
//   ? [R, ...Rest] 
//   : [F, ...ReplaceFirst<Rest, S, R>] 
// : [];
