type Shift<T> = T extends [infer First, ...infer Rest] ? 
[...Rest] 
:
[]
