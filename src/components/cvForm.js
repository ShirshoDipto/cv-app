import React, { Component } from "react"
import "../styles/main.css"

export default class CVFORM extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pers, work, edu } = this.props
    console.log(this.props)
    return (
      <div className="cv-form-container">
        <form className="personal-info-form" onSubmit={pers}>
          <div className="personal-info">
            <h2 className="info-title">Personal Information</h2>
            <div className="names">
              <div className="label-input-group first-name">
                <label htmlFor="first-name">First Name:</label>
                <input type="text" id="first-name" name="firstName"/>
              </div>
              <div className="label-input-group last-name">
                <label htmlFor="last-name">Last Name:</label>
                <input type="text" id="last-name" name="lastName"/>
              </div>
            </div>
            <div className="label-input-group">
              <label htmlFor="person-title">Title:</label>
              <input type="text" id="person-title" name="personTitle"/>
            </div>
            <div className="label-input-group">
              <label htmlFor="person-mobile">Mobile:</label>
              <input type="text" id="person-mobile" name="personMobile"/>
            </div>
            <div className="label-input-group">
              <label htmlFor="person-address">Address:</label>
              <input type="text" id="person-address" name="personAddress"/>
            </div>
            <div className="label-input-group">
              <label htmlFor="person-email">Email:</label>
              <input type="text" id="person-email" name="personEmail"/>
            </div>
            <div className="label-input-group">
              <label htmlFor="person-description">Tell us about yourself:</label>
              <textarea type="text" id="person-description" name="personDescription" rows="5"></textarea>
            </div>
            <button type="submit">Save</button>
          </div>
        </form>
        <form className="work-experience-form" onSubmit={work}>
          <div className="work-experiences">
            <h2 className="info-title">Work Experience</h2>
            <div className="work-experience">
              <div className="label-input-group">
                <label htmlFor="person-position">Position:</label>
                <input type="text" id="person-position" name="personPosition"/>
              </div>
              <div className="label-input-group">
                <label htmlFor="person-company">Company:</label>
                <input type="text" id="person-company" name="personCompany"/>
              </div>
              <div className="label-input-group">
                <label htmlFor="person-work-location">Location:</label>
                <input type="text" id="person-work-location" name="personWorkLocation"/>
              </div>
              <div className="names">
                <div className="label-input-group first-name">
                  <label htmlFor="work-from">From:</label>
                  <input type="text" id="work-from" name="workFrom"/>
                </div>
                <div className="label-input-group last-name">
                  <label htmlFor="work-to">To:</label>
                  <input type="text" id="work-to" name="workTo"/>
                </div>
              </div>
              <div className="label-input-group">
                <label htmlFor="person-work-description">Description:</label>
                <textarea type="text" id="person-work-description" name="personWorkDescription" rows="5"></textarea>
              </div>
            </div>
            <button type="submit">Save</button>
          </div>
        </form>
        <form className="education-form" onSubmit={edu}>
          <div className="educations">
            <h2 className="info-title">Education</h2>
            <div className="education">
              <div className="label-input-group">
                <label htmlFor="person-institution">Institution:</label>
                <input type="text" id="person-institution" name="personInstitution"/>
              </div>
              <div className="label-input-group">
                <label htmlFor="person-edu-location">Location:</label>
                <input type="text" id="person-edu-company" name="personEduCompany"/>
              </div>
              <div className="label-input-group">
                <label htmlFor="person-degree">Degree:</label>
                <input type="text" id="person-degree" name="personDegree"/>
              </div>
              <div className="label-input-group first-name">
                <label htmlFor="work-subject">Subject:</label>
                <input type="text" id="work-subject" name="workSubject"/>
              </div>
              <div className="names">
                <div className="label-input-group last-name">
                  <label htmlFor="work-from">From:</label>
                  <input type="text" id="work-from" name="workFrom"/>
                </div>
                <div className="label-input-group last-name">
                  <label htmlFor="work-to">To:</label>
                  <input type="text" id="work-to" name="workTo"/>
                </div>
              </div>
            </div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
