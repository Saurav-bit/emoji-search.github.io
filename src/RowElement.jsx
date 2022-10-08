import React, { useEffect, useState } from 'react'
import "./RowElement.css";
import copy from "copy-to-clipboard";  
function RowElement(props) {
    // const [copyText, setCopyText] = useState('');
    const handleCopyText = () => {
        // console.log(e.target);
        var str=(props.symbol);
        console.log(str)
        
        copy(str);
        // copyToClipboard()
       
        // setCopyText(e.target.value);
     } 
     
    //  const copyToClipboard = () => {
    //     copy(copyText);
    //     alert(`You have copied "${copyText}"`);
    //  }

    // useEffect(()=>{
    //     copy(copyText);
    // },[copyText])
       
  return (
    <div key={props.title} className="rowele" >
            <p>
              <span style={{margin:"0.5rem"}}>{props.symbol}</span>
              <span>{props.title}</span>
              <span className='btn-copy'>
                <span onClick={handleCopyText}> Copy to clip</span>
              </span>
            </p>

          </div>
  )
}

export default RowElement