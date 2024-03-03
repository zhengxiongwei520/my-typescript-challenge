type AppendArgument<Fn extends (...arg: any[]) => any, A> = Fn extends
  (...params: infer P) => infer M
  ?
  // 我的回答卡在了这一步!!!
  // (x: A, ...P) => M

  // 入参的params的P代表的是类型参数的类型集合,可以用拓展符展开类型
  // ...args是ts自带的可以获取入参的key集合
  (...args: [...P, A]) => M
  :
  Fn 