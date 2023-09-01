/* eslint-disable react/prop-types */
function GeneralInfoSection({ generalInfo, handleGeneralEdit }) {
  return (
    <header>
      <h1>{generalInfo.name}</h1>
      <ul>
        <li>{generalInfo.email}</li>
        <li>{generalInfo.phone}</li>
      </ul>
      <button onClick={handleGeneralEdit}>Edit</button>
    </header>
  );
}

export default GeneralInfoSection;
