import { useState } from "react";
import "../styles/App.css";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
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

  return (
    <>
      <GeneralInfo data={generalInfo} handleChange={setGeneralInfo} />
      <Education data={education} handleChange={setEducation} />
      <Resume generalInfo={generalInfo} education={education} />
    </>
  );
}

export default App;
