function Input({ label, placeHolder, value, handleChange }) {
  return (
    <div className="m-2 p-2">
      <div className="font-bold text-xl">{label}</div>
      <input
        className="p-2 w-full border rounded-xl border-gray-900 text-black bg-white shadow-md focus:outline-black transition-all"
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
