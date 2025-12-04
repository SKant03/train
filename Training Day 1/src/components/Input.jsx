function Input({placeholder, val, handleChange}){
    return (
      <input type="text" placeholder={placeholder} value={val}
        onChange={handleChange}  
      />
    )
}

export default Input;