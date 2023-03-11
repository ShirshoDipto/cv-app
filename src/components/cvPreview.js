import React, { Component } from "react"
import "../styles/main.css"

export default class CVPREVIEW extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { personalInfo, workExperience, education } = this.props
    return (
      <div className="cv-preview-container">
        <div className="personalinfo-container">
          <h1 className="cv-name">{personalInfo.name}</h1>
          <div className="contact-info">
            <div className="address">{personalInfo.address}</div>
            <div className="phone">{personalInfo.mobile}</div>
            <div className="email">{personalInfo.email}</div>
          </div>
        </div>
        <div className="other-info-container">
          <div className="description-container">
            <div className="title">Description</div>
            <div className="description">{personalInfo.description}</div>
          </div>
          <div className="workexperience-container">
            <div className="title">Work Experience</div>
            {
              workExperience.map(elem => {
                return (
                  <div key={elem.id} className="work-experience">
                    <div className="input-vals">
                      <div className="input-title">{elem.company}, {elem.location}</div>
                      <div className="input-duration">{elem.position} | {elem.from}-{elem.to}</div>
                    </div>
                    <div className="input-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cum! Illum, voluptates maiores. 
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="education-container">
            <div className="title">Education</div>
            {
              education.map(elem => {
                return (
                  <div key={elem.id} className="education">
                    <div className="input-vals">
                      <div className="input-title">{elem.institution}, {elem.location}</div>
                      <div className="input-duration">{elem.degree} | {elem.from}-{elem.to}</div>
                    </div>
                    <div className="input-subject">{elem.subject}</div>
                    <div className="input-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cum! Illum, voluptates maiores. 
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}