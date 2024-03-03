type Equal5317<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type LastIndexOf<T, U> = 
T extends [...infer L,infer R]
? true extends Equal5317<R, U>
  ? L['length']
  : LastIndexOf<L, U>
: -1