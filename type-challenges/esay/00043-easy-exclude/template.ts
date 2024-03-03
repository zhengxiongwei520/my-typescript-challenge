// 如果T是一个联合类型，那就将T每个类型都做extends判断

type MyExclude<T, U> = T extends U ? never : T
