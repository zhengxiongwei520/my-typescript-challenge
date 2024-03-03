type MyExclude1<T, U> = T extends U ? never : T

// // 参考答案 但是我不理解
// type Permutation<T, C = T> = [T] extends [never]
//   ?
//   []
//   :
//   C extends infer U ? [U, ...Permutation<MyExclude1<T, U>>] : never


// 然后通过递归和之前学习过的 Exclude 工具方法，我们就能够拿到每一项的不同值，并且将剩下的值丢入递归，
// 再次进行分布式联合，就可以再次拿到每一项，这样子就能够实现题目的要求了。

// 但是做起来的时候就会发现，上面的 T 在条件里面已经因为分布式联合变成了联合类型中固定的某一项，
// 而不是整体，那怎么办呢，这里就可以在定义一个新的泛型参数，用于在一开始的时候复制一份 T 以便于方便我们后面在排除掉当前项的时候可以用到。

// 总结:递归的使用不够熟练 还需要深入
// 联合类型的T不能直接处理，需要重新赋值
// Exclude<T, U> T和U相等的时候会返回never 记得做判断


// 尝试减少使用infer？下边这个答案没用到infer一样实现了 github上的答案都用到了infer 但其实infer真的很难理解。。

// Exclude 工具方法在传入两个同样的类型的时候，会返回 never ，但是很明显000


// 上面我们并没有对 never做出处理，所以会导致最后取得的值变为 never，那么既然入参会存在 never 的情况，我们就需要改变一下判断条件，最开始的条件不再是任何数组，而是判断是否是一个保存着 never 的数组：

type Permutation<T, K = T> = [T] extends [never]
  ? []
  : T extends T
  ? [T, ...Permutation<Exclude<K, T>>]
  : never;