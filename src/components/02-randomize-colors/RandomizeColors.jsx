import React, { useState } from 'react'
import Title from '../e-signature/Title'
import Colors from './Colors'

const RandomizeColors = () => {
    const [click, setclick] = useState()

    const handleClick = (e) => { 
     
        setclick(e.target)

     }

     const handleSecClick = (e) => { 
     
        let body=document.querySelector("body");
      let colorsScreen=  body.style.background=getRandomColor()
        e.target.style.backgroundColor=colorsScreen
      

     }
     const getRandomColor = () => { 
        const letters="0123456789ABCDEF";
        let color="#";
        for (let i = 0; i < 6; i++) {
        color+=letters[Math.floor(Math.random()*16)]
        }
        return color;
      }

  return (
    <div className='container m-auto text-center'>

        <Colors text={"Randomize Color"} classes={"mb-4"} />
        <button className='btn btn-danger'  onClick={(e) => handleClick(e)} >Don't Click</button>
        <button className='btn btn-success' onClick={handleSecClick} >Click Me</button>
        <button className='btn btn-primary' onClick={handleSecClick}  >Click Me</button>
        <button className='btn btn-warning' onClick={handleSecClick} >Click Me</button>

    </div>
  )
}

export default RandomizeColors