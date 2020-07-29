import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import EmployeeForm from './EmployeeForm';
import showResults from './showResults';
import List from './list';
import Emp from './emp';
function App() {
  return (
      <div className="App">
      {/* <div className={styles.appcss}> */}
      <BrowserRouter>
         <Route exact path='/' render={() => <List />} />
        <Route path='/EmployeeForm' render={() => <EmployeeForm onSubmit={showResults} />} />
                </BrowserRouter>
    </div>
  );
}

export default App;
