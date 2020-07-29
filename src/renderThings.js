import React from 'react';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

export const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div> 
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
// export const renderDatePicker = ({ input, defaultValue, meta: { touched, error } }) => (
//   <div>
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <KeyboardDatePicker {...input} format="MM/dd/yyyy" selected={input.value}  value={input.value !== '' ? new Date(input.value) : null} />
//     </MuiPickersUtilsProvider>
//     {touched && error && <small>{error}</small>}
//   </div>
// );


