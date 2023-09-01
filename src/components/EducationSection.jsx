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
      <p>
        <b>{education.degree}</b> - {education.school},{" "}
        {formatDateString(education.startDate, education.endDate)}
      </p>
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
