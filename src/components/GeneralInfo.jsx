/* eslint-disable react/prop-types */
function GeneralInfo({ data, handleChange }) {
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
    <section>
      <h1>General Info</h1>
      <label htmlFor="">Full Name</label>
      <input type="text" placeholder="Full Name" onChange={handleNameChange} />
      <label htmlFor="">Email</label>
      <input type="text" placeholder="Email" onChange={handleEmailChange} />
      <label htmlFor="">Phone Number</label>
      <input type="text" placeholder="Phone Number" onChange={handlePhoneChange}/>
    </section>
  );
}

export default GeneralInfo;
