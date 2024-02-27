import './HorizontalCompnent.css';
import logo from './image.png';

function HorizontalCompnent(props) {
    return (
        <div className="body">
            <div className="horizontalCourseComponent">
                <div className="imagePlusName"><p className="componentNumber">{props.line1}</p><center><div className="builderImage"><img className="picture" src={logo} alt="Logo" /></div><p className= "imageText">Builder {props.line1}</p></center></div>
                <div className="textPart">
                    <p>{props.mainHeading}</p>
                    <h4>Main highlights</h4>
                    <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                    <button className="showMoreButton">show more</button>
                </div>
                <div className="ratingAndViewBotton"><center><p className="ratingStar"><h1>{props.rating}</h1>{props.ratingType}<h4>{props.ratingStar}</h4></p>
                    <button className="viewButton">View</button></center></div>
            </div>
        </div>
    );
}
export default HorizontalCompnent;