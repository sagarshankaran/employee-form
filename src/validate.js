const validate = values => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = 'Required';
    }
    if (!values.lastname) {
      errors.lastname = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.phonenumber) {
      errors.phonenumber = 'Required';
    }
  
    if (!values.currentaddress) {
      errors.currentaddress = 'Required';
    }
    if (!values.permanentaddress) {
      errors.permanentaddress = 'Required';
    }
   /* if (!values.photo) {
      errors.photo = 'Required';  
    } */
    

    if (!values.course) {
      errors.course = 'Required';
    }
    if (!values.institution) {
      errors.institution = 'Required';
    }
    if (!values.year) {
      errors.year = 'Required';
    }
    if (!values.percentage) {
      errors.percentage = 'Required';
    }
    if (!values.linkedin) {
      errors.linkedin = 'Required';
    }
    if (!values.github) {
      errors.github = 'Required';
    }
    if (!values.facebook) {
      errors.facebook = 'Required';
    }
    if (!values.hobbies) {
      errors.hobbies = 'Required';
    }
    if (!values.from) {
      errors.from = 'Required';
    }
    if (!values.to) {
      errors.to = 'Required';
    }

    return errors;

  };
  
  export default validate;
  