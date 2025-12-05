function InputFile({ label, placeHolder, value, handleChange }) {
  return (
    <div className="m-2 p-2">
      <div className="font-bold text-xl">{label}</div>
      <input
        className="p-2 w-full border rounded-xl border-gray-900 bg-white text-black shadow-md focus:outline-black transition-all"
        type="file"
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputFile;
