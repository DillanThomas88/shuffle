
import Tile from "../tile"

export function createGrid(gridSize) {

    let arr = []
    let key = 0

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {

            arr.push(
                <Tile
                    gridSize={gridSize}
                    key={key}
                    id={key}
                    row={j}
                    col={i}
                />)
            key++
        }
    }
    return arr
}

export function swapTiles(e, x, direction) {
    if (!e.target.classList.contains('tile')) return

    let prevSpot = document.querySelector('[player="true"]')
    let prevAnim = null
    let anim = null

    let o = {
        id: parseInt(e.target.getAttribute('id')),
        row: parseInt(e.target.getAttribute('row')),
        col: parseInt(e.target.getAttribute('col')),
    }


    let p = {
        id: parseInt(prevSpot.getAttribute('id')),
        row: parseInt(prevSpot.getAttribute('row')),
        col: parseInt(prevSpot.getAttribute('col')),
    }

    if (o.row === p.row) {

        if (o.id > p.id) {
            anim = 'animate-slidedown absolute  bg-green-300 '
            prevAnim = 'animate-slideup absolute bottom-0 bg-green-300 '

        } else {
            anim = 'animate-slidedown absolute bottom-0 bg-green-300 '
            prevAnim = 'animate-slideup absolute  bg-green-300 '
        }
    } else {

        if (o.id > p.id) {
            anim = 'animate-slideright absolute bg-green-300 '
            prevAnim = 'animate-slideleft absolute right-0 bg-green-300 '

        } else {
            anim = 'animate-slideright absolute right-0 bg-green-300 '
            prevAnim = 'animate-slideleft absolute bg-green-300  bg-green-300 '
        }
    }


    x[p.id] = <Tile
        player={'prev'}
        style={prevAnim}
        key={x[p.id].key}
        id={x[p.id].props.id}
        row={x[p.id].props.row}
        col={x[p.id].props.col} />



    x[o.id] = <Tile
        player={'true'}
        style={anim}
        key={x[o.id].key}
        id={x[o.id].props.id}
        row={x[o.id].props.row}
        col={x[o.id].props.col} />

    return x
}

export function placePlayer(gridsize, arr) {

    let half = Math.floor((gridsize * gridsize) / 2)

    arr[half] = <Tile
        player={'true'}
        style={`bg-green-300 `}
        gridSize={gridsize}
        key={arr[half].key}
        id={arr[half].key}
        row={arr[half].props.row}
        col={arr[half].props.col}
    />

    return arr

}