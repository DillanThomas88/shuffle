
import React, {useEffect, useState} from 'react';
import Board from './components/board';
import './output.css'



function App() {


  useEffect(()=> {
    document.title = 'proto'
  },[])

    return (
      <div style={{height: window.innerHeight, width: window.innerWidth}} className="font-default ">
        <header>

        </header>

        <main className='flex flex-col h-full justify-center items-center text-center'>
          <Board />
        </main>

        <footer>

        </footer>
  
      </div>
    );
 

}

export default App;
