// type IsNever<T> = T extends never ? true : false

// never 是一个特殊的联合类型
// 联合类型作为泛型传入之后会分开计算和合并
// 但是泛型为never的时候,因为没有成员,所以不需要计算,直接返回never
// 所以这是上面这个写法为什么是不能通过cases


type IsNever<T> = [T] extends [never] ? true : false

// 转换成数组进行判断