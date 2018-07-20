import React from 'react'

export default class Display extends React.Component {
  render() {
    const currentHogObj = this.props.currentHogObj

    if (currentHogObj !== undefined) {
      return (<div id="fullDisplay">
          <p>Name: {currentHogObj.name}</p>
          <p>Specialty: {currentHogObj.specialty}</p>
          <p>Greased: {currentHogObj.greased ? "yes" : "no"}</p>
          <p>Weight: {currentHogObj['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>Highest Medal: {currentHogObj['highest medal achieved']}</p>
        </div>
      )
    } else {
      return <div></div>
    }

  }
}
