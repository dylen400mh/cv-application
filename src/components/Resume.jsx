/* eslint-disable react/prop-types */
import GeneralInfoSection from "./GeneralInfoSection";
import EducationSection from "./EducationSection";

function Resume({
  generalInfo,
  handleGeneralEdit,
  educations,
  handleEducationEdit,
  handleEducationAdd,
  handleEducationDelete,
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
      {educations.map((education) => {
        return (
          <EducationSection
            key={education.id}
            educations={educations}
            formatDateString={formatDateString}
            handleEducationEdit={handleEducationEdit}
            handleEducationDelete={handleEducationDelete}
          />
        );
      })}
      <button onClick={handleEducationAdd}>Add Education</button>
    </div>
  );
}

export default Resume;
