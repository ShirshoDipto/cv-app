import React, { Component } from "react";

export default class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { elem, handleEducation } = this.props;
    return (
      <div key={elem.id} className="education">
        <div className="label-input-group">
          <label htmlFor="person-institution">Institution:</label>
          <input
            type="text"
            id="person-institution"
            name="institution"
            value={elem.institution}
            onChange={(e) => handleEducation(e, elem.id)}
          />
        </div>
        <div className="label-input-group">
          <label htmlFor="person-edu-location">Location:</label>
          <input
            type="text"
            id="person-edu-company"
            name="location"
            value={elem.location}
            onChange={(e) => handleEducation(e, elem.id)}
          />
        </div>
        <div className="label-input-group">
          <label htmlFor="person-degree">Degree:</label>
          <input
            type="text"
            id="person-degree"
            name="degree"
            value={elem.degree}
            onChange={(e) => handleEducation(e, elem.id)}
          />
        </div>
        <div className="label-input-group first-name">
          <label htmlFor="work-subject">Subject:</label>
          <input
            type="text"
            id="work-subject"
            name="subject"
            value={elem.subject}
            onChange={(e) => handleEducation(e, elem.id)}
          />
        </div>
        <div className="names">
          <div className="label-input-group last-name">
            <label htmlFor="work-from">From:</label>
            <input
              type="text"
              id="work-from"
              name="from"
              value={elem.from}
              onChange={(e) => handleEducation(e, elem.id)}
            />
          </div>
          <div className="label-input-group last-name">
            <label htmlFor="work-to">To:</label>
            <input
              type="text"
              id="work-to"
              name="to"
              value={elem.to}
              onChange={(e) => handleEducation(e, elem.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}
