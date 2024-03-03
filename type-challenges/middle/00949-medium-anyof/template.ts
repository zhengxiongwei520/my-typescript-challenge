// 在判断哪种属性为false上面有问题
// 题目说的也不是特别清楚 应该是按照JS判断false的方式


// 倒数第二个不能通过的测试的原因是因为 {} 不能判断为 false

// 这个是错误的示范，T必须传的是类型，而在这里L是值
// type IsFalse<T> = T extends Falthy
//   ?
//   false
//   :
//   true

type Falthy = false | 0 | '' | [] | Record<string, never> | undefined | null

type AnyOf<T extends readonly any[]> = T extends [infer L, ...infer R] ?
  L extends Falthy ? AnyOf<R> : true
  :
  false


// 可以用 Record<stirng, never> 或者下边这个来表示空对象
// type AnyOfText = {
//   [x: string]: never;
// }