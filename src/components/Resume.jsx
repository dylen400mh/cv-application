/* eslint-disable react/prop-types */
import GeneralInfoSection from "./GeneralInfoSection";
import EducationSection from "./EducationSection";

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
      <GeneralInfoSection
        generalInfo={generalInfo}
        handleGeneralEdit={handleGeneralEdit}
      />
      <EducationSection
        education={education}
        formatDateString={formatDateString}
      />
    </div>
  );
}

export default Resume;
