import './Bottom.css';

function Bottom() {
  function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
  return (
      <div className="bottom">
        <div>
          <table>
            <tr className='heading'>CATAGORIES</tr>
            <tr>web builder</tr>
            <tr>Hosting</tr>
            <tr>Data Center</tr>
            <tr>Robotic Automation</tr>
          </table>
        </div>
        <div>
          <table>
            <tr className='heading'>CONTACT</tr>
            <tr>Contact</tr>
            <tr>Privacy Policy</tr>
            <tr>Terms Of Service</tr>
            <tr>Categories</tr>
            <tr>About</tr>
          </table>
        </div>
        <button className="conutryNameButton">United States</button>
      </div>
  );
}
export default Bottom;
