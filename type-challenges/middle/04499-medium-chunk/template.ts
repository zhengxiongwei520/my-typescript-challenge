type Chunk<T extends any[], N extends number = 1, C extends any[] = []> = 
  T extends [infer R, ...infer U]
    ? C['length'] extends N
      ? [C, ...Chunk<T, N>]
      : Chunk<U, N, [...C, R]>
    : C extends []
      ? C
      : [C]


      // 使用一个变量来记录当前 Chunk 的内容，当达到数量时就释放

      // C['length'] extends N 判断 C 的长度有没有达到要求的数量
      
      // 有的话那就把它放到数组里，继续递归后续内容，等待返回结果
      // 没有的话就继续往这个临时数组里添加新的元素，作为 C 的新值，继续递归