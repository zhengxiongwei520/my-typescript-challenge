type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn']

// 适用于本题的filter 只会过滤第一个符合条件的
type FilterModifierKeys<T extends any[], U, Result extends any[] = []> = 
T extends [infer L, ...infer R]
? L extends U 
  ? [...Result, ...R][number]
  : FilterModifierKeys<R, U, [...Result, L]>
: Result[number]

type TextFilterModifierKeys = Expand<FilterModifierKeys<ModifierKeys, 'cmd'>>

// 实现 Combs
type Combs<T extends any[] = ModifierKeys, Result extends string = never> = 
T extends [infer L extends string, ...infer R]
? Combs<R, Result | `${L} ${FilterModifierKeys<T, L> extends string ? FilterModifierKeys<T, L> : never}`>
: Result
 