type IgnoreString4803 = ' ' | '\n' | '\t'

type TrimRight<S extends string> = S extends `${infer L}${IgnoreString4803}`
? TrimRight<L>
: S
