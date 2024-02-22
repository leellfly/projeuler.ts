/*
  Coin Sums

  In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in
  general circulation:

    1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).

  It is possible to make £2 in the following way:

    1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
  How many different ways can £2 be made using any number of coins?
*/

import { measureTime } from "../utils"

function solve(): number {
  const targetAmount: number = 200
  const coinValues: number[] = [1, 2, 5, 10, 20, 50, 100, 200]

  // 初始化数组，用于存储每个金额可以被多少种方式组合而成
  const ways: number[] = Array.from({ length: targetAmount + 1 }, () => 0)
  ways[0] = 1 // 0元有一种组合方式，即什么都不选

  // 遍历每个硬币面值
  for (const coin of coinValues) {
    // 遍历从当前硬币面值到目标金额的所有可能金额
    for (let amount = coin; amount <= targetAmount; amount++) {
      ways[amount] += ways[amount - coin]
    }
  }

  return ways[targetAmount]
}


const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//73682
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
