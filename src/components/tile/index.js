import React, { useEffect, useState } from "react"



function Tile(props) {

    if (props.player === 'true'){
        return (<>
            <div
            player={props.player}
                id={props.id}
                row={props.row}
                col={props.col}
                className={`tile relative h-16 w-16 bg-white outline border border-neutral-100 outline-1 outline-neutral-500 overflow-hidden`} >
                <div className={`pointer-events-none h-full w-full z-10 ${props.style}`}></div>
            </div>
        </>)
    } else if (props.player === 'prev') {
        return (<>
            <div
            player={props.player}
                id={props.id}
                row={props.row}
                col={props.col}
                className={`tile relative h-16 w-16 bg-white outline border border-neutral-100 outline-1 outline-neutral-500 overflow-hidden`} >
                <div className={`pointer-events-none h-full w-full z-10 ${props.style}`}></div>
            </div>
        </>)
    } else {

        return (<>
            <div
            player={props.player}
                id={props.id}
                row={props.row}
                col={props.col}
                className={`tile relative h-16 w-16 bg-white outline outline-1 outline-neutral-500`} >
                <div className="pointer-events-none w-full h-full z-10"></div>
            </div>
        </>)
    }
}

export default Tile