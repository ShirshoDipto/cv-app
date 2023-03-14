import "../styles/main.css";

export default function CVPreview({
  personalInfo,
  workExperiences,
  educations,
}) {
  const workXPList = workExperiences.map((elem) => {
    return (
      <div key={elem.id} className="work-experience">
        <div className="input-vals">
          <div className="input-title">
            {elem.company}, {elem.location}
          </div>
          <div className="input-duration">
            {elem.position} | {elem.from}-{elem.to}
          </div>
        </div>
        <div className="input-description">{elem.description}</div>
      </div>
    );
  })

  const educationList = educations.map((elem) => {
    return (
      <div key={elem.id} className="education">
        <div className="input-vals">
          <div className="input-title">
            {elem.institution}, {elem.location}
          </div>
          <div className="input-duration">
            {elem.degree} | {elem.from}-{elem.to}
          </div>
        </div>
        <div className="input-subject">{elem.subject}</div>
      </div>
    );
  })
  
  return (
    <div className="cv-preview-container">
      <div className="personalinfo-container">
        <div className="cv-name-title">
          <h1 className="cv-name">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <h3 className="cv-title">{personalInfo.title}</h3>
        </div>
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
          {workXPList}
        </div>
        <div className="education-container">
          <div className="title">Education</div>
          {educationList}
        </div>
      </div>
    </div>
  );
}
