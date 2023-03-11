import React, { Component } from "react"

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header-container">
        <h1 className="header-title">CV CREATOR</h1>
      </div>
    )
  }
}