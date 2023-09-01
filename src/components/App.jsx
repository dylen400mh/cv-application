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

  // keeps track of ID of component to modify
  const [selectedId, setSelectedId] = useState(null);

  const handleGeneralEdit = () => {
    setGeneralInfoVisible(true);
  };

  const handleGeneralSubmit = () => {
    setGeneralInfoVisible(false);
  };

  const handleEducationEdit = (e) => {
    setSelectedId(e.target.id);
    setEducationVisible(true);
  };

  const handleEducationSubmit = () => {
    setEducationVisible(false);
  };

  const handleEducationAdd = () => {
    const newId = uuidv4();
    setSelectedId(newId);

    setEducations([
      ...educations,
      { school: "", degree: "", startDate: "", endDate: "", id: newId },
    ]);
    setEducationVisible(true);
  };

  const handleEducationDelete = (e) => {
    console.log(e.target);
    setEducations(
      educations.filter((education) => education.id !== e.target.id)
    );

    // If education was deleted while editing, update display state
    if (educationVisible) setEducationVisible(false);
  };

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
            education.id === selectedId && (
              <EducationForm
                key={education.id}
                id={education.id}
                data={educations}
                handleChange={setEducations}
                handleDelete={handleEducationDelete}
                handleSubmit={handleEducationSubmit}
              />
            )
          );
        })
      ) : (
        <Resume
          generalInfo={generalInfo}
          educations={educations}
          handleGeneralEdit={handleGeneralEdit}
          handleEducationEdit={handleEducationEdit}
          handleEducationAdd={handleEducationAdd}
          handleEducationDelete={handleEducationDelete}
        />
      )}
    </>
  );
}

export default App;
