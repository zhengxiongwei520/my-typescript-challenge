// 只做到了这一步 =因为不知道怎么把类型的值变大写 
// 其实ts有自带的upppercase
// type MyCapitalize<S extends string> = S extends `${infer first}${infer Rest}` ?
//   `${first}${Rest}`
//   :
//   ''

type MyCapitalize<S extends string> = S extends `${infer first}${infer Rest}` ?
  `${Uppercase<first>}${Rest}`
  :
  ''