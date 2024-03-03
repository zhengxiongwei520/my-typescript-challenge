// 方法也属于object
type ToPrimitive<T> = T extends object 
? T extends (...args: unknown[]) => unknown
  ? Function  
  :{
    [K in keyof T]: ToPrimitive<T[K]>
  } 
: T extends { valueOf(): infer R } ? R : T


// (...args: unknown[]) => unknown 用来extends函数
// { valueOf(): infer R } 用来extends对象,在需要用到对象属性的类型时 不对 这个理解错了