import logo from './logo.svg';
import React from 'react'
import './App.css';
import Timer from './Timer'
import Button from './Button'
import Number from './Number'


class App extends React.Component {

  state = {
    time: 0
  }

  createNumber = () => {
    return [0,1,2,3,4,5,6,7,8,9].map(ele => {
      return <Number num={ele}/>
    })
  }

  render(){

    return (
      <div className="App">
        <h1> Simple Timer App </h1>
        <Timer time = {this.state.time}/>
        <div>
          {this.createNumber()}
        </div>
        <Button action = "Start"/>
        <Button action = "Pause"/>
      </div>
    );
  }
}

export default App;
