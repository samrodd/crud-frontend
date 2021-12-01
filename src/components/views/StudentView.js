import { Link } from "react-router-dom";


const StudentView = (props) => {
  const { student, deleteStudent } = props;
  if(!student.campus){
    return(
      <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>This student is not enrolled at any campuses.</h3>
      <Link to={`/students`}>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
        </Link>
    </div>
    
    )
  }
  else{
    return (
      <div>
        <h1>{student.firstname + " " + student.lastname}</h1>
        <Link to={`/campus/${student.campus.id}`}>
        <h3>{student.campus.name}</h3>
        </Link>
        <Link to={`/students/`}>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
        </Link>
      </div>
    );
  
  }

};

export default StudentView;