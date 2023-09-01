/* eslint-disable react/prop-types */
function EducationSection({
  educations,
  handleEducationEdit,
  formatDateString,
}) {
  // TODO add button to add/edit/delete an education
  return educations.map((education) => {
    return (
      <section key={education.id}>
        <h3>{education.school}</h3>
        <p>{education.degree}</p>
        <span>{formatDateString(education.startDate, education.endDate)}</span>
        <button onClick={handleEducationEdit}>Edit</button>
      </section>
    );
  });
}

export default EducationSection;
