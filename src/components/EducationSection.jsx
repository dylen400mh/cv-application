/* eslint-disable react/prop-types */
function EducationSection({
  education,
  handleEducationEdit,
  handleEducationDelete,
  formatDateString,
}) {
  return (
    <section key={education.id}>
      <h3>{education.school}</h3>
      <p>{education.degree}</p>
      <span>{formatDateString(education.startDate, education.endDate)}</span>
      <button onClick={handleEducationEdit} id={education.id}>
        Edit
      </button>
      <button onClick={handleEducationDelete} id={education.id}>
        Delete
      </button>
    </section>
  );
}

export default EducationSection;
