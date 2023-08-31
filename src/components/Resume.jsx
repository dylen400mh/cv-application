/* eslint-disable react/prop-types */
function Resume({ generalInfo, education }) {
  const educationDateString =
    education.startDate || education.endDate
      ? `${education.startDate} - ${education.endDate}`
      : "";

  return (
    <div>
      <header>
        <h1>{generalInfo.name}</h1>
        <ul>
          <li>{generalInfo.email}</li>
          <li>{generalInfo.phone}</li>
        </ul>
      </header>
      <main>
        <h2>{education.school}</h2>
        <h3>{education.degree}</h3>
        <span>{educationDateString}</span>
      </main>
    </div>
  );
}

export default Resume;
