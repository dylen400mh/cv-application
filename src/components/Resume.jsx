/* eslint-disable react/prop-types */
function Resume({ generalInfo }) {
  return (
    <div>
      <header>
        <h1>{generalInfo.name}</h1>
        <ul>
          <li>{generalInfo.email}</li>
          <li>{generalInfo.phone}</li>
        </ul>
      </header>
      <main>

      </main>
    </div>
  );
}

export default Resume;
