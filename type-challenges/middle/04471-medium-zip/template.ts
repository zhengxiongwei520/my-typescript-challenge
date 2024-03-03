
type GreaterThan4471<T extends number, U extends number, A extends any[] = []> =
  U extends A['length']
  ? true
  : T extends A['length']
    ? false
    : GreaterThan4471<T, U, [...A, 1]>

type GreaterThanText1 = GreaterThan4471<4, 3>
type GreaterThanText2 = GreaterThan4471<3, 3>
type GreaterThanText3 = GreaterThan4471<2, 3>

// 需要重写GreaterThan T大于等于U的时候的时候T[Key]要放在前面
type Zip<T extends any[], U extends any[]> =
  true extends GreaterThan4471<T['length'], U['length']>
  // 只有T数量大于U
  ? { [Key in keyof U]: [Key extends keyof T ? T[Key] : never, U[Key]] }
  : { [Key in keyof T]: [Key extends keyof U ? U[Key] : never, T[Key]] }
