import './VerticalComponent.css';
import logo from './image.png';

function VerticalComponent() {
    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello World";
    }
    return (
        <div className="verticalComponent">
            <div className="imageAndOffer"><center><p className="someText"><div className="builderImage1"><img className="picture" src={logo} alt="Logo" /></div>Limited time</p>
                <center>Webbuilder 1</center>
                <p className="discText">Computer  Modern clasic with wix support</p>
                <p className='prize'>$39.96 <p className='orignalPrize'>$49.96</p> <p className='discount'>(20% Off)</p></p>
                <button className="viewDeal">View Deal</button></center></div>
        </div>
    );
}
export default VerticalComponent;