/* eslint-disable react/prop-types */
function WorkSection({
  works,
  handleWorkEdit,
  handleWorkDelete,
  formatDateString,
}) {
  return works.map((work) => {
    return (
      <section key={work.id}>
        <h3>{work.company}</h3>
        <p>{work.title}</p>
        <p>{work.responsibilities}</p>
        <span>{formatDateString(work.startDate, work.endDate)}</span>
        <button onClick={handleWorkEdit} id={work.id}>
          Edit
        </button>
        <button onClick={handleWorkDelete} id={work.id}>
          Delete
        </button>
      </section>
    );
  });
}

export default WorkSection;
