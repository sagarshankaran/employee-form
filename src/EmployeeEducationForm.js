import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { renderField } from './renderThings';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const EmployeeEducationForm = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter your Education Details</h2>
      <div>
      <Field name="course" type="text" component={renderField} label="Course" />
      <Field name="institution" type="text" component={renderField} label="College" />
      <Field name="year" type="number" component={renderField} label="Year" />
      <Field name="percentage" type="number" component={renderField} label="Percentage/CGPA" />


      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(EmployeeEducationForm);
