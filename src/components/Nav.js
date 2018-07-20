
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
			return <Hog name={hogName} imageURL={hogImageURL} getClickedHog={this.props.clickedHogToBe}/>
		}))
	}


	render() {

		return (
			<div id="fullNav">
				{this.allHogs()}
			</div>
		)
	}

}



export default Nav
