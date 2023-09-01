/* eslint-disable react/prop-types */
import GeneralInfoSection from "./GeneralInfoSection";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";
import "../styles/Resume.css";
import { useState } from "react";

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
  const [isPreviewing, setIsPreviewing] = useState(false);

  const formatDateString = (startDate, endDate) => {
    return startDate && endDate
      ? `${startDate} - ${endDate}`
      : startDate && !endDate
      ? `${startDate} - Present`
      : "";
  };

  const handlePreviewToggle = () => {
    isPreviewing ? setIsPreviewing(false) : setIsPreviewing(true);
  };

  return (
    <div className="resume">
      <button className="modeButton" onClick={handlePreviewToggle}>
        {isPreviewing ? "Edit Resume" : "Preview Resume"}
      </button>
      <GeneralInfoSection
        generalInfo={generalInfo}
        handleGeneralEdit={handleGeneralEdit}
        isPreviewing={isPreviewing}
      />
      <div className="container">
        <h2>Education</h2>
        {!isPreviewing && (
          <button onClick={handleEducationAdd}>Add Education</button>
        )}
      </div>
      {educations.map((education) => {
        return (
          <EducationSection
            key={education.id}
            education={education}
            formatDateString={formatDateString}
            handleEducationEdit={handleEducationEdit}
            handleEducationDelete={handleEducationDelete}
            isPreviewing={isPreviewing}
          />
        );
      })}
      <div className="container">
        <h2>Work Experience</h2>
        {!isPreviewing && (
          <button onClick={handleWorkAdd}>Add Work Experience</button>
        )}
      </div>
      {works.map((work) => {
        return (
          <WorkSection
            key={work.id}
            work={work}
            formatDateString={formatDateString}
            handleWorkEdit={handleWorkEdit}
            handleWorkDelete={handleWorkDelete}
            isPreviewing={isPreviewing}
          />
        );
      })}
    </div>
  );
}

export default Resume;
