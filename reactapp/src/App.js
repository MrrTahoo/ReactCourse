import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';

function App() {
  return (
    <>
      <Navbar title="Text Editor" aboutText="About" />
      <div className="container">
        <TextBox />
      </div>
    </>
  );
}

export default App;
