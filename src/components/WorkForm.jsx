/* eslint-disable react/prop-types */
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
    <section>
      <h1>Work Experience</h1>
      <label htmlFor="">Company</label>
      <input
        type="text"
        placeholder="Company"
        value={work.company}
        onChange={handleCompanyChange}
      />
      <label htmlFor="">Title</label>
      <input
        type="text"
        placeholder="Title"
        value={work.title}
        onChange={handleTitleChange}
      />
      <label htmlFor="">Responsibilities</label>
      <textarea
        style="resize: none"
        cols="30"
        rows="10"
        placeholder="Enter Responsibilities"
        value={work.responsibilities}
        onChange={handleResponsibilitiesChange}
      ></textarea>
      <label htmlFor="">Start Date</label>
      <input type="month" value={work.startDate} onChange={handleStartChange} />
      <label htmlFor="">End Date</label>
      <input type="month" value={work.endDate} onChange={handleEndChange} />
      <button onClick={handleDelete} id={work.id}>
        Delete
      </button>
      <button onClick={handleSubmit}>Submit</button>
    </section>
  );
}

export default WorkForm;
