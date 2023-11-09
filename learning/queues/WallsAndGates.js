const GATE = 0


function wallsAndGates(rooms) {
    const m = rooms.length
    if (m === 0) return
    const n = rooms[0].length
    const q = []

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (rooms[row][col] === GATE) {
                q.push([row, col])
            }
        }
    }

    while(q.length !== 0) {
        let point = q.shift()
        let row = point[0]
        let col = point[1]

        
    }
}