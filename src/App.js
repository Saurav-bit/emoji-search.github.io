
import './App.css';
import Head from './Head';
import InputElement from './InputElement';
import Show from './Show';
import { useState } from 'react';

import ls from "./List.js";

import filter from "./filter.js"
function App() {

  
  // console.log(ls);
  const [val,SetVal]=useState("");
  const tp=filter("");
  const [lst,Setlst]=useState(tp);
  const toggle=(e)=>{
    // console.log(e.target.value)
  SetVal(e);
  // console.log(filter(e));
  Setlst(filter(e));
}


  return (
    <div className="App">
      <Head />
      <InputElement SetVal={toggle}/>
      <Show val={val} list={lst}/>
    </div>
  );
}

export default App;
