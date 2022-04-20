import React, { useEffect, useState } from "react"



function Tile(props) {

    switch (props.player) {

        case 'true':
            return (<>
                <div
                    player={props.player}
                    id={props.id}
                    row={props.row}
                    col={props.col}
                    className={`tile relative h-16 w-16  outline border border-white outline-1 outline-white overflow-hidden`} >
                    <div className={`pointer-events-none h-full w-full z-10 ${props.style}  `}></div>
                </div>
            </>)


        case 'prev':
            return (<>
                <div
                    player={props.player}
                    id={props.id}
                    row={props.row}
                    col={props.col}
                    className={`tile relative h-16 w-16  outline border border-white outline-1 outline-white overflow-hidden`} >
                    <div className={`pointer-events-none h-full w-full z-10 ${props.style} `}></div>
                </div>
            </>)

        default:
            return (<>
                <div
                    player={props.player}
                    id={props.id}
                    row={props.row}
                    col={props.col}
                    className={`tile relative h-16 w-16 outline outline-1 outline-white`} >
                    <div className="pointer-events-none w-full h-full z-10"></div>
                </div>
            </>)
    }
}

export default Tile