const GATE = 0


function numIslands(grid) {
    if (grid === null || grid.length === 0) return 0

    const nr = grid.length
    const nc = grid[0].length
    let num_islands = 0
    const neighbors = []

    for (let r = 0; r < nr; r++) {
        for (let c = 0; c < nc; c++) {
            if (grid[r][c] === '1') {
                ++num_islands
                grid[r][c] = '0'
                neighbors.push(r * nc + c)
                while(neighbors.length !== 0) {
                    let id = neighbors.shift()
                    let row = ~~(id / nc)
                    let col = id % nc

                    if (row - 1 >= 0 && grid[row-1][col] == '1') {
                        neighbors.push((row-1) * nc + col);
                        grid[row-1][col] = '0';
                    }

                    if (row +1 < nr && grid[row+1][col] === '1') {
                        neighbors.push((row+1) * nc + col)
                        grid[row+1][col] = '0'
                    }

                    if (col - 1 >= 0 && grid[row][col-1] === '1') {
                        neighbors.push(row * nc + col-1)
                        grid[row][col-1] = '0'
                    }
                    
                    if (col + 1 < nc && grid[row][col+1] === '1') {
                        neighbors.push(row * nc + col+1);
                        grid[row][col+1] = '0'
                    }
                }
            }
        }
    }

    return num_islands
}

const example_1 = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
const example_2 = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]

result = numIslands(example_1)
console.log(result)
