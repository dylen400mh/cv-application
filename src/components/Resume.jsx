/* eslint-disable react/prop-types */
import GeneralInfoSection from "./GeneralInfoSection";
import EducationSection from "./EducationSection";

function Resume({
  generalInfo,
  handleGeneralEdit,
  education,
  handleEducationEdit,
}) {
  const formatDateString = (startDate, endDate) => {
    return startDate && endDate
      ? `${startDate} - ${endDate}`
      : startDate && !endDate
      ? `${startDate} - Present`
      : "";
  };

  return (
    <div>
      <GeneralInfoSection
        generalInfo={generalInfo}
        handleGeneralEdit={handleGeneralEdit}
      />
      <h2>Education</h2>
      {education.map((item) => {
        return (
          <EducationSection
            key={item.id}
            education={item}
            formatDateString={formatDateString}
            handleEducationEdit={handleEducationEdit}
          />
        );
      })}
    </div>
  );
}

export default Resume;
