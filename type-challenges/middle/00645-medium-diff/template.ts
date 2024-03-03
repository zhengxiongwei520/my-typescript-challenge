// extends O 但是不 extends O1

// 摘走T中有U的属性
// as的是Key
type MyPick645<T extends any, U extends any> = {
  [Key in keyof T as (Key extends keyof U ? never : Key)]: Key extends keyof T ? T[Key] : Key extends keyof U ? U[Key] : never
}
type MyPick645Text = Expand<MyPick645<{ a: 1, b: 2 }, { a: 2, c: 3 }>>


// T extends keyof O ? 
type Diff<O, O1 extends Object> = {
  [Key in (keyof MyPick645<O, O1> | keyof MyPick645<O1, O>)]: (MyPick645<O, O1> & MyPick645<O1, O>)[Key]
}
// 以上是自己写出来的




// type Exclude<T, U> = T extends U ? never : T
// git上的回答
// type Diff<O, O1> = {
//   [Key in Exclude<keyof O1, keyof O> | Exclude<keyof O, keyof O1>]: (O & O1)[Key];
// }