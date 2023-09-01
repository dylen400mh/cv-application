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

  const [resumeVisible, setResumeVisible] = useState(true);

  const handleGeneralEdit = () => {
    setGeneralInfoVisible(true);
    setResumeVisible(false);
  };

  const handleGeneralSubmit = () => {
    setGeneralInfoVisible(false);
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
      <EducationForm data={education} handleChange={setEducation} />
      {resumeVisible && (
        <Resume
          generalInfo={generalInfo}
          education={education}
          handleGeneralEdit={handleGeneralEdit}
        />
      )}
    </>
  );
}

export default App;
