/* eslint-disable react/prop-types */
import "../styles/WorkForm.css";

function WorkForm({ id, data, handleChange, handleDelete, handleSubmit }) {
  const work = data.find((work) => id === work.id);

  const handleCompanyChange = (e) => {
    work.company = e.target.value;

    handleChange([...data.filter((work) => id !== work.id), work]);
  };

  const handleTitleChange = (e) => {
    work.title = e.target.value;

    handleChange([...data.filter((work) => id !== work.id), work]);
  };

  const handleResponsibilitiesChange = (e) => {
    work.responsibilities = e.target.value;

    handleChange([...data.filter((work) => id !== work.id), work]);
  };

  const handleStartChange = (e) => {
    work.startDate = e.target.value;

    handleChange([...data.filter((work) => id !== work.id), work]);
  };

  const handleEndChange = (e) => {
    work.endDate = e.target.value;

    handleChange([...data.filter((work) => id !== work.id), work]);
  };

  return (
    <div className="workForm">
      <h1>Work Experience</h1>
      <div className="container">
        <label htmlFor="">Company</label>
        <input
          type="text"
          placeholder="Company"
          value={work.company}
          onChange={handleCompanyChange}
        />
      </div>
      <div className="container">
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Title"
          value={work.title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="container">
        <label htmlFor="">Responsibilities</label>
        <textarea
          style={{ resize: "none" }}
          cols="30"
          rows="10"
          placeholder="Enter Responsibilities"
          value={work.responsibilities}
          onChange={handleResponsibilitiesChange}
        ></textarea>
      </div>
      <div className="container">
        <label htmlFor="">Start Date</label>
        <input
          type="month"
          value={work.startDate}
          onChange={handleStartChange}
        />
      </div>
      <div className="container">
        <label htmlFor="">End Date</label>
        <input type="month" value={work.endDate} onChange={handleEndChange} />
      </div>
      <div className="buttons">
        <button onClick={handleDelete} id={work.id}>
          Delete
        </button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default WorkForm;
