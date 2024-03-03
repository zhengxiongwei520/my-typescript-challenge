// type ReplaceKeys<U, T, Y> = T extends keyof U ?
//   {
//     [Key in keyof U]: Key extends T ?
//     Key extends keyof Y ? Y[Key] : never
//     : U[Key]
//   }

//   :
//   false



type ReplaceKeys<U, T, Y> = {
  [Key in keyof U]: Key extends T ?
  Key extends keyof Y ? Y[Key] : never  // 这里为什么是never？不应该是U[Key]吗
  :
  U[Key]
}

// ReplaceKeys<NodeA, T1, Y> | ReplaceKeys<NodeB, T1, Y> | ReplaceKeys<NodeC, T1, Y> |
// ReplaceKeys<NodeA, T2, Y> | ReplaceKeys<NodeB, T2, Y> | ReplaceKeys<NodeC, T2, Y> | 

