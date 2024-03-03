type Reverse<T> = T extends [infer L, ...infer R] 
? [...Reverse<R>, L]
: []
