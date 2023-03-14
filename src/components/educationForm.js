export default function EducationForm({
  elem,
  handleEducation,
  deleteEducation,
}) {
  return (
    <div className="education">
      <div className="label-input-group">
        <label htmlFor={"institution " + elem.id}>Institution:</label>
        <input
          type="text"
          id={"institution " + elem.id}
          name="institution"
          value={elem.institution}
          onChange={(e) => handleEducation(e, elem.id)}
        />
      </div>
      <div className="label-input-group">
        <label htmlFor={"location " + elem.id}>Location:</label>
        <input
          type="text"
          id={"location " + elem.id}
          name="location"
          value={elem.location}
          onChange={(e) => handleEducation(e, elem.id)}
        />
      </div>
      <div className="label-input-group">
        <label htmlFor={"degree " + elem.id}>Degree:</label>
        <input
          type="text"
          id={"degree " + elem.id}
          name="degree"
          value={elem.degree}
          onChange={(e) => handleEducation(e, elem.id)}
        />
      </div>
      <div className="label-input-group first-name">
        <label htmlFor={"subject " + elem.id}>Subject:</label>
        <input
          type="text"
          id={"subject " + elem.id}
          name="subject"
          value={elem.subject}
          onChange={(e) => handleEducation(e, elem.id)}
        />
      </div>
      <div className="names">
        <div className="label-input-group last-name">
          <label htmlFor={"from " + elem.id}>From:</label>
          <input
            type="text"
            id={"from " + elem.id}
            name="from"
            value={elem.from}
            onChange={(e) => handleEducation(e, elem.id)}
          />
        </div>
        <div className="label-input-group last-name">
          <label htmlFor={"to " + elem.id}>To:</label>
          <input
            type="text"
            id={"to " + elem.id}
            name="to"
            value={elem.to}
            onChange={(e) => handleEducation(e, elem.id)}
          />
        </div>
      </div>
      <button onClick={(e) => deleteEducation(e, elem.id)}>Delete</button>
    </div>
  );
}
