/* eslint-disable react/prop-types */
import "../styles/EducationForm.css";

function EducationForm({ id, data, handleChange, handleDelete, handleSubmit }) {
  const education = data.find((education) => id === education.id);

  const handleSchoolChange = (e) => {
    education.school = e.target.value;

    handleChange([
      ...data.filter((education) => id !== education.id),
      education,
    ]);
  };

  const handleDegreeChange = (e) => {
    education.degree = e.target.value;

    handleChange([
      ...data.filter((education) => id !== education.id),
      education,
    ]);
  };

  const handleStartChange = (e) => {
    education.startDate = e.target.value;

    handleChange([
      ...data.filter((education) => id !== education.id),
      education,
    ]);
  };

  const handleEndChange = (e) => {
    education.endDate = e.target.value;

    handleChange([
      ...data.filter((education) => id !== education.id),
      education,
    ]);
  };

  return (
    <div className="educationForm">
      <h1>Education</h1>
      <div className="container">
        <label htmlFor="">School</label>
        <input
          type="text"
          placeholder="School"
          value={education.school}
          onChange={handleSchoolChange}
        />
      </div>
      <div className="container">
        <label htmlFor="">Degree</label>
        <input
          type="text"
          placeholder="Degree"
          value={education.degree}
          onChange={handleDegreeChange}
        />
      </div>
      <div className="container">
        <label htmlFor="">Start Date</label>
        <input
          type="month"
          value={education.startDate}
          onChange={handleStartChange}
        />
      </div>
      <div className="container">
        <label htmlFor="">End Date</label>
        <input
          type="month"
          value={education.endDate}
          onChange={handleEndChange}
        />
      </div>
      <div className="buttons">
        <button onClick={handleDelete} id={education.id}>
          Delete
        </button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default EducationForm;
