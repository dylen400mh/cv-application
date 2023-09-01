/* eslint-disable react/prop-types */
import "../styles/GeneralInfoSection.css";

function GeneralInfoSection({ generalInfo, handleGeneralEdit, isPreviewing }) {
  return (
    <div className="generalInfo">
      <h1>{generalInfo.name}</h1>
      <ul>
        <li>{generalInfo.email}</li>
        <li>{generalInfo.phone}</li>
      </ul>
      {!isPreviewing && <button onClick={handleGeneralEdit}>Edit</button>}
    </div>
  );
}

export default GeneralInfoSection;
