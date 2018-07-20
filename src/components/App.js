import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog.js'
import Display from './Display.js'
import piggy from '../porco.png'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentHog: ''
    }
  }


  callbackToGetClickedHog = (clickedHog) => {
    this.setState({currentHog: clickedHog}, ()=>{console.log("AFTER STATE CHANGE:", this.state.currentHog)})
  }

  render() {
    const currentHogObj = hogs.find((hog) => (hog.name === this.state.currentHog))
    return (
      <div id="app" className="App">
        <div className="logo">
          <span className="headerText">Hogwarts</span>
          <div className="TwirlyPig">
            <a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
              <img src={piggy} className="App-logo" alt="piggy" />
            </a>
          </div>
          <span className="normalText">A React App for County Fair Hog Fans</span>
        </div>

         <Nav clickedHogToBe={this.callbackToGetClickedHog} />


         <Display currentHogObj={currentHogObj}/>
      </div>
    )
  }
}

export default App;
