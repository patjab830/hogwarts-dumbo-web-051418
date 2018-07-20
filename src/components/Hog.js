import React from 'react'


export default class Hog extends React.Component{
  hogClickHandler = (e) => {
    const hogName = e.target.dataset.name
    this.props.getClickedHog(hogName)
  }

  render(){
    return (
      <div data-name={this.props.name} onClick={this.hogClickHandler} className="ui grid container ">
        <img src={this.props.imageURL} data-name={this.props.name} alt="Picture of {this.props.name} " width="*" height="40"/>
        {this.props.name}
      </div>


      )
  }

}
