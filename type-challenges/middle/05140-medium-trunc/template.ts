type Trunc<T extends number | string> = `${T}` extends `${infer L}.${infer R}`
? L extends '' 
  ? '0' 
  : L
: `${T}`
