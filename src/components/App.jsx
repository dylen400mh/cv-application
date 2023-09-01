import { useState } from "react";
import "../styles/App.css";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationForm from "./EducationForm";
import Resume from "./Resume";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  const [education, setEducation] = useState({
    school: "Harvard University",
    degree: "Bachelor of Arts",
    startDate: "",
    endDate: "",
  });

  const [generalInfoVisible, setGeneralInfoVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);

  const [resumeVisible, setResumeVisible] = useState(true);

  const handleGeneralEdit = () => {
    setGeneralInfoVisible(true);
    setResumeVisible(false);
  };

  const handleGeneralSubmit = () => {
    setGeneralInfoVisible(false);
    setResumeVisible(true);
  };

  const handleEducationEdit = () => {
    setEducationVisible(true);
    setResumeVisible(false);
  };

  const handleEducationSubmit = () => {
    setEducationVisible(false);
    setResumeVisible(true);
  };

  return (
    <>
      {generalInfoVisible && (
        <GeneralInfoForm
          data={generalInfo}
          handleChange={setGeneralInfo}
          handleSubmit={handleGeneralSubmit}
        />
      )}
      {educationVisible && (
        <EducationForm
          data={education}
          handleChange={setEducation}
          handleSubmit={handleEducationSubmit}
        />
      )}
      {resumeVisible && (
        <Resume
          generalInfo={generalInfo}
          education={education}
          handleGeneralEdit={handleGeneralEdit}
          handleEducationEdit={handleEducationEdit}
        />
      )}
    </>
  );
}

export default App;
