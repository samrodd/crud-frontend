import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif', 
    fontSize: '35px', 
    color: '#CDDC39'
  },
  appBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  }

}));

const StudentView = (props) => {
  const { student, deleteStudent } = props;
  const classes = useStyles();

  if(!student.campus){
    return(
      <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            CRUD App
          </Typography>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <img src={student.imgUrl} alt="student image"/>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h2>Email: {student.email}</h2>
      <h3>GPA: {student.gpa}</h3>
      <h3>This student is not enrolled at any campuses.</h3>
      <Link to={`/students`}>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
        </Link>
    </div>
    
    )
  }
  else{
    return (
      <div className={classes.root}>
        <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            CRUD App
          </Typography>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <img src={student.imgUrl} alt="student image"/>
        <h1>{student.firstname + " " + student.lastname}</h1>
        <h2>Email: {student.email}</h2>
        <h2>Campus: <Link to={`/campus/${student.campus.id}`}>
        {student.campus.name}
        </Link></h2>
        <h3>GPA: {student.gpa}</h3>

        <Link to={`/students/`}>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
        </Link>

      </div>
    );
  
  }

};

export default StudentView;