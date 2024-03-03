type AbsoluteStringIgnore = ''
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? `${R}` : `${T}`


// 死脑筋，就想着怎么将T分成3种情况来处理，其实只要`${T}`就将所有的泛型T都变成了字符串来进行处理
// 我的答案
// type Absolute<T extends number | string | bigint> = T extends infer R ?
// R
// :
// // 再做判断数字和bigint的情况
// T