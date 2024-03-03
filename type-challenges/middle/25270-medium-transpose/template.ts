type Transpose<M extends number[][], R = M['length'] extends 0 ? [] : M[0]> = {
  [Key1 in keyof R]: {
    [Key2 in keyof M]: Key1 extends keyof M[Key2] ? M[Key2][Key1] : never
  }
}
// 

// M[Key2][Key1] = [1, 2] or [3, 4]
// 
// [[L0, 
// ], []]



// type TextTest25270 = Expand<Test25270<[1, 2, 3], [4, 5, 6]>>

// 参考了一下别人的思路
// 太绕了。。





























// type Transpose<M extends number[][], R = M['length'] extends 0 ? [] : M[0]> = {
//   [X in keyof R]:{
//     [Y in keyof M]:X extends keyof M[Y] ? M[Y][X] : never
//   }
// }