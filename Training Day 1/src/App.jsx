import { useState } from 'react'
import './App.css'


function InputComp({placeholder, val, handleChanges}){
    return (
      <input type="text" placeholder={placeholder} value={val}
        onChange={handleChanges}  
      />
    )
}

function App() {
  const [text, settext] = useState("");
  const [inputvalue, setinputvalue] = useState("");

  function ButtonComp({label, val}){
  const handleclick =() =>{
    settext(val);
    setinputvalue("");
  }
    return(
      <button onClick={handleclick}>{label}</button>
    )

}


  return (
    <>
    <h1>Hello World!</h1>
    <h1>Welcome {text} </h1>
    <InputComp placeholder="enter name" 
      val={inputvalue}
      handleChanges={(e)=>setinputvalue(e.target.value)}/>
    <ButtonComp label="submit" val={inputvalue} />
    </>
  )

}
export default App
