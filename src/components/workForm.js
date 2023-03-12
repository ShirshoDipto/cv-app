import React, { Component } from "react";

export default class WorkForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { experience, handleWorkInfo, deleteWorkExperience } = this.props
    return (
      <div className="work-experience">
        <div className="label-input-group">
          <label htmlFor={"position " + experience.id}>Position:</label>
          <input
            type="text"
            id={"position " + experience.id}
            name="position"
            value={experience.position}
            onChange={(e) => handleWorkInfo(e, experience.id)}
          />
        </div>
        <div className="label-input-group">
          <label htmlFor={"company " + experience.id}>Company:</label>
          <input
            type="text"
            id={"company " + experience.id}
            name="company"
            value={experience.company}
            onChange={(e) => handleWorkInfo(e, experience.id)}
          />
        </div>
        <div className="label-input-group">
          <label htmlFor={"location " + experience.id}>Location:</label>
          <input
            type="text"
            id={"location " + experience.id}
            name="location"
            value={experience.location}
            onChange={(e) => handleWorkInfo(e, experience.id)}
          />
        </div>
        <div className="names">
          <div className="label-input-group first-name">
            <label htmlFor={"from " + experience.id}>From:</label>
            <input
              type="text"
              id={"from " + experience.id}
              name="from"
              value={experience.from}
              onChange={(e) => handleWorkInfo(e, experience.id)}
            />
          </div>
          <div className="label-input-group last-name">
            <label htmlFor={"to " + experience.id}>To:</label>
            <input
              type="text"
              id={"position " + experience.id}
              name="to"
              value={experience.to}
              onChange={(e) => handleWorkInfo(e, experience.id)}
            />
          </div>
        </div>
        <div className="label-input-group">
          <label htmlFor={"description " + experience.id}>Description:</label>
          <textarea
            type="text"
            id={"description " + experience.id}
            name="description"
            rows="5"
            value={experience.description}
            onChange={(e) => handleWorkInfo(e, experience.id)}
          ></textarea>
        </div>
        <button onClick={(e) => deleteWorkExperience(e, experience.id)}>Delete</button>
      </div>
    );
  }
}
