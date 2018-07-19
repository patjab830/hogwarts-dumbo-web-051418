import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog.js'
import Display from './Display.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentHog: ''
    }
  }

  // allHogs(){
  //   // console.log(images);
  //   return (hogs.map(hog => {
  //     const hogName = hog.name
  //     const hogImageURL = require("../hog-imgs/" + hog.name.replace(/ /g, "_").toLowerCase() + ".jpg")
  //     // console.log(hogImageURL);
  //     return <div><Hog name={hogName} imageURL={hogImageURL} getClickedHog={this.callbackToGetClickedHog}/></div>
  //   })
  // )
  // }

  callbackToGetClickedHog = (clickedHog) => {
    this.setState({currentHog: clickedHog}, ()=>{console.log("AFTER STATE CHANGE:", this.state.currentHog)})
  }

  render() {
    const currentHogObj = hogs.find((hog) => (hog.name === this.state.currentHog))
    return (
      <div className="App">

         < Nav clickedHogToBe={this.callbackToGetClickedHog} />


         <Display currentHogObj={currentHogObj}/>
      </div>
    )
  }
}

export default App;
