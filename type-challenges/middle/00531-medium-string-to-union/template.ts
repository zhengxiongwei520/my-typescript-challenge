// 我的答案，先转成['a', 'b'] 在转成 'a' | 'b'
type StringToUnion<T extends string, P extends any[] = []> = T extends `${infer L}${infer R}` ?
  StringToUnion<R, [L, ...P]>
  :
  P extends (infer K)[] ? K : never


// 最精简答案
// type StringToUnion<T extends string> = T extends `${infer U}${infer Rest}` ? U | StringToUnion<Rest> : never
