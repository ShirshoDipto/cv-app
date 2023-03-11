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
        name: "Md Shirsho Dipto Haque",
        title: "Junior Software Developer",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima tempora sequi architecto quidem quos consequatur exercitationem hic cumque nisi odit dicta nam soluta eligendi ad sit adipisci rerum, ratione possimus.",
        mobile: "+88017xxxxxxxx",
        address: "Kushtia, Bangladesh",
        email: "someeamil@gmail.com"
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

    this.handlePersonalChange = this.handlePersonalChange.bind(this)
    this.handleWorkChange = this.handleWorkChange.bind(this)
    this.handleEducationChange = this.handleEducationChange.bind(this)
  }

  handlePersonalChange(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formJson = Object.fromEntries(formData.entries())
    this.setState({
      personalInfo: {
        name: formJson.firstName + " " + formJson.lastName,
        title: formJson.personTitle,
        description: formJson.personDescription,
        mobile: formJson.personMobile,
        address: formJson.personAddress,
        email: formJson.personEmail
      }
    })
  }

  handleEducationChange(e) {
    e.preventDefault()
    console.log("it is working. education. ")
  }

  handleWorkChange(e) {
    e.preventDefault()
    console.log("it is working. work. ")
  }

  render() {
    return (
      <div className="main-container">
        <CVFORM 
          pers={this.handlePersonalChange}
          work={this.handleEducationChange}
          edu={this.handleEducationChange}
        />
        <CVPREVIEW 
          personalInfo={this.state.personalInfo}
          workExperiences={this.state.workExperiences}
          educations={this.state.educations}
          state={this.state}
        />
      </div>
    )
  }
}
