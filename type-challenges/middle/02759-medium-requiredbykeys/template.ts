type Merge2759<T> = {
  [Key in keyof T]: T[Key]
}

// 思路逻辑写法都没问题，只是不知道-? 

type RequiredByKeys<T extends object, K = {}> = Merge2759<{
  [Key in keyof T]?: T[Key]
} & {
    [Key in keyof T as Key extends K ? Key : never]-?: T[Key]
  }>

type text2759 = Expand<({ name?: string } & { name: string })>