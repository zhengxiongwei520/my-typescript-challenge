// type First<T extends any[]> = T extends [] ? never : T[0]

// extends三种用法

// 1.class中extends的继承
// 2.泛型中的约束，比如这题的T extends any[]，就是表示泛型必须是any[]的类型
// 这个可以理解为T继承了any[]的约束
// 3.条件类型：
// 当extends左边的类型可分配给右边的类型时

// infer 最早出现在此 PR 中，表示在 extends 条件语句中待推断的类型变量。
type First<T extends any[]> = T extends [infer FirstKey, ...any] ? FirstKey : never


