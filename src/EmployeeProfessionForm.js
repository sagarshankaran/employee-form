import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import {renderField} from './renderThings';


const EmployeeProfessionForm = props => {
  const { handleSubmit,previousPage} = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter your professional Details</h2>
      <div>
      <Field name="companyname" type="text" component={renderField} label="Company Name" />
      <br></br>

      <div>
      <Field name="from" type="date" component={renderField} label="Date " />
      <Field name="to" type="date" component={renderField} label="To :" />
      </div>

      <Field name="designation" type="text" component={renderField} label="Designation" />
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
})(EmployeeProfessionForm);
