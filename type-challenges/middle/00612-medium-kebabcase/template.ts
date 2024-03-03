// 自己的答案 
// 问题是卡在了不知道怎么判断是否是符号 
// 因为符号/表情大写没变
type KebabCase<S extends string, T extends string = ''> =
  S extends `${infer L}${infer R}` ?
  // 无法判断是否是标点符号
  // 参考了一个回答添加上的 如果小写和本身相等就false
  L extends Uppercase<L> ?
  L extends Lowercase<L> ?
  KebabCase<R, `${T}${L}`> : KebabCase<R, `${T}${T extends '' ? '' : '-'}${Lowercase<L>}`> : KebabCase<R, `${T}${L}`>
  : T
// 虽然嵌套了很多个三目 其实只要处理最后一个三目 其他之前可以理解为前置条件
// 当然可以自己写判断是否大写

// 大写一致并且小写不一致
// type IsUpperCase612<T extends string> = T extends Uppercase<T> ?
//   T extends Lowercase<T> ? false : true
//   :
//   false

// type KebabCase<S extends string, T extends string = ''> =
//   S extends `${infer L}${infer R}` ?
//   true extends IsUpperCase612<L> ?
//   KebabCase<R, `${T}${T extends '' ? '' : '-'}${Lowercase<L>}`> : KebabCase<R, `${T}${L}`>
//   : T

// 参考的回答里边有用到这个Uncapitalize类型 我没有拿进来
// 如果想了解 可以自己去研究Uncapitalize