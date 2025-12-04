function Button({label, val, handleClick}){
    return(
      <button onClick={handleClick}>{label}</button>
    )

}

export default Button;