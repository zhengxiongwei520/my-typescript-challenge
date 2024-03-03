type LookUp<U, T> = U extends { type: T } ? U : never

// 联合类型的话 会对齐进行循环 对每个类型进行type校验
// 你怎么能忘了呢?

// 答案
// type LookUp<U, T> = U extends { type: T } ? U : never


