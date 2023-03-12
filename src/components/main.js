import React, { Component } from "react"
import { v4 as uuidv4 } from "uuid"
import CVFORM from "./cvForm"
import CVPREVIEW from "./cvPreview"
import data from "../datas/data"
import "../styles/main.css"

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = data

    this.handlePersonalInfo = this.handlePersonalInfo.bind(this) 
    this.handleWorkInfo = this.handleWorkInfo.bind(this)
    this.handleEducation = this.handleEducation.bind(this)
    this.handleAddWork = this.handleAddWork.bind(this)
    this.handleAddEducation = this.handleAddEducation.bind(this)
    this.handleDeleteWork = this.handleDeleteWork.bind(this)
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this)
  }

  handlePersonalInfo(e) {
    let newPersonalInfo = {}
    for (let key in this.state.personalInfo) {
      if (e.target.getAttribute("name") !== key) {
        newPersonalInfo[key] = this.state.personalInfo[key]
      } else {
        newPersonalInfo[key] = e.target.value
      }
    }
    this.setState({
      personalInfo: newPersonalInfo
    })
  }

  handleWorkInfo(e, workId) {
    const newWorkExperiences = []
    this.state.workExperiences.forEach(experience => {
      if (experience.id !== workId) {
        newWorkExperiences.push(experience)
      } else {
        let newInfo = {}
        for (let key in experience) {
          if (e.target.getAttribute("name") !== key) {
            newInfo[key] = experience[key]
          } else {
            newInfo[key] = e.target.value
          }
        }
        newWorkExperiences.push(newInfo)
      }
      this.setState({
        workExperiences: newWorkExperiences
      })

    })
  }

  handleEducation(e, educationId) {
    const newEducations = []
    this.state.educations.forEach(education => {
      if (education.id !== educationId) {
        newEducations.push(education)
      } else {
        let newInfo = {}
        for (let key in education) {
          if (e.target.getAttribute("name") !== key) {
            newInfo[key] = education[key]
          } else {
            newInfo[key] = e.target.value
          }
        }
        newEducations.push(newInfo)
      }
      this.setState({
        educations: newEducations
      })

    })
  }

  handleAddWork(e) {
    const newWork = {
      id: uuidv4(),
      position: "",
      company: "",
      location: "",
      description: "",
      from: "",
      to: "",
    }

    this.setState({
      workExperiences: this.state.workExperiences.concat(newWork)
    })
  }

  handleAddEducation(e) {
    const newEducation = {
      id: uuidv4(),
      institution: "",
      location: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    }

    this.setState({
      educations: this.state.educations.concat(newEducation)
    })
  }

  handleDeleteWork(e, workId) {
    const newWorkExperiences = this.state.workExperiences.filter((experience) => {
      return experience.id !== workId
    })

    this.setState({
      workExperiences: newWorkExperiences
    })
  }

  handleDeleteEducation(e, educationId) {
    const newEducations = this.state.educations.filter((education) => {
      return education.id !== educationId
    })

    this.setState({
      educations: newEducations
    })
  }

  render() {
    return (
      <div className="main-container">
        <CVFORM 
          handlePersonalInfo={this.handlePersonalInfo}
          handleWorkInfo={this.handleWorkInfo}
          handleEducation={this.handleEducation}
          personalInfo={this.state.personalInfo}
          workExperiences={this.state.workExperiences}
          educations={this.state.educations}
          addWorkExperience={this.handleAddWork}
          addEducation={this.handleAddEducation}
          deleteEducation={this.handleDeleteEducation}
          deleteWorkExperience={this.handleDeleteWork}
        />
        <CVPREVIEW 
          personalInfo={this.state.personalInfo}
          workExperiences={this.state.workExperiences}
          educations={this.state.educations}
        />
      </div>
    )
  }
}
