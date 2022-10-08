import React from 'react'
import RowElement from './RowElement';

function Show(props) {

  
  return (
    <div style={{borderTop:"2px solid black"}}>
      
      {props.list.map((ele)=>{
        return (

          <RowElement key={ele.title} title={ele.title} symbol={ele.symbol}/>
          // <div key={ele.title}>
          //   <p>
          //     <span>{ele.symbol}</span>
          //     <span>{ele.title}</span>
          //   </p>

          // </div>
        );

      })}
      
      </div>
  )
}

export default Show