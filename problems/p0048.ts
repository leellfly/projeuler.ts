/*
  Self Powers

  The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

  Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
*/

import { measureTime } from "../utils"

function solve() {
  let sum = 0n // 使用BigInt类型来避免整数溢出
  const MOD = 10n ** 10n // 取模数，只保留最后10位数

  for (let i = 1; i <= 1000; i++) {
    let term = BigInt(i) ** BigInt(i) // 使用BigInt计算每一项的幂
    sum = (sum + term) % MOD // 求和并取模
  }

  return sum.toString()
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//9110846700
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
