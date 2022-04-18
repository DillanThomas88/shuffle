import React, { useEffect, useState } from 'react'
import Tile from '../tile'
import { createGrid, placePlayer, swapTiles } from './helpers'


function Board(props) {


    const gridSize = 5
    const tileSize = 20

    const [cells,setCells] = useState(placePlayer(gridSize, createGrid(gridSize)))


    const handleClick = (e) => {

        setCells(swapTiles(e, [...cells]))
    }


    useEffect(() => {
        
        let prevID = null
        let playerID = null
        if(!document.querySelector('[player="prev"]')) return

        prevID = document.querySelector('[player="prev"]').getAttribute('id')
        playerID = document.querySelector('[player="true"]').getAttribute('id')

        let arr = [...cells]
        let t = setInterval(() => {
            clearInterval(t)


            arr[prevID] = <Tile
            player={'false'}
            key={arr[prevID].key}
            id={arr[prevID].props.id}
            row={arr[prevID].props.row}
            col={arr[prevID].props.col} />

            arr[parseInt(playerID)] = <Tile
            player={'true'}
            style={'bg-neutral-800 animate-stick'}
            key={arr[playerID].key}
            id={arr[playerID].props.id}
            row={arr[playerID].props.row}
            col={arr[playerID].props.col} />
            setCells(arr)

            
        }, 100);
        
    },[cells])

    useEffect(()=>{
        console.log(props.direction);

        // ! handle controller moves

    },[props.direction])


    return(<>
    <div onClick={(e) => handleClick(e)}
    className=' h-full grid grid-cols-5 content-center'>

        {cells}
    </div>
    </>)
}

export default Board