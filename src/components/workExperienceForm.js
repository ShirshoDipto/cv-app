import WorkForm from "./workForm"

export default function WorkExperienceForm({
  workExperiences,
  addWorkExperience,
  deleteWorkExperience,
  handleWorkInfo,
}) {
  const forms = workExperiences.map((experience) => {
    return (
      <WorkForm
        key={experience.id}
        experience={experience}
        handleWorkInfo={handleWorkInfo}
        deleteWorkExperience={deleteWorkExperience}
      />
    );
  })
  return (
    <form className="work-experience-form">
      <div className="work-experiences">
        <h2 className="info-title">Work Experience</h2>
        {forms}
        <button type="button" onClick={addWorkExperience}>
          Add
        </button>
      </div>
    </form>
  );
}
