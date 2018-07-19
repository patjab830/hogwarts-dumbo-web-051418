import React from 'react'


export default class Hog extends React.Component{



  hogClickHandler = (e) => {
    const hogName = e.target.dataset.name
    this.props.getClickedHog(hogName)
  }

  render(){
    return (
      <div data-name={this.props.name} onClick={this.hogClickHandler}>
        {this.props.name}
        <br/>
        <img src={this.props.imageURL} data-name={this.props.name} width="80" height="80"/>
      </div>

      )
  }

}
