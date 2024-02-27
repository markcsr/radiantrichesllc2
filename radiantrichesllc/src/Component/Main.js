import HorizontalCompnent from './HorizontalCompnent';
import './Main.css';
import VerticalComponent from './VerticalComponent';
import { CiCircleCheck } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";

function Main() {
    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello World";
    }
    return (
        <div className="Body">
            <div className="mainHeader">
                <p className='bigHeading'>Best Website builders in the US</p>
                <div className="Line1">
                    <div className='cheackMark'><CiCircleCheck /></div>
                    <div className='lastUpdate'>Last Updated - February 22, 2020 </div>
                    <div><IoInformationCircleOutline /></div>
                    <div className='lastUpdate'> Advertising Disclosure</div>
                </div>
                <div className="Line2">
                    <button className="Line2Button">Tools</button>
                    <button className="Line2Button">AWS Builder</button>
                    <button className="Line2Button">Start Build</button>
                    <button className="Line2Button">Build Supplies</button>
                    <button className="Line2Button">Tooling</button>
                    <button className="Line2Button">Blue Hosting</button>
                </div>
                <div className="Line3">
                    <p>Home > Hosting for all > Hosting > Hosting 6 > Hosting 5</p>
                </div>
            </div>
            <HorizontalCompnent line1="1" rating="9.8" ratingType="Exceptional" ratingStar="⭐⭐⭐⭐⭐⭐" mainHeading="WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"/>
            <HorizontalCompnent line1="2" rating="9.5" ratingType="Excellent" ratingStar="⭐⭐⭐⭐⭐" mainHeading="SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"/>
            <HorizontalCompnent line1="3" rating="9.3" ratingType="Exceptional" ratingStar="⭐⭐⭐⭐⭐⭐" mainHeading="WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"/>
            <div className="verticalComponentCss">
                <VerticalComponent />
                <VerticalComponent />
                <VerticalComponent />
            </div>
            <div ><p className="singUpText">Sign up and get exclusive special deals<button className='signUpButton'>Sign Up</button></p>
            </div>

        </div>
    );
}
export default Main;