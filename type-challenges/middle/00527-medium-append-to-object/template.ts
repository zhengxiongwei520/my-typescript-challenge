type AppendToObject<T extends Object, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}

// ts自带的一个类型
// PropertyKey  = string | number | symbol

// type AppendToObject<T, U extends PropertyKey, V> = {
//   [P in keyof T | U]: P extends keyof T ? T[P] : V
// }

