import './App.css';
import Button from './Button'
import Name from './Name'

function App() {
  return (
    <div className="App">
      <div className="section fullscreen">
        <div class="center">
          <p>Hi there, I'm</p>
          <Name></Name>
          <p>A computer science student from Kiev, Ukraine</p>
          <Button text="About me"></Button>
        </div>
      </div>
      <div class="section fullscreen" id="about-me">
      </div>
    </div>
  );
}

export default App;
