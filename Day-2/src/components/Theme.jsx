import { useContext } from "react";
import { ThemeContext, themes } from "../context/theme";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === themes.dark;

  return (
    <button onClick={toggleTheme} className="p-2">
      <span>
        <div
          className={`bg-yellow-500 rounded-b-full rounded-t-full p-1 w-20 flex ${
            isDark ? "justify-end" : "justify-start"
          } rounded-md`}
        >
          <div
            className={`rounded-full w-5 h-5 ${
              isDark ? "bg-white" : "bg-black"
            } `}
          ></div>
        </div>
      </span>
    </button>
  );
}
