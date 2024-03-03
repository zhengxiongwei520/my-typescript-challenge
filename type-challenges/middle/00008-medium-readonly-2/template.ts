type MyOmit8<T, K> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key]
}

type MyReadonly2<T, K extends keyof T = keyof T> = MyOmit8<T, K> & {
  readonly [Key in keyof T]: T[Key]
}