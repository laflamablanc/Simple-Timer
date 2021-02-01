import logo from './logo.svg';
import './App.css';
import Timer from './Timer'
import Button from './Button'
import Number from './Number'


function App() {
  return (
    <div className="App">
      <h1> Our Timer App </h1>
      <Timer/>
      <div>
        <Number/>
        <Number/>
        <Number/>
        <Number/>
        <Number/>
        <Number/>
        <Number/>
        <Number/>
        <Number/>
        <Number/>
      </div>
      <Button/>
      <Button/>
    </div>
  );
}

export default App;
