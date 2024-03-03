type CurryingFn<F extends Function> = 
F extends (first: infer First, ...Rest: infer Rest) => infer Ret
? [] extends Rest
  ? F
  : (first: First) => CurryingFn<(...args: Rest) => Ret>
: never

declare function Currying<F extends Function>(fn: F): CurryingFn<F>
  