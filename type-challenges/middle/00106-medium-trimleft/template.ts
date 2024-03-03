type IgnoreString = ' ' | '\n' | '\t'
// 可以在infer使用extend type来确定他要锁定的范围
// 但是什么时候进TrimLeft 什么时候 S？
// 前缀有空格或者n t的时候就进入 不然就是进false
// type TrimLeft<S extends string> = S extends `${infer L extends IgnoreString}${infer R}` ?
//   TrimLeft<R>
//   :
//   S
type TrimLeft<S extends string> = S extends `${IgnoreString}${infer R}` ?
  TrimLeft<R>
  :
  S
