import "../styles/main.css";
import WorkExperienceForm from "./workExperienceForm";
import EducationListForm from "./educationListForm";
import PersonalInfo from "./personalInfo";

export default function CVForm({
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
}) {
  return (
    <div className="cv-form-container">
      <PersonalInfo
        personalInfo={personalInfo}
        handlePersonalInfo={handlePersonalInfo}
      />
      <WorkExperienceForm
        workExperiences={workExperiences}
        addWorkExperience={addWorkExperience}
        deleteWorkExperience={deleteWorkExperience}
        handleWorkInfo={handleWorkInfo}
      />
      <EducationListForm
        educations={educations}
        handleEducation={handleEducation}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
      />
    </div>
  );
}
