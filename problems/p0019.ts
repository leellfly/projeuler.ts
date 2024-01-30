/*
  Counting Sundays

  You are given the following information, but you may prefer to do some research for yourself.

  1 Jan 1900 was a Monday.
  Thirty days has September,
  April, June and November.
  All the rest have thirty-one,
  Saving February alone,
  Which has twenty-eight, rain or shine.
  And on leap years, twenty-nine.
  A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible
  by 400.

  How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec
  2000)?
*/

import { measureTime } from "../utils"

function solve() {
  const monthInfo = {
    names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    thirtyDays: ['September', 'November', 'June', 'April'],
    thirtyOneDays: ['January', 'March', 'May', 'July', 'August', 'October', 'December'],
    specialMonth: 'February'
  }

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  }

  const getDaysInMonth = (monthName: string, year: number) => {
    if (monthName === monthInfo.specialMonth) {
      return isLeapYear(year) ? 29 : 28
    } else if (monthInfo.thirtyDays.includes(monthName)) {
      return 30
    } else if (monthInfo.thirtyOneDays.includes(monthName)) {
      return 31
    } else {
      return 0
    }
  }

  const START_YEAR = 1900
  const END_YEAR = 2000

  let totalDay = 0
  let satisfiedCount = 0

  for (let year = START_YEAR; year <= END_YEAR; year++) {
    for (let month = 0; month < 12; month++) {
      let lastMonthName = month === 0 ? monthInfo.names[monthInfo.names.length - 1] : monthInfo.names[month - 1]
      if (year === START_YEAR && month === 0) {
        lastMonthName = ''
      }

      totalDay += getDaysInMonth(lastMonthName, year)

      if ((year > START_YEAR) && (totalDay + 1) % 7 === 0) {
        satisfiedCount += 1
      }
    }
  }

  return satisfiedCount
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//171
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
