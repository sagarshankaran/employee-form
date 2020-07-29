import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Emp = () => {
   
    useEffect(() => {
        document.title = "Employee List"
        const fetchData = async () => {
          const res = await axios.get("http://localhost:1234/emp/list")
            console.log(res.data.emp);
        }
    
        fetchData()
      }, []);
      return(
          <div>
              <h1>Employee Full data fetched on Console</h1>
          </div>
      );
    
}
export default Emp;