import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmployeePersonalDetailsForm from './EmployeePersonalDetailsForm';
import EmployeeEducationForm from './EmployeeEducationForm';
import EmployeeProfessionForm from './EmployeeProfessionForm';
import SocialMediaForm from './SocialMediaForm';
import axios from 'axios';


class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1, 
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }


  componentDidMount(){
      axios.get("http://localhost:1234/emp/list").then(e =>{
        console.log(e.data.emp);
      }).catch(err => {
        console.log(err);
      })
      
    }

  

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <EmployeePersonalDetailsForm onSubmit={this.nextPage} />}
        {page === 2 &&
          <EmployeeEducationForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <EmployeeProfessionForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
          {page === 4 &&
          <SocialMediaForm
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    );
  }
}

EmployeeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default EmployeeForm;
