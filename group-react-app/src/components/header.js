import Navbar from "./navbar";
import "./header.css"

function Header (props) {
    const {darkMode, setDarkMode} = props
    
    return (
        <div className="header">
            <a className="logo" href="">logo</a>
            
            <Navbar />

            <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>

        </div>
    )
}

export default Header