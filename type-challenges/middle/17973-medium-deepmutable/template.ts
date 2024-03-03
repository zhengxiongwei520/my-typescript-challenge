// 初步写法
// type DeepMutable<T> = {
//   -readonly[Key in keyof T]: T[Key] extends object
//   ? DeepMutable<T[Key]> : T[Key]
// }

// 然后发现类case2差异很大
// 我的答案Expand出来的类型
// type TextDeepMutable1 = {
//   a: DeepMutable<() => 1>;
//   b: string;
//   c: DeepMutable<{
//       readonly d: boolean;
//       readonly e: {
//           readonly g: {
//               readonly h: {
//                   readonly i: true;
//                   readonly j: 's';
//               };
//               readonly k: 'hello';
//           };
//           readonly l: readonly [
//               'hi',
//               {
//                   readonly m: readonly ['hey'];
//               }
//           ];
//       };
//   }>;
// }

// 这是所需要的类型
// type TextDeepMutable2 = {
//   a: DeepMutable<() => 1>;
//   b: string;
//   c: DeepMutable<{
//       d: boolean;
//       e: {
//           g: {
//               h: {
//                   i: true;
//                   j: 's';
//               };
//               k: 'hello';
//           };
//           l: [
//               'hi',
//               {
//                   m: ['hey'];
//               }
//           ];
//       };
//   }>;
// }

// 只是函数没做处理 c里边的readonly应该去掉了才对 不知道为什么Expand还会显示
// 所以不能太依赖Expand？

 
// 没有加对函数的判断
// 因为函数也属于对象类型 所以Epxand展示出来的类型差距很大

type DeepMutable<T> = T extends (...args: unknown[]) => unknown ? T : {
  -readonly[Key in keyof T]: T[Key] extends object
  ? DeepMutable<T[Key]> : T[Key]
}
 