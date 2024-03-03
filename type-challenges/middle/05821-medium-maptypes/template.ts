// 原答案 R为联合类型的时候会有报红
// type MapTypes<T, R extends {
//   mapFrom: any
//   mapTo: any
// }> = {
//   [Key in keyof T]: T[Key] extends R['mapFrom'] ? R['mapTo'] : T[Key]
// }

// type Extract1 = Extract

// 想取某个联合类型，就把其他联合类型赋值为never类型

type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [K in keyof T]: T[K] extends R['mapFrom']
  ? R extends { mapFrom: T[K] }  // 
    ? R['mapTo']
    : never
  : T[K]
}


type Test5821<T> = T extends string ? never : T 
type Text5821 = Expand<Test5821<'123' | 123>>
type tese5821A = Expand<{a:string, b:number} extends {a:string} ? true : false>