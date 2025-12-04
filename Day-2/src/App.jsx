import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Options from "./components/Options";
import Radio from "./components/Radio";
import InputFile from "./components/InputFile";
import InputDate from "./components/InputDate";
import InputRange from "./components/InputRange";
import Button from "./components/Button";

function App() {
  const [text, setText] = useState("");
  const [file, setFile] = useState("");
  const [date, setDate] = useState("");
  const [range, setRange] = useState("0");
  const [option, setOption] = useState("");
  const [radio, setRadio] = useState("");

  const handleClick = () => {
    console.log({
      text,
      file,
      date,
      range,
      option,
      radio,
    });
  };

  return (
    <>
      <div className="flex justify-center bg-cyan-700 h-screen w-screen">
        <div className=" mt-10 p-2 border h-min rounded-xl bg-cyan-800 shadow-lg">
          <h1 className="text-5xl font-bold text-center text-white"> Day-2</h1>
          <Input
            label="Enter name"
            placeHolder="enter text"
            value={text}
            handleChange={(e) => setText(e.target.value)}
          />

          <InputFile
            label="Upload File"
            placeHolder="upload file"
            value={file}
            handleChange={(e) => setFile(e.target.value)}
          />

          <InputDate
            label="Date Picker"
            placeHolder="select date"
            value={date}
            handleChange={(e) => setDate(e.target.value)}
          />

          <InputRange
            label="Age"
            placeHolder=""
            value={range}
            handleChange={(e) => setRange(e.target.value)}
          />

          <Options
            name="Options"
            option={[
              { value: "", label: "select option" },
              { value: "1", label: "first" },
              { value: "2", label: "second" },
            ]}
            handleChange={(e) => setOption(e.target.value)}
          />

          <Radio
            name="Radio Options"
            option={[
              { value: "1", label: "first" },
              { value: "2", label: "second" },
            ]}
            handleChange={(e) => setRadio(e.target.value)}
          />

          <Button label="submit" handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default App;
