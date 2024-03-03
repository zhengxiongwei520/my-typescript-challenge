type CheckRepeatedChars<T extends string, U extends any[] = []> =
T extends `${infer L}${infer R}`
? L extends U[number]
  ? true
  : CheckRepeatedChars<R, [...U, L]>
: false
