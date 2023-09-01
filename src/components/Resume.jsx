/* eslint-disable react/prop-types */
import GeneralInfoSection from "./GeneralInfoSection";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";

function Resume({
  generalInfo,
  handleGeneralEdit,
  educations,
  works,
  handleEducationEdit,
  handleEducationAdd,
  handleEducationDelete,
  handleWorkEdit,
  handleWorkAdd,
  handleWorkDelete,
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
      <h2>Work Experience</h2>
      {works.map((work) => {
        return (
          <WorkSection
            key={work.id}
            works={works}
            formatDateString={formatDateString}
            handleWorkEdit={handleWorkEdit}
            handleWorkDelete={handleWorkDelete}
          />
        );
      })}
      <button onClick={handleWorkAdd}>Add Work Experience</button>
    </div>
  );
}

export default Resume;
