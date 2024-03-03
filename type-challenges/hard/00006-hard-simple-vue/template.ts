declare function SimpleVue<
  D extends Record<string, unknown>,
  C extends Record<string, unknown>,
  M extends Record<string, unknown>
>(options: {
  data: (this: never) => D
  computed: { [K in keyof C]: (this: D, ...args: unknown[]) => C[K] }
  methods: {
    [K in keyof M]: (
      this: D & C & { [K in keyof M]: (...args: unknown[]) => M[K] }
    ) => M[K]
  }
}): any