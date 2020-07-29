import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import {renderField} from './renderThings';


const EmployeePersonalDetailsForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter your Personal Details</h2>
      <Field name="firstname" type="text" component={renderField} label="First Name" /> <br/>
           <Field name="lastname"type="text"component={renderField} label="Last Name"/> <br/>
            <Field name="email" type="email" component={renderField} label="Email" /> <br/>
            <Field name="phonenumber" type="number" component={renderField} label="Phone" /> <br/>
            <Field name="currentaddress" type="text" component={renderField} label="Current Address" /> <br/>
            <Field name="permanentaddress" type="text" component={renderField} label="Permanent Address" /> <br/>
        <label>Upload Photo</label><br></br><input type="file" id="img" name="img" component={renderField} accept="image/*" /><br></br>

      <div>
       <br></br> <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(EmployeePersonalDetailsForm);
