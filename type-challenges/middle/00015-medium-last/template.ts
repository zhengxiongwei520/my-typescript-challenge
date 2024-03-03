type Last<T extends any[]> = T extends [...infer F, infer last] ? last : never

