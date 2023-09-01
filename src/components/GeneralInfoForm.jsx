/* eslint-disable react/prop-types */
import "../styles/GeneralInfoForm.css";

function GeneralInfoForm({ data, handleChange, handleSubmit }) {
  const handleNameChange = (e) => {
    handleChange({ ...data, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    handleChange({ ...data, email: e.target.value });
  };

  const handlePhoneChange = (e) => {
    handleChange({ ...data, phone: e.target.value });
  };

  return (
    <div className="generalInfo">
      <h1>General Info</h1>
      <div className="container">
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          value={data.name}
          onChange={handleNameChange}
        />
      </div>
      <div className="container">
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Email"
          value={data.email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="container">
        <label htmlFor="">Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          value={data.phone}
          onChange={handlePhoneChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default GeneralInfoForm;
