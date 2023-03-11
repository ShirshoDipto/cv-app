import React, { Component } from "react";

export default class WorkForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { experience, handleWorkInfo } = this.props
    return (
      <div className="work-experience">
        <div className="label-input-group">
          <label htmlFor="person-position">Position:</label>
          <input
            type="text"
            id="person-position"
            name="position"
            value={experience.position}
            onChange={(e) => handleWorkInfo(e, experience.id)}
          />
        </div>
        <div className="label-input-group">
          <label htmlFor="person-company">Company:</label>
          <input
            type="text"
            id="person-company"
            name="company"
            value={experience.company}
            onChange={(e) => handleWorkInfo(e, experience.id)}
          />
        </div>
        <div className="label-input-group">
          <label htmlFor="person-work-location">Location:</label>
          <input
            type="text"
            id="person-work-location"
            name="location"
            value={experience.location}
            onChange={(e) => handleWorkInfo(e, experience.id)}
          />
        </div>
        <div className="names">
          <div className="label-input-group first-name">
            <label htmlFor="work-from">From:</label>
            <input
              type="text"
              id="work-from"
              name="from"
              value={experience.from}
              onChange={(e) => handleWorkInfo(e, experience.id)}
            />
          </div>
          <div className="label-input-group last-name">
            <label htmlFor="work-to">To:</label>
            <input
              type="text"
              id="work-to"
              name="to"
              value={experience.to}
              onChange={(e) => handleWorkInfo(e, experience.id)}
            />
          </div>
        </div>
        <div className="label-input-group">
          <label htmlFor="person-work-description">Description:</label>
          <textarea
            type="text"
            id="person-work-description"
            name="description"
            rows="5"
            value={experience.description}
            onChange={(e) => handleWorkInfo(e, experience.id)}
          ></textarea>
        </div>
      </div>
    );
  }
}
