/* eslint-disable react/prop-types */
function Resume({ generalInfo, handleGeneralEdit, education }) {
  const formatDateString = (startDate, endDate) => {
    return startDate && endDate
      ? `${startDate} - ${endDate}`
      : startDate && !endDate
      ? `${startDate} - Present`
      : "";
  };

  return (
    <div>
      <header>
        <h1>{generalInfo.name}</h1>
        <ul>
          <li>{generalInfo.email}</li>
          <li>{generalInfo.phone}</li>
        </ul>
        <button onClick={handleGeneralEdit}>Edit</button>
      </header>
      <main>
        <h2>Education</h2>
        <h3>{education.school}</h3>
        <p>{education.degree}</p>
        <span>{formatDateString(education.startDate, education.endDate)}</span>
      </main>
    </div>
  );
}

export default Resume;
