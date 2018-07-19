import piggy from '../porco.png'
import React from 'react'
import hogs from '../porkers_data';
import Hog from './Hog.js'



class Nav extends React.Component {
	allHogs(){
		// console.log(images);
		return (hogs.map(hog => {
			const hogName = hog.name
			const hogImageURL = require("../hog-imgs/" + hog.name.replace(/ /g, "_").toLowerCase() + ".jpg")
			// console.log(hogImageURL);
			return <div><Hog name={hogName} imageURL={hogImageURL} getClickedHog={this.props.clickedHogToBe}/></div>
		}))
	}


	render() {

		return (
			<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
			<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
			<img src={piggy} className="App-logo" alt="piggy" />
			</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
			{this.allHogs()}
			</div>
			</div>
		)
	}

}



export default Nav
