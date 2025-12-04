function Options({ name, option = [], handleChange }) {
  return (
    <>
      <div className="p-2 text-white font-bold text-xl">{name}</div>
      <select
        className="w-full p-2 bg-white  "
        name={name}
        onChange={handleChange}
      >
        {option.map((opt) => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </>
  );
}

export default Options;
