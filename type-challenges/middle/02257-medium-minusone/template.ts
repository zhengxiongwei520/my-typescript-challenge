
// type MinusOne<T extends number, arr extends any[] = []> = [
//   ...arr,
//   ''
// ]['length'] extends T
//   ? arr['length']
//   : MinusOne<T, [...arr, '']>


// 直接抄的答案，我觉得这题没啥做的意义
  // I think about this type will been used in other question , you can import it 
type reverseNumber<T extends string> = `${T}` extends `${infer L }${infer R }` ? `${reverseNumber<R>}${L}` : ''

type numberLess = [9,0,1,2,3,4,5,6,7,8]

type handleString<T extends string> = 
T extends `${infer First extends number}${infer rest}`  // rest cannot extends number becouse when rest was '011' , be 11, zero was lost
// handle zero 
  ? numberLess[First] extends 9 ? `${numberLess[First]}${(handleString<`${rest}`> extends '0' ? '' : handleString<`${rest}`>)}` : `${numberLess[First]}${rest}`
  : ''

// (reverse twice and take out the results)    传入数字 反转一次 传出字符 反转一次 最后取出结果
type MinusOne<T extends number> = reverseNumber<handleString<reverseNumber<`${T}`>>> extends `${infer All extends number}` ? All : never 