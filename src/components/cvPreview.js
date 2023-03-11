import React, { Component } from "react"
import "../styles/main.css"

export default class CVPREVIEW extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { personalInfo, workExperiences, educations } = this.props
    return (
      <div className="cv-preview-container">
        <div className="personalinfo-container">
          <h1 className="cv-name">{personalInfo.firstName} {personalInfo.lastName}</h1>
          <h3 className="cv-title">{personalInfo.title}</h3>
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
              workExperiences.map(elem => {
                return (
                  <div key={elem.id} className="work-experience">
                    <div className="input-vals">
                      <div className="input-title">{elem.company}, {elem.location}</div>
                      <div className="input-duration">{elem.position} | {elem.from}-{elem.to}</div>
                    </div>
                    <div className="input-description">{elem.description}</div>
                  </div>
                )
              })
            }
          </div>
          <div className="education-container">
            <div className="title">Education</div>
            {
              educations.map(elem => {
                return (
                  <div key={elem.id} className="education">
                    <div className="input-vals">
                      <div className="input-title">{elem.institution}, {elem.location}</div>
                      <div className="input-duration">{elem.degree} | {elem.from}-{elem.to}</div>
                    </div>
                    <div className="input-subject">{elem.subject}</div>
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