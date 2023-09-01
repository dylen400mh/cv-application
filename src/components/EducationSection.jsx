/* eslint-disable react/prop-types */
import "../styles/EducationSection.css";

function EducationSection({
  education,
  handleEducationEdit,
  handleEducationDelete,
  formatDateString,
}) {
  return (
    <div className="education" key={education.id}>
      <h3>{education.school}</h3>
      <p className="degree">{education.degree}</p>
      <span className="date">
        {formatDateString(education.startDate, education.endDate)}
      </span>
      <div className="buttons">
        <button onClick={handleEducationEdit} id={education.id}>
          Edit
        </button>
        <button onClick={handleEducationDelete} id={education.id}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default EducationSection;
