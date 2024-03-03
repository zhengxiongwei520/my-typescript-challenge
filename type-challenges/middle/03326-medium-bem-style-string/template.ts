type Character1<T extends string[]> = [] extends T ? '' : `__${T[number]}`
type Character2<T extends string[]> = [] extends T ? '' : `--${T[number]}`

type Char1Text = Expand<Character1<['price1', 'price2']>>

type BEM<B extends string, E extends string[], M extends string[]> = `${B}${Character1<E>}${Character2<M>}`
