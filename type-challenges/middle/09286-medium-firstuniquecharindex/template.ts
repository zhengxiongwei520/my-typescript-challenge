// 这题我做的比较复杂
// 具体思路是循环每个字符，判断他的在字符串中的indexof和lastindexof是否相等，相等的话就找到了我们要的index，直接返回


// 所以前面写了StringIndexOf 和 StringLastIndexOf 
// StringLastIndexOf有不使用tuple的方法，但是略显复杂，我就用到了前面题目用到的思路
// 没有tuple的方法可以参考 https://juejin.cn/post/7061556434692997156#heading-24

// 写这么多类型也算是对之前所做的题目的一些巩固和利用

type Equal9286<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type GetTupleByLength<Length extends number, LengthArray extends unknown[] = []> =
LengthArray['length'] extends Length
? LengthArray
: GetTupleByLength<Length, [...LengthArray, unknown]> 

type IntAdd<N1 extends number, N2 extends number> = [...GetTupleByLength<N1>, ...GetTupleByLength<N2>]['length'] extends number
? [...GetTupleByLength<N1>, ...GetTupleByLength<N2>]['length']
: 0

type GetStringLength<T extends string, A extends any[] = []> =
T extends `${infer L}${infer R}`
? GetStringLength<R, [...A, unknown]>
: A['length'] 

type StringIndexOf<T extends string, U extends string> = 
T extends `${infer L}${U}${infer R}`
? GetStringLength<L>
: -1

type StringToTuple<S extends string, A extends any[] = []> = S extends `${infer L}${infer R}` ? StringToTuple<R, [...A, L]> : A

type TupleLastIndexOf<T extends any[], S> = T extends [...infer L, infer R]
? true extends Equal9286<R, S>
  ? L['length']
  : TupleLastIndexOf<L, S>
: -1

type StringLastIndexOf<T extends string, S extends string> = TupleLastIndexOf<StringToTuple<T>, S>

// type TextStringIndexOf = Expand<StringIndexOf<'abbbdbc', 'b'>>
// type TextStringLastIndexOf = Expand<StringLastIndexOf<'aabb', 'a'>>
// type TextGetTupleByLength = Expand<GetTupleByLength<2>>
// type TextGetStringLength = Expand<GetStringLength<''>>
// type TextNumberPlus = Expand<IntAdd<0, 2>>
// type Text11 = Expand<1 | -1>

type FirstUniqueCharIndex<OriginString extends string, S extends string = OriginString> = 
S extends `${infer L}${infer R}`
? StringIndexOf<OriginString, L> extends StringLastIndexOf<OriginString, L> 
  ? StringIndexOf<OriginString, L>
  : FirstUniqueCharIndex<OriginString, R>
: -1
