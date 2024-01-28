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

function solve() {
  const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const thirtyDaysMonthArr = ['September', 'November', 'June', 'April']
  const thirtyOneDaysMonthArr = ['January', 'March', 'May', 'July', 'August', 'October', 'December']
  const specialMonth = 'February'

  let totalDay = 0
  let satisfiedCount = 0

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  }

  const getDaysInMonth = (monthName: string, year: number) => {
    if (year <= 1901) return 0
    if (monthName === specialMonth) {
      return isLeapYear(year) ? 29 : 28
    } else if (thirtyDaysMonthArr.includes(monthName)) {
      return 30
    } else if (thirtyOneDaysMonthArr.includes(monthName)) {
      return 31
    } else {
      return 0
    }
  }

  for (let year = 1901; year <= 2000; year++) {
    for (let month = 0; month < 12; month++) {

      let lastMonthName = month === 0 ? 'December' : monthArr[month - 1]

      totalDay += getDaysInMonth(lastMonthName, year)

      if ((totalDay + 1) % 7 === 0) {
        satisfiedCount += 1
      }
    }
  }

  return satisfiedCount
}


console.log(solve())