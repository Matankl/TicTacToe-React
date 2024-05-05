import { useState } from "react";

export default function Board() {  // export = public, default = main
  return (//return = rander
    <>
    <div classname="bord-row">
      <Square />
      <Square />
      <Square /> 
      </div>

      <div classname="bord-row">
      <Square />
      <Square />
      <Square /> 
      </div>

      <div classname="bord-row">
      <Square />
      <Square />
      <Square /> 
      </div>
    </>
  ); 

}

// make single square
// Seems like the methos have to be in capital letter so it can be called in the return
function Square(){
  const [value, setValue] = useState(null);

  function handleClick (){
    setValue('X');
  }

  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
  
}

function BordRow(){
  return (
    <div classname="bord-row">
      <Square />
      <Square />
      <Square /> 
    </div>
  );
}

