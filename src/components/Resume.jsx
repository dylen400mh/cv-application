/* eslint-disable react/prop-types */
import GeneralInfoSection from "./GeneralInfoSection";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";
import "../styles/Resume.css";

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
    <div className="resume">
      <GeneralInfoSection
        generalInfo={generalInfo}
        handleGeneralEdit={handleGeneralEdit}
      />
      <h2>Education</h2>
      <button onClick={handleEducationAdd}>Add Education</button>
      {educations.map((education) => {
        return (
          <EducationSection
            key={education.id}
            education={education}
            formatDateString={formatDateString}
            handleEducationEdit={handleEducationEdit}
            handleEducationDelete={handleEducationDelete}
          />
        );
      })}
      <h2>Work Experience</h2>
      <button onClick={handleWorkAdd}>Add Work Experience</button>
      {works.map((work) => {
        return (
          <WorkSection
            key={work.id}
            work={work}
            formatDateString={formatDateString}
            handleWorkEdit={handleWorkEdit}
            handleWorkDelete={handleWorkDelete}
          />
        );
      })}
    </div>
  );
}

export default Resume;
