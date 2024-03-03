import type { Equal, Expect } from '@type-challenges/utils'

type CaseTypeOne = 'cmd ctrl' | 'cmd opt' | 'cmd fn' | 'ctrl opt' | 'ctrl fn' | 'opt fn'

type TextCombs = Expand<Combs>

type cases = [
  Expect<Equal<Combs, CaseTypeOne>>,
]
