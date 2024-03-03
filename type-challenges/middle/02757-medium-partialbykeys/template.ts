// 有些细节不能理解的。。

type Merge2757<T> = {
  [Key in keyof T]: T[Key]
}

// 原本我的答案是这样的，但是不通过K为联合类型的例子
// 显示的会是2个对象类型的联合类型
// 但是去掉前边的extends就可以正常通过例子，这是为啥？
// K的默认值也改为{}

// type PartialByKeysText = {
//   name?: string | undefined;
//   age: number;
//   address: string;
// } | {
//   age?: number | undefined;
//   name: string;
//   address: string;
// }

type PartialByKeys<T, K = {}> =
  Merge2757<
    {
      [Key in keyof T as Key extends K ? Key : never]?: T[Key]
    }
    &
    {
      [Key in keyof T as Key extends K ? never : Key]: T[Key]
    }
  >






type Text2757 = Expand<Merge2757<{
  name: string
  age?: number
  address: string
} | {
  name?: string
  age: number
  address: string
}>>