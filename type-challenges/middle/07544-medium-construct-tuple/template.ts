type ConstructTuple<L extends number, A extends any[] = []> = 
A['length'] extends L
? A
: ConstructTuple<L, [...A, unknown]>
