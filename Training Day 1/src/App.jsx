import { useState } from 'react'
import Input from './components/Input';
import Button from './components/Button';
import Text from './components/Text';
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleClick =() =>{
    setText(inputValue);
    setInputValue("");
  }

  return (
    <>
    <Text text={text}/>
    <Input placeholder="enter name" 
      val={inputValue}
      handleChange={(e)=>setInputValue(e.target.value)}/>
    <Button label="submit" val={inputValue} handleClick={handleClick} />
    </>
  )

}
export default App
