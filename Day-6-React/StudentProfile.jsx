function StudentProfile({ name, semester, department }) {
  return (
    <div className="profile">
      <div className="avatar">
        {name.charAt(0)}
      </div>

      <div>
        <h2>{name}</h2>
        <p>{department}</p>
        <p>Semester {semester}</p>
      </div>
    </div>
  );
}

export default StudentProfile;
