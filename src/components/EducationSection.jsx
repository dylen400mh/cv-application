/* eslint-disable react/prop-types */
function EducationSection({
  education,
  handleEducationEdit,
  formatDateString,
}) {
  return (
    <main>
      <h2>Education</h2>
      <h3>{education.school}</h3>
      <p>{education.degree}</p>
      <span>{formatDateString(education.startDate, education.endDate)}</span>
      <button onClick={handleEducationEdit}>Edit</button>
    </main>
  );
}

export default EducationSection;
