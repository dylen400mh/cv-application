/* eslint-disable react/prop-types */
import GeneralInfoSection from "./GeneralInfoSection";

function Resume({ generalInfo, handleGeneralEdit, education }) {
  const formatDateString = (startDate, endDate) => {
    return startDate && endDate
      ? `${startDate} - ${endDate}`
      : startDate && !endDate
      ? `${startDate} - Present`
      : "";
  };

  // TODO add button to add/edit/delete an education

  return (
    <div>
      <GeneralInfoSection generalInfo={generalInfo} handleGeneralEdit={handleGeneralEdit}/>
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
