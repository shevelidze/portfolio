import './App.css';
import Button from './Button';
import Name from './Name';
import Figure from './Figure';

function App() {
  let desktopMovingStuff = [
    <Figure
      skinIndex={1}
      color="white"
      xModifier={-1}
      yModifier={-1}
      xPosition="15%"
      yPosition="25%"
    ></Figure>,
    <Figure
      skinIndex={0}
      color="var(--orange-color)"
      xModifier={1}
      yModifier={-1}
      xPosition="30%"
      yPosition="15%"
    ></Figure>,
    <Figure
      skinIndex={2}
      color="var(--orange-color)"
      xModifier={1}
      yModifier={-1}
      xPosition="20%"
      yPosition="75%"
    ></Figure>,
    <Figure
      skinIndex={3}
      color="white"
      xModifier={-1}
      yModifier={1}
      xPosition="50%"
      yPosition="12%"
    ></Figure>,
    <Figure
      skinIndex={4}
      color="var(--orange-color)"
      xModifier={1}
      yModifier={-1}
      xPosition="70%"
      yPosition="15%"
    ></Figure>,
    <Figure
      skinIndex={3}
      color="var(--orange-color)"
      xModifier={-1}
      yModifier={1}
      xPosition="40%"
      yPosition="80%"
      rotation="50deg"
    ></Figure>,
    <Figure
      skinIndex={4}
      color="white"
      xModifier={1}
      yModifier={1}
      xPosition="65%"
      yPosition="75%"
    ></Figure>,
    <Figure
      skinIndex={2}
      color="var(--orange-color)"
      xModifier={1}
      yModifier={-1}
      xPosition="80%"
      yPosition="80%"
      rotation="20deg"
    ></Figure>,
    <Figure
      skinIndex={3}
      color="white"
      xModifier={1}
      yModifier={1}
      xPosition="85%"
      yPosition="50%"
      rotation="20deg"
    ></Figure>,
    <Figure
      skinIndex={0}
      color="white"
      xModifier={-1}
      yModifier={1}
      xPosition="10%"
      yPosition="50%"
      rotation="20deg"
    ></Figure>
  ];
  return (
    <div className="App">
      <div className="section fullscreen">
        <div class="center">
          <p>Hi there, I'm</p>
          <Name></Name>
          <p>A computer science student from Kiev, Ukraine</p>
          <Button text="About me"></Button>
        </div>
        {desktopMovingStuff}
      </div>
      <div class="section fullscreen" id="about-me">
      </div>
    </div>
  );
}

export default App;
