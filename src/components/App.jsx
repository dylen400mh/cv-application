import { v4 as uuidv4 } from "uuid";
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

  const [educations, setEducations] = useState([
    {
      school: "Harvard University",
      degree: "Bachelor of Arts",
      startDate: "2023-01",
      endDate: "",
      id: uuidv4(),
    },
  ]);

  const [generalInfoVisible, setGeneralInfoVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);

  const handleGeneralEdit = () => {
    setGeneralInfoVisible(true);
  };

  const handleGeneralSubmit = () => {
    setGeneralInfoVisible(false);
  };

  const handleEducationEdit = () => {
    setEducationVisible(true);
  };

  const handleEducationSubmit = () => {
    setEducationVisible(false);
  };

  // TODO only ensure the one edited education is rendered

  return (
    <>
      {generalInfoVisible ? (
        <GeneralInfoForm
          data={generalInfo}
          handleChange={setGeneralInfo}
          handleSubmit={handleGeneralSubmit}
        />
      ) : educationVisible ? (
        educations.map((education) => {
          return (
            <EducationForm
              key={education.id}
              id={education.id}
              data={educations}
              handleChange={setEducations}
              handleSubmit={handleEducationSubmit}
            />
          );
        })
      ) : (
        <Resume
          generalInfo={generalInfo}
          educations={educations}
          handleGeneralEdit={handleGeneralEdit}
          handleEducationEdit={handleEducationEdit}
        />
      )}
    </>
  );
}

export default App;
