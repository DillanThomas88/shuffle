
import Tile from "../tile"
import { Vibration } from 'react-native'



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

export function swapTiles(x, direction) {
    if(!direction) return
    // console.log(x);
    // if (!e.target.classList.contains('tile')) return
    let prevSpot = document.querySelector('[player="true"]')
    let prevAnim = null
    let anim = null
    let nextID = null






    let p = {
        id: parseInt(prevSpot.getAttribute('id')),
        row: parseInt(prevSpot.getAttribute('row')),
        col: parseInt(prevSpot.getAttribute('col')),
    }

    switch (direction) {
        case 'up':
            nextID = p.id - 5
            break;
        case 'down':
            nextID = p.id + 5
            break;
        case 'left':
            nextID = p.id - 1
            if(!x[nextID] || x[nextID].props.col !== p.col) return x
            break;
        case 'right':
            nextID = p.id + 1
            // console.log(nextID);
            if(!x[nextID] || x[nextID].props.col !== p.col) return x
            break;

        default:
            break;
    }

    if(!x[nextID]) return x

    
    

    let o = {
        id: parseInt(x[nextID].props.id),
        row: parseInt(x[nextID].props.row),
        col: parseInt(x[nextID].props.col),
    }

    if (o.row === p.row) {

        if (o.id > p.id) {
            anim = 'animate-slidedown absolute  bg-white '
            prevAnim = 'animate-slideup absolute bottom-0 bg-white '

        } else {
            anim = 'animate-slidedown absolute bottom-0 bg-white '
            prevAnim = 'animate-slideup absolute  bg-white '
        }
    } else {

        if (o.id > p.id) {
            anim = 'animate-slideright absolute bg-white '
            prevAnim = 'animate-slideleft absolute right-0 bg-white '

        } else {
            anim = 'animate-slideright absolute right-0 bg-white'
            prevAnim = 'animate-slideleft absolute bg-white '
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
        style={`bg-white`}
        gridSize={gridsize}
        key={arr[half].key}
        id={arr[half].key}
        row={arr[half].props.row}
        col={arr[half].props.col}
    />

    return arr

}