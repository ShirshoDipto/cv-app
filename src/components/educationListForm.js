import EducationForm from "./educationForm"

export default function EducationListForm({
  educations,
  handleEducation,
  addEducation,
  deleteEducation
}) {
  const forms = educations.map((elem) => {
    return (
      <EducationForm
        key={elem.id}
        elem={elem}
        handleEducation={handleEducation}
        deleteEducation={deleteEducation}
      />
    );
  });
  return (
    <form className="education-form">
      <div className="educations">
        <h2 className="info-title">Education</h2>
        {forms}
        <button type="button" onClick={addEducation}>
          Add
        </button>
      </div>
    </form>
  );
}
