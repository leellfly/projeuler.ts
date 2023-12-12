/*
    Lattice Paths

    Starting in the top left corner of a 2 x 2 grid, and only being able to move to the right and down,
    there are exactly 6 routes to the bottom right corner.

        * == * == *    * == * -- *    * == * -- *
        |    |    ||   |    ||   |    |    ||   |
        * -- * -- *    * -- * == *    * -- * -- *
        |    |    ||   |    |    ||   |    ||   |
        * -- * -- *    * -- * -- *    * -- * == *

        * -- * -- *    * -- * -- *    * -- * -- *
        ||   |    |    ||   |    |    ||   |    |
        * == * == *    * == * -- *    * -- * -- *
        |    |    ||   |    ||   |    ||   |    |
        * -- * -- *    * -- * == *    * == * == *


    How many such routes are there through a 20 x 20 grid?
 */

function solve(gridWidth: number, gridHeight: number) {
    const routesNumber: number[][] = []

    for (let i = 0; i <= gridWidth; i++) {
        routesNumber[i] = []
        for (let j = 0; j <= gridHeight; j++) {
            if (i === 0 || j === 0) {
                routesNumber[i][j] = 1
            } else {
                routesNumber[i][j] = routesNumber[i - 1][j] + routesNumber[i][j - 1]
            }
        }
    }

    return routesNumber[gridWidth][gridHeight]
}

const gridWidth = 20
const gridHeight = 20
console.log(solve(gridWidth, gridHeight))//137846528820