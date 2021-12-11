import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { editCampusThunk } from '../../store/thunks';


class EditCampusContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "", 
      description: "", 
      redirect: false, 
      redirectId: null
    };
}


    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let campus = {
            name: this.state.name,
            description: this.state.description,
            address: this.state.address,
            id: this.props.match.params.id
        };
        
        let editCampus = await this.props.editCampus(campus);

        this.setState({
          name: "", 
          description: "", 
    //      campusId: null, 
          redirect: true, 
          redirectId: campus.id
        });
    }
    

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }
    render() {
      if(this.state.redirect) {
        return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
      }
        return (
        <EditCampusView 
            campus={this.props.campus}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
      }
    
}

// map state to props
const mapState = (state) => {
    return {
      campus: state.campus,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editCampus: (campus) => dispatch(editCampusThunk(campus)),

    })
}

export default connect(mapState, mapDispatch)(EditCampusContainer);