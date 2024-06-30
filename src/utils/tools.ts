/**
 * 返回一个m~n之间的随机数
 * @param m
 * @param n
 * @returns
 */
export function randomInt(m: number, n: number) {
  return Math.floor(Math.random() * (n - m + 1) + m);
}
