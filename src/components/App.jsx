import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "../styles/App.css";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationForm from "./EducationForm";
import WorkForm from "./WorkForm";
import Resume from "./Resume";

// TODO add option to preview (removes buttons from resume component)

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

  const [works, setWorks] = useState([
    {
      company: "Google",
      title: "Software Engineer",
      responsibilities: "Wrote code!",
      startDate: "2018-01",
      endDate: "",
      id: uuidv4(),
    },
  ]);

  const [generalInfoVisible, setGeneralInfoVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);

  // keeps track of ID of component to modify
  const [selectedId, setSelectedId] = useState(null);

  // GENERAL INFO HANDLERS
  const handleGeneralEdit = () => {
    setGeneralInfoVisible(true);
  };

  const handleGeneralSubmit = () => {
    setGeneralInfoVisible(false);
  };

  // EDUCATION HANDLERS
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
      {
        school: "",
        degree: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
        id: newId,
      },
    ]);
    setEducationVisible(true);
  };

  const handleEducationDelete = (e) => {
    setEducations(
      educations.filter((education) => education.id !== e.target.id)
    );

    // If education was deleted while editing, update display state
    if (educationVisible) setEducationVisible(false);
  };

  // WORK HANDLERS
  const handleWorkEdit = (e) => {
    setSelectedId(e.target.id);
    setWorkVisible(true);
  };

  const handleWorkSubmit = () => {
    setWorkVisible(false);
  };

  const handleWorkAdd = () => {
    const newId = uuidv4();
    setSelectedId(newId);

    setWorks([
      ...works,
      {
        company: "",
        title: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
        id: newId,
      },
    ]);
    setWorkVisible(true);
  };

  const handleWorkDelete = (e) => {
    setWorks(works.filter((work) => work.id !== e.target.id));

    // If work was deleted while editing, update display state
    if (workVisible) setWorkVisible(false);
  };

  return (
    <div className="app">
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
      ) : workVisible ? (
        works.map((work) => {
          return (
            work.id === selectedId && (
              <WorkForm
                key={work.id}
                id={work.id}
                data={works}
                handleChange={setWorks}
                handleDelete={handleWorkDelete}
                handleSubmit={handleWorkSubmit}
              />
            )
          );
        })
      ) : (
        <Resume
          generalInfo={generalInfo}
          educations={educations}
          works={works}
          handleGeneralEdit={handleGeneralEdit}
          handleEducationEdit={handleEducationEdit}
          handleEducationAdd={handleEducationAdd}
          handleEducationDelete={handleEducationDelete}
          handleWorkEdit={handleWorkEdit}
          handleWorkAdd={handleWorkAdd}
          handleWorkDelete={handleWorkDelete}
        />
      )}
    </div>
  );
}

export default App;
