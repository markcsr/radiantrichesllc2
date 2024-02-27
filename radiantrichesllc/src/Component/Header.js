import './Header.css';
import { MdOutlineSearch } from "react-icons/md";

function Header() {
    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello World";
    }
    return (
        <div className="Header">
            <div ><MdOutlineSearch className="searchIcon"/></div>
            <div ><input className="searchInputBox" type="text"></input></div>
            <div className="catagoires">catagories</div>
            <div className="websiteBuilder">website builders</div>
            <div className="todayDeal">Todays deal</div>
        </div>
    );
}
export default Header;
