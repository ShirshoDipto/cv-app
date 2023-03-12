import React, { Component } from "react";
import "../styles/main.css";
import WorkForm from "./workForm";
import EducationForm from "./educationForm";

export default class CVFORM extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handlePersonalInfo,
      handleWorkInfo,
      handleEducation,
      personalInfo,
      addWorkExperience,
      addEducation,
      deleteWorkExperience,
      deleteEducation,
      workExperiences,
      educations,
    } = this.props;
    return (
      <div className="cv-form-container">
        <form className="personal-info-form">
          <div className="personal-info">
            <h2 className="info-title">Personal Information</h2>
            <div className="names">
              <div className="label-input-group first-name">
                <label htmlFor="first-name">First Name:</label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={personalInfo.firstName}
                  onChange={handlePersonalInfo}
                />
              </div>
              <div className="label-input-group last-name">
                <label htmlFor="last-name">Last Name:</label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={personalInfo.lastName}
                  onChange={handlePersonalInfo}
                />
              </div>
            </div>
            <div className="label-input-group">
              <label htmlFor="person-title">Title:</label>
              <input
                type="text"
                id="person-title"
                name="title"
                value={personalInfo.title}
                onChange={handlePersonalInfo}
              />
            </div>
            <div className="label-input-group">
              <label htmlFor="person-mobile">Mobile:</label>
              <input
                type="text"
                id="person-mobile"
                name="mobile"
                value={personalInfo.mobile}
                onChange={handlePersonalInfo}
              />
            </div>
            <div className="label-input-group">
              <label htmlFor="person-address">Address:</label>
              <input
                type="text"
                id="person-address"
                name="address"
                value={personalInfo.address}
                onChange={handlePersonalInfo}
              />
            </div>
            <div className="label-input-group">
              <label htmlFor="person-email">Email:</label>
              <input
                type="text"
                id="person-email"
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfo}
              />
            </div>
            <div className="label-input-group">
              <label htmlFor="person-description">
                Tell us about yourself:
              </label>
              <textarea
                type="text"
                id="person-description"
                name="description"
                rows="5"
                value={personalInfo.description}
                onChange={handlePersonalInfo}
              ></textarea>
            </div>
          </div>
        </form>
        <form className="work-experience-form">
          <div className="work-experiences">
            <h2 className="info-title">Work Experience</h2>
            {workExperiences.map((experience) => {
              return (
                <WorkForm
                  key={experience.id}
                  experience={experience}
                  handleWorkInfo={handleWorkInfo}
                  deleteWorkExperience={deleteWorkExperience}
                />
              );
            })}
            <button type="button" onClick={addWorkExperience}>
              Add
            </button>
          </div>
        </form>
        <form className="education-form">
          <div className="educations">
            <h2 className="info-title">Education</h2>
            {educations.map((elem) => {
              return (
                <EducationForm
                  key={elem.id}
                  elem={elem}
                  handleEducation={handleEducation}
                  deleteEducation={deleteEducation}
                />
              );
            })}
            <button type="button" onClick={addEducation}>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
