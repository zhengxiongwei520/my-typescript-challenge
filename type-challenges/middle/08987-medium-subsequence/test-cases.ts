import type { Equal, Expect } from '@type-challenges/utils'

type SubsequenceText1 = Expand<Subsequence<[1, 2]>>
type SubsequenceText2 = Expand<Subsequence<[1]>>
type SubsequenceText3 = Expand<Subsequence<[1, 2, 3]>>

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3] >>,
]
      