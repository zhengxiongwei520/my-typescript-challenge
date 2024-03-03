type Filter<T extends any[], P, ResultArray extends any[] = []> = 
T extends [infer L, ...infer R] 
? L extends P 
  ? Filter<R, P, [...ResultArray, L]>
  : Filter<R, P, ResultArray>
: ResultArray