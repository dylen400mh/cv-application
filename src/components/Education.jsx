function Education({ data, handleChange }) {
  const handleSchoolChange = (e) => {
    handleChange({ ...data, school: e.target.value });
  };

  const handleDegreeChange = (e) => {
    handleChange({ ...data, degree: e.target.value });
  };

  const handleStartChange = (e) => {
    handleChange({ ...data, startDate: e.target.value });
  };

  const handleEndChange = (e) => {
    handleChange({ ...data, endDate: e.target.value });
  };

  return (
    <section>
      <h1>Education</h1>
      <label htmlFor="">School</label>
      <input type="text" placeholder="School" onChange={handleSchoolChange} />
      <label htmlFor="">Degree</label>
      <input type="text" placeholder="Degree" onChange={handleDegreeChange} />
      <label htmlFor="">Start Date</label>
      <input type="month" onChange={handleStartChange} />
      <label htmlFor="">End Date</label>
      <input type="month" onChange={handleEndChange} />
    </section>
  );
}

export default Education;
