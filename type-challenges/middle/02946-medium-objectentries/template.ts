type Omit2946<T, U> = {
  [Key in keyof T as Key extends U ? never : Key]: T[Key]
}


// 新用法 对象类型可以取类型 所以将联合类型先存到对象中去
type ObjectEntries<T> = {
  // `T[Key] extends infer L | undefined ? L : T[Key]` 移除Partial的副作用
  [Key in keyof T]-?: [Key, T[Key] extends infer L | undefined ? L : T[Key]]
}[keyof T]