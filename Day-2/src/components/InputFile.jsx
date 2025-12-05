import { useEffect ,useState} from "react";  

function InputFile({ label, placeHolder, handleChange }) {
  const [preview, setPreview] = useState(null);

  const onFileSelet =(e) =>{
    const file = e.target.files[0];
    handleChange(e);

    if(file){
      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
    }
  }

  return (
    <div className="m-2 p-2">
      <div className="font-bold text-xl">{label}</div>
      <input
        className="p-2 w-full border rounded-xl border-gray-900 bg-white text-black shadow-md focus:outline-black transition-all"
        type="file"
        placeholder={placeHolder}
        onChange={handleChange}
        accept="image/*"
      />
    </div>
  );
}

export default InputFile;
