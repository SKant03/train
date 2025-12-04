export default function Button({ label, handleClick }) {
  return (
    <>
      <div className="flex justify-center m-4">
        <button
          className="p-2 border shadow-lg rounded-lg font-bold text-yellow-500"
          onClick={handleClick}
        >
          {label}
        </button>
      </div>
    </>
  );
}
