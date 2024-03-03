// 自己只做到了这一步，对于T[Key]的限制不知道怎么处理，所以后边的是参考网上的答案了
// type Flip<T> = {
//   [Key in keyof T as `${T[Key]}`]: Key
// }



type Flip<T extends Record<PropertyKey, string | number | bigint | boolean | null | undefined>> = {
  [Key in keyof T as `${T[Key]}`]: Key
}
