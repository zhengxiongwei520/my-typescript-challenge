// 初步的版本
// Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>
// Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>
// Expect<Equal<IndexOf<[any, 1], 1>, 1>>
// 这三个会报错
// 1属于number所以第一个index是1，答案是2
// 还有一个any的问题，T出现any的时候index都为0



// 使用Euqal 这个是原生的euqal
type Equal5153<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type IndexOf<T, U, A extends any[] = []> = 
T extends [infer L, ...infer R extends any[]]
?  true extends Equal5153<L, U>
  ? A['length']
  : IndexOf<R, U, [...A, 1]>
: -1
 

type Test5153a = Expand<[any] extends 1 ? true : false>
type Test5153b = Expand<string extends any ? true : false>
type Test5153c = Expand<[1] extends [number] ? true : false>

// 没有equal的参考答案  不理解[any] extends A
// [any] extends A用来判断是否是any A为any为true
// 不太能理解 先放着吧~~
// type IndexOf<T extends any[], U, R extends any[] = []> =
//   T extends [infer A, ... infer B extends any[]]
//   ? A extends U
//     ? [any] extends A
//       ? IndexOf<B, U, R>
//       : IndexOf<B, U, [...R, A]>
//     : IndexOf<B, U, R>
//   : R['length'] extends 0 ? -1 : R['length']