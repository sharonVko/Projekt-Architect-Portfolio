import "./DarkMode.css"
import { useContext } from "react";
import { DarkModeContext } from "../../context/Context";
import Sun from "../../assets/SVG/Sun";
import Moon from "../../assets/SVG/Moon";


const DarkMode = () => {

    const {darkMode, setDarkMode} = useContext(DarkModeContext)

    return (
        <div className={"d-l-mode"} onClick={() => setDarkMode(!darkMode) }>

            {darkMode? <Sun/> : <Moon/>}
        </div>
      );
}
 
export default DarkMode;