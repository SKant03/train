function InputRange({ label, placeHolder, value, handleChange }) {
  return (
    <div className="m-2 p-2">
      <div className="flex justify-between font-bold text-xl">
        <div>{label}</div>
        <div>{value}</div>
      </div>
      <input
        className="p-2 w-full   focus:outline-black transition-all"
        type="range"
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputRange;
