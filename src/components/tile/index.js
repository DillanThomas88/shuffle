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
                    className={`tile relative h-16 w-16 bg-white outline border border-neutral-100 outline-1 outline-neutral-300 overflow-hidden`} >
                    <div className={`pointer-events-none h-full w-full z-10 ${props.style} -ml-[1px] -mt-[1px] `}></div>
                </div>
            </>)


        case 'prev':
            return (<>
                <div
                    player={props.player}
                    id={props.id}
                    row={props.row}
                    col={props.col}
                    className={`tile relative h-16 w-16 bg-white outline border border-neutral-100 outline-1 outline-neutral-300 overflow-hidden`} >
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
                    className={`tile relative h-16 w-16 bg-white outline outline-1 outline-neutral-300`} >
                    <div className="pointer-events-none w-full h-full z-10"></div>
                </div>
            </>)
    }
}

export default Tile