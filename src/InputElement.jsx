import React, { useState } from 'react'
import "./InputElement.css"



function InputElement(props) {

    const [val,SetVal]=useState("");

    const toggle=(e)=>{
            // console.log(e.target.value)
        props.SetVal(e.target.value);
    }
  return (
    <div className='wrap-input'>
        <input className='input-ele' onChange={toggle}/>

    </div>
  )
}

export default InputElement ;