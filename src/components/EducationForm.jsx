/* eslint-disable react/prop-types */
function EducationForm({ id, data, handleChange, handleSubmit }) {
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

  //TODO this section should have multiple educations, with options to delete or submit. Only show edited education


  return (
    <section>
      <h1>Education</h1>
      <label htmlFor="">School</label>
      <input
        type="text"
        placeholder="School"
        value={education.school}
        onChange={handleSchoolChange}
      />
      <label htmlFor="">Degree</label>
      <input
        type="text"
        placeholder="Degree"
        value={education.degree}
        onChange={handleDegreeChange}
      />
      <label htmlFor="">Start Date</label>
      <input
        type="month"
        value={education.startDate}
        onChange={handleStartChange}
      />
      <label htmlFor="">End Date</label>
      <input
        type="month"
        value={education.endDate}
        onChange={handleEndChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </section>
  );
}

export default EducationForm;
