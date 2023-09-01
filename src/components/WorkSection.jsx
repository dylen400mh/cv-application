/* eslint-disable react/prop-types */
import "../styles/WorkSection.css";

function WorkSection({
  work,
  handleWorkEdit,
  handleWorkDelete,
  formatDateString,
}) {
  return (
    <div className="work" key={work.id}>
      <p className="title">
        <b>{work.title}</b> - {work.company},{" "}
        {formatDateString(work.startDate, work.endDate)}
      </p>
      <p className="responsibilities">{work.responsibilities}</p>
      <div className="buttons">
        <button onClick={handleWorkEdit} id={work.id}>
          Edit
        </button>
        <button onClick={handleWorkDelete} id={work.id}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default WorkSection;
