import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Bottom from './Component/Bottom';
import Main from './Component/Main';

function App() {
  function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
  return (
    <div className="App">
      <Header />
      <Main />
      <Bottom />
    </div>
  );
}
export default App;
