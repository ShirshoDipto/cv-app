export default function PersonalInfo({ personalInfo, handlePersonalInfo }) {
  
  return (
    <form className="personal-info-form">
      <div className="personal-info">
        <h2 className="info-title">Personal Information</h2>
        <div className="names">
          <div className="label-input-group first-name">
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={personalInfo.firstName}
              onChange={handlePersonalInfo}
            />
          </div>
          <div className="label-input-group last-name">
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={personalInfo.lastName}
              onChange={handlePersonalInfo}
            />
          </div>
        </div>
        <div className="label-input-group">
          <label htmlFor="person-title">Title:</label>
          <input
            type="text"
            id="person-title"
            name="title"
            value={personalInfo.title}
            onChange={handlePersonalInfo}
          />
        </div>
        <div className="label-input-group">
          <label htmlFor="person-mobile">Mobile:</label>
          <input
            type="text"
            id="person-mobile"
            name="mobile"
            value={personalInfo.mobile}
            onChange={handlePersonalInfo}
          />
        </div>
        <div className="label-input-group">
          <label htmlFor="person-address">Address:</label>
          <input
            type="text"
            id="person-address"
            name="address"
            value={personalInfo.address}
            onChange={handlePersonalInfo}
          />
        </div>
        <div className="label-input-group">
          <label htmlFor="person-email">Email:</label>
          <input
            type="text"
            id="person-email"
            name="email"
            value={personalInfo.email}
            onChange={handlePersonalInfo}
          />
        </div>
        <div className="label-input-group">
          <label htmlFor="person-description">Tell us about yourself:</label>
          <textarea
            type="text"
            id="person-description"
            name="description"
            rows="5"
            value={personalInfo.description}
            onChange={handlePersonalInfo}
          ></textarea>
        </div>
      </div>
    </form>
  );
}
