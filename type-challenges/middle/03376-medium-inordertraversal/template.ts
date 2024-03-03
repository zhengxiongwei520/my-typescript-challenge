interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ?
  [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
  : []



// https://github.com/type-challenges/type-challenges/issues/14093 参考回答
// 有详细解答

// 要点是 [T] extends [TreeNode]  要用 [] 将 extends 两端包起来，避免 distributive conditional type，也就是避免去处理联合类型的null