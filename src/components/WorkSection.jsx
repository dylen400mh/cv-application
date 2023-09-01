/* eslint-disable react/prop-types */
import "../styles/WorkSection.css";

function WorkSection({
  work,
  handleWorkEdit,
  handleWorkDelete,
  formatDateString,
}) {
  return (
    <div key={work.id}>
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
    </div>
  );
}

export default WorkSection;
