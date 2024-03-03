// 垃圾题


type FilterSignature<K> = string extends K
    ? never 
    : number extends K
      ? never
      : symbol extends K 
        ? never
        : K

type RemoveIndexSignature<T> = {
  [K in keyof T as FilterSignature<K>]: T[K]
}

// type Filter1367 = number | never

// type FilterSignature<T> = T extends Filter1367 ? never : T


// type Test1367<T> = T extends (string | number) ? true : false

// type TestText1367 = Expand<never & string>





// 0 extends
