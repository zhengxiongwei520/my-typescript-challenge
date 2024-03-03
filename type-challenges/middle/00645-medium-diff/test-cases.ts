import type { Equal, Expect } from '@type-challenges/utils'

type DiffText1 = Expand<Diff<Foo, Bar>>
type DiffText2 = Expand<Diff<Bar, Foo>>
type DiffText3 = Expand<Diff<Foo, Coo>>
type DiffText4 = Expand<Diff<Coo, Foo>>

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]
 