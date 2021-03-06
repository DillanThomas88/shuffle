import React, { useEffect } from 'react'
import SVG from '../svg'


function Controller(props) {


    return (<>
        <div onClick={props.handleClick}
            className={`relative flex justify-center items-center w-1/3 text-white mt-6`}>
            <button id='left' className={`text-white`}>
                <SVG
                    title={'arrow'}
                    classes={`svg rotate-90 pointer-events-none h-20 w-20`}
                />
            </button>
            <div className={''} >

                <button id='up' className={`text-white mb-20`}>
                    <SVG
                        title={'arrow'}
                        classes={`svg rotate-180 pointer-events-none h-20 w-20`}
                    />
                </button>

                <button id='down' className={`text-white`}>
                    <SVG
                        title={'arrow'}
                        classes={`svg pointer-events-none h-20 w-20`}
                    />
                </button>

            </div>


            <button id='right' className={`text-white`}>
                <SVG
                    title={'arrow'}
                    classes={`svg -rotate-90 pointer-events-none h-20 w-20`}
                />
            </button>
        </div>

    </>)
}

export default Controller