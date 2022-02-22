import React, { useState } from 'react'
import './style.css'

const Mainfile = () => {
    const text2={
      fontSize: '22px',
      marginTop: '2rem',
      color: '#11549c'
    }
    const leftbtn={
        fontSize: '18px',
    }

    const [show,setShow]=useState(false);
    const [showR,setShowR]=useState(false);

  return (
    <>
        <div className='heading'>Styling using Functional and Class Component</div>
        <div className="btns">
        <button style={leftbtn} className='btn btn1' onClick={()=> setShow(!show)}>To see styling in functional component</button>
        <button className='btn btn2' onClick={()=> setShowR(!showR)}>To see styling in class component</button>
        </div>
        
        <div className="boxes">
            {show?
            <div className="box box1">
                <div className='head'>This is created using functional component</div>
                <div className="text1">This is done using external CSS</div>
                <div style={text2}>This is done using inline CSS</div>
            </div>
              :null  }

            {showR?
            <div className="box box2">
                <div className='head'>This is created using class component</div>
                <div className="text1">This is done using external CSS</div>
                <div style={text2}>This is done using inline CSS</div>
            </div>
            :null  }
        </div>
    </>
  )
}

export default Mainfile