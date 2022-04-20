import React, { useEffect, useState } from 'react'
import Tile from '../tile'
import { createGrid, placePlayer, swapTiles } from './helpers'


function Board(props) {


    const gridSize = 5
    const tileSize = 20

    const [cells,setCells] = useState(placePlayer(gridSize, createGrid(gridSize)))


    const handleClick = (e, props) => {

        setCells(swapTiles(e, [...cells]))
    }


    useEffect(() => {
        // console.log('object');
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
            style={'bg-white animate-stick'}
            key={arr[playerID].key}
            id={arr[playerID].props.id}
            row={arr[playerID].props.row}
            col={arr[playerID].props.col} />
            setCells(arr)

            
        }, 100);
        
    },[cells])

    useEffect(()=>{
        if(!props.direction) return
        setCells(swapTiles([...cells], props.direction))
        // ! handle controller moves

    },[props.direction])


    return(<>
    <div
    className=' grid grid-cols-5'>

        {cells}
    </div>
    </>)
}

export default Board