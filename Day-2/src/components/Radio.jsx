function Radio({ name, option = [], handleChange }) {
  return (
    <>
      <div>
        <div className="p-2 font-bold text-xl">{name}</div>
        {option.map((opt) => (
          <label className=" p-2 flex font-semibold">
            <input
              type="radio"
              name={name}
              value={opt.value}
              onChange={handleChange}
            />
            {opt.label}
          </label>
        ))}
      </div>
    </>
  );
}
export default Radio;
