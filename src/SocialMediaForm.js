import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import {renderField} from './renderThings';


const SocialMediaForm = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter your Social Media Details</h2>
      <div>
      <Field name="linkedin" type="text" component={renderField} label="LinkedIn Profile Link" />
      <Field name="github" type="text" component={renderField} label="LinkedIn Profile Link" />
      <Field name="facebook" type="text" component={renderField} label="Facebook Profile" />
      <Field name="hobbies" type="text" component={renderField} label="Hobbies" />
     </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(SocialMediaForm);
