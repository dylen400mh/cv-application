import { useState } from "react";
import "../styles/App.css";
import GeneralInfo from "./GeneralInfo";
import Resume from "./Resume";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <GeneralInfo data={generalInfo} handleChange={setGeneralInfo}/>
      <Resume generalInfo={generalInfo} />
    </>
  );
}

export default App;
