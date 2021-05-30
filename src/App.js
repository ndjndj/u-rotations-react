import './App.css';
import React from 'react';
import Axios from 'axios';

getJson = () => {
  Axios.get(
      'http://127.0.0.1:5000/json-test',
      {params: params }
  ).then(res =>{
    console.log(res.data);
  });
}


export default App;
