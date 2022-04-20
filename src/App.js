
import React, { useEffect, useState } from 'react';
import {Vibration} from 'react-native'
import Board from './components/board';
import Controller from './components/controller';
import { clickAnimation } from './components/controller/helpers';
import './output.css'



function App() {
  const [start,setStart] = useState(false)
  const [direction,setDirection] = useState(null)
  

  const handleClick = (e) => {
    if(!start) setStart(!start)
    // Vibration.vibrate()

    clickAnimation(e.target.children[0])
    setDirection(e.target.getAttribute('id'))
    let t = setInterval(() => {
      setDirection(null)
      clearInterval(t)
      
    }, 100);

  //  console.log(e.target.getAttribute('id'));
  }


  useEffect(() => {
    if(!start) return
    
  }, [start, direction])

  useEffect(()=> {
    document.title = 'proto'
  },[])

  return (
    <div style={{ height: window.innerHeight, width: window.innerWidth }} className="font-default overflow-hidden">

      <main className='flex flex-col mt-8 justify-start items-center text-center'>

        <Board direction={direction} />
        <Controller handleClick={handleClick} />

      </main>

    </div>
  );


}

export default App;
