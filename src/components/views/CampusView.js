import { Link } from "react-router-dom";


const CampusView = (props) => {
  const {campus, deleteCampus} = props;
  console.log(campus.students.length);
  if(campus.students.length>0){
    return (

      <div>      
        <h1>{campus.name}</h1>
        <p>{campus.description}</p>
        <ul>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <li key={student.id}>
              <Link to={`/student/${student.id}`}>{name}</Link>
              </li>
          );
        })}
        </ul>
        <Link to={`/campuses/`}>
        <button onClick={() => deleteCampus(campus.id)}>Delete</button>
        </Link>
      </div>
    );
  }
  else{
    return (

      <div>      
        <h1>{campus.name}</h1>
        <p>{campus.description}</p>
       <div> There are no students enrolled at this campus.</div>
       <button onClick={() => deleteCampus(campus.id)}>Delete</button>

      </div>
    );
  }


};

export default CampusView;