
// type Length<T> = T extends { length: infer l } ? l : never

type Length<T extends { length: number }> = T['length']