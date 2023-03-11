import React, { Component } from "react"
import { v4 as uuidv4 } from "uuid"
import CVFORM from "./cvForm"
import CVPREVIEW from "./cvPreview"
import "../styles/main.css"

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personalInfo: {
        firstName: "Md Shirsho",
        lastName: "Dipto Haque",
        title: "Junior Software Developer",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima tempora sequi architecto quidem quos consequatur exercitationem hic cumque nisi odit dicta nam soluta eligendi ad sit adipisci rerum, ratione possimus.",
        mobile: "+88017xxxxxxxx",
        address: "Kushtia, Bangladesh",
        email: "someeamil@gmail.com"
      },

      personalTemp: {
        firstName: "Md Shirsho",
        lastName: "Dipto Haque",
        title: "Junior Software Developer",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima tempora sequi architecto quidem quos consequatur exercitationem hic cumque nisi odit dicta nam soluta eligendi ad sit adipisci rerum, ratione possimus.",
        mobile: "+88017xxxxxxxx",
        address: "Kushtia, Bangladesh",
        email: "someeamil@gmail.com"
      },

      workExperience: {
        id: uuidv4(),
        position: "",
        company: "",
        location: "",
        description: "",
        from: "",
        to: ""
      },

      education: {
        id: uuidv4(),
        institution: "",
        location: "",
        degree: "",
        subject: "",
        from: "",
        to: ""
      },

      workExperiences: [
        {
          id: uuidv4(),
          position: "Junior web developer",
          company: "Spotify",
          location: "California",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cum! Illum, voluptates maiores.",
          from: "2010",
          to: "2020"
        },
        {
          id: uuidv4(),
          position: "Programming Teacher",
          company: "Stanford University",
          location: "California",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cum! Illum, voluptates maiores.",
          from: "2021",
          to: "2022" 
        }
      ],

      educations: [
        {
          id: uuidv4(),
          institution: "Kushtia Govt College",
          location: "Kushtia, Bangladesh",
          degree: "HSC",
          subject: "N/A",
          from: "2014",
          to: "2016"
        },
        {
          id: uuidv4(),
          institution: "Shahjalal University of Science And Technology",
          location: "Sylhet",
          degree: "BSc Engineering",
          subject: "Chemical Engineering",
          from: "2017",
          to: "2018"
        },
        {
          id: uuidv4(),
          institution: "Unknown",
          location: "Remote",
          degree: "N/A",
          subject: "N/A",
          from: "2023",
          to: "Present"
        }
      ]
    }
    this.handlePersonalInfo = this.handlePersonalInfo.bind(this) 
    this.handleWorkInfo = this.handleWorkInfo.bind(this)
    this.handleEducation = this.handleEducation.bind(this)
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

  handleEducation(e) {
    this.setState({
      personalInfo: {
        firstName: this.state.personalInfo.firstName,
        lastName: e.target.value,
        title: this.state.personalInfo.lastName,
        description: this.state.personalInfo.description,
        mobile: this.state.personalInfo.mobile,
        address: this.state.personalInfo.address,
        email: this.state.personalInfo.email,
      }
    })
  }

  render() {
    return (
      <div className="main-container">
        <CVFORM 
          handlePersonalInfo={this.handlePersonalInfo}
          handleWorkInfo={this.handleWorkInfo}
          personalInfo={this.state.personalInfo}
          workExperiences={this.state.workExperiences}
          educations={this.state.educations}
          pers={this.handlePersonalChange}
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
