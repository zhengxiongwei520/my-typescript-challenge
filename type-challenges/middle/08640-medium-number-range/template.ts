type NumberRange<L, H> = any

// 没做

// type NumberRangeTuple<L extends number, H extends number , T extends any[] = [H]> = H extends L 
// ? [...T,H] 
// : NumberRangeTuple<L,MinusOne<H>,[...T,MinusOne<H>]>
// type NumberRange<L extends number, H extends number> = TupleToUnion<NumberRangeTuple<L,H>>