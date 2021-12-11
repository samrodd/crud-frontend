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



const CampusView = (props) => {
  const {campus, deleteCampus} = props;
  const classes = useStyles();

  if(campus.students.length>0){
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
      <img src={campus.imgUrl} alt="campus image"/>
      
        <h1>{campus.name}</h1>
        <p>{campus.description}</p>
        <p>{campus.address}</p>
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

        <Link to={`/campus/editcampus/${campus.id}`}>
            <button>Edit</button>
        </Link> 
  
        <Link to={`/campuses/`}>
        <button onClick={() => deleteCampus(campus.id)}>Delete</button>
        </Link>
      </div>
    );
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
        <h1>{campus.name}</h1>
        <p>{campus.description}</p>
        <p>{campus.address}</p>
       <div> There are no students enrolled at this campus.</div>
       <Link to={`/campus/editcampus/${campus.id}`}>
            <button>Edit</button>
        </Link> 
  
       <button onClick={() => deleteCampus(campus.id)}>Delete</button>

      </div>
    );
  }


};

export default CampusView;