import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CVForm from "./cvForm";
import CVPreview from "./cvPreview";
import data from "../datas/data";
import "../styles/main.css";

export default function Main() {
  const [personalInfo, setPersonalInfo] = useState(data.personalInfo);
  const [workExperiences, setWorkExperiences] = useState(data.workExperiences);
  const [educations, setEducations] = useState(data.educations);

  function handlePersonalInfo(e) {
    let newPersonalInfo = {};
    for (let key in personalInfo) {
      if (e.target.getAttribute("name") !== key) {
        newPersonalInfo[key] = personalInfo[key];
      } else {
        newPersonalInfo[key] = e.target.value;
      }
    }
    setPersonalInfo(newPersonalInfo);
  }

  function handleWorkInfo(e, workId) {
    const newWorkExperiences = [];
    workExperiences.forEach((experience) => {
      if (experience.id !== workId) {
        newWorkExperiences.push(experience);
      } else {
        let newInfo = {};
        for (let key in experience) {
          if (e.target.getAttribute("name") !== key) {
            newInfo[key] = experience[key];
          } else {
            newInfo[key] = e.target.value;
          }
        }
        newWorkExperiences.push(newInfo);
      }
      setWorkExperiences(newWorkExperiences);
    });
  }

  function handleEducation(e, educationId) {
    const newEducations = [];
    educations.forEach((education) => {
      if (education.id !== educationId) {
        newEducations.push(education);
      } else {
        let newInfo = {};
        for (let key in education) {
          if (e.target.getAttribute("name") !== key) {
            newInfo[key] = education[key];
          } else {
            newInfo[key] = e.target.value;
          }
        }
        newEducations.push(newInfo);
      }
      setEducations(newEducations);
    });
  }

  function handleAddWork(e) {
    const newWork = {
      id: uuidv4(),
      position: "",
      company: "",
      location: "",
      description: "",
      from: "",
      to: "",
    };

    setWorkExperiences(workExperiences.concat(newWork));
  }

  function handleAddEducation(e) {
    const newEducation = {
      id: uuidv4(),
      institution: "",
      location: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    };

    setEducations(educations.concat(newEducation));
  }

  function handleDeleteWork(e, workId) {
    const newWorkExperiences = workExperiences.filter((experience) => {
      return experience.id !== workId;
    });

    setWorkExperiences(newWorkExperiences);
  }

  function handleDeleteEducation(e, educationId) {
    const newEducations = educations.filter((education) => {
      return education.id !== educationId;
    });

    setEducations(newEducations);
  }
  return (
    <div className="main-container">
      <CVForm
        handlePersonalInfo={handlePersonalInfo}
        handleWorkInfo={handleWorkInfo}
        handleEducation={handleEducation}
        personalInfo={personalInfo}
        workExperiences={workExperiences}
        educations={educations}
        addWorkExperience={handleAddWork}
        addEducation={handleAddEducation}
        deleteEducation={handleDeleteEducation}
        deleteWorkExperience={handleDeleteWork}
      />
      <CVPreview
        personalInfo={personalInfo}
        workExperiences={workExperiences}
        educations={educations}
      />
    </div>
  );
}
