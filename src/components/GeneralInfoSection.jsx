/* eslint-disable react/prop-types */
import "../styles/GeneralInfoSection.css"

function GeneralInfoSection({ generalInfo, handleGeneralEdit }) {
  return (
    <div className="generalInfo">
      <h1>{generalInfo.name}</h1>
      <ul>
        <li>{generalInfo.email}</li>
        <li>{generalInfo.phone}</li>
      </ul>
      <button onClick={handleGeneralEdit}>Edit</button>
    </div>
  );
}

export default GeneralInfoSection;
