// GreaterThan4471 A大于等于B为true

// Key 大于等于Start
// 并且小于END
type NeedFill<cur extends number, start extends number, end extends number> =
  true extends GreaterThan4471<cur, start>
  ? false extends GreaterThan4471<cur, end> ? true : cur
  : false

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
> = {
    [Key in keyof T]: true extends NeedFill<KeyToNUmber<Key>, Start, End> ? N : T[Key]
  }

// type test4484 = Expand<KeyToNUmber<'2000'>>
// type test44842 = Expand<KeyToNUmber<'12'>>

type KeyToNUmber<T extends any, A extends any[] = [], max extends number = 500> =
  T extends `${A['length']}`
  ? A['length']
  : max extends A['length'] 
    ? max 
    :  KeyToNUmber<T, [...A, 1]>
