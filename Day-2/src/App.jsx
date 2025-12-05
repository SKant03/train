import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Options from "./components/Options";
import Radio from "./components/Radio";
import InputFile from "./components/InputFile";
import InputDate from "./components/InputDate";
import InputRange from "./components/InputRange";
import Button from "./components/Button";
import ThemeButton from "./components/Theme";

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
      <div className="flex justify-center h-screen w-screen ">
        <div className=" mt-10 p-2 rounded-xl ">
          <div>
            <ThemeButton />
          </div>
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
