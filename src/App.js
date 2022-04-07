import './App.css';
import Button from './Button'
import Name from './Name'

function App() {
  return (
    <div className="App">
      <div className="section fullscreen">
        <div>
          <p>Hi there, I'm</p>
          <Name></Name>
          <Button text="Abou me"></Button>
        </div>
      </div>
      <div class="section fullscreen" id="about-me">
      </div>
    </div>
  );
}

export default App;
