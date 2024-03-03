// type TupleToNestedObject<T, U> = T extends [infer First, ...infer Rest]
//   ? {
//     [K in First&string]: TupleToNestedObject<Rest, U>
//   }
//   : U



type TupleToNestedObject<T, U> = T extends [infer First, ...infer Rest]
  ? First extends string
  ? Record<First, TupleToNestedObject<Rest, U>>
  : never
  : U


interface MyFace {
  name: string
  title: string
  age: number
}

type PickInterfaceType<T, U> = {
  [Key in keyof T as T[Key] extends U ? Key : never]: T[Key]
}




type Text2323 = Expand<PickInterfaceType<MyFace, string>>