import "./navbar.scss";
import NavBtn from "./buttons/navBtn";
import {MdOutlineCreditScore} from "react-icons/md";



const Navbar = ()=>{


    return (

        <div className="nav__container">
            <div className="app__logo"><span><MdOutlineCreditScore/></span>-<span>Quick Credit</span></div>
            <div className="nav__links">
                <span>Home</span>
                <span>GetCredit</span>
                <span>FAQ</span>
                <span>Blog</span>
                <NavBtn text="Get the App" />
            </div>
        </div>

    )
}
export default Navbar;