// T传入的是 typeof tuple
// typeof 操作符用来获取一个变量或对象的类型
// typeof操作符用于获取变量的类型，因此操作符后面接的始终是一个变量
// 如果获取的是对象，那么等于整个对象类型都拷贝过来
const p = {
  name: 'CJ',
  age: 18,
  address: {
    city: 'SH'
  }
};

type Person = typeof p;
// 相当于
// type Person = {
//   name: string;
//   age: number;
//   address: {
//     city: string;
//   };
// };

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type TutpleType = typeof tuple

// typeof获取变量的类型，所以传的是值，不是类型
// keyof获取类型的所有键，所以传的是类型，不是值


// keyof 操作符可以用于获取某种类型的所有键，其返回类型是联合类型
type TupleToObject<T extends readonly any[]> = {
  [Key in T[number]]: Key
}


// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// type TupleTestType = keyof tuple