import type { Equal, Expect } from '@type-challenges/utils'

type IndexOfText1 = Expand<IndexOf<[1, 2, 3], 2>>
type IndexOfText2 = Expand<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>>
type IndexOfText3 = Expand<IndexOf<[0, 0, 0], 2>>
type IndexOfText4 = Expand<IndexOf<[string, 1, number, 'a'], number>>
type IndexOfText5 = Expand<IndexOf<[string, 1, number, 'a', any], any>>
type IndexOfText6 = Expand<IndexOf<[string, 'a'], 'a'>>
type IndexOfText7 = Expand<IndexOf<[any, 1], 1>>

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
  Expect<Equal<IndexOf<[string, 'a'], 'a'>, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>,
]
  