import './App.css';
import React from 'react';
import Axios from 'axios';

const getJson = () => {
  Axios.get(
      'http://127.0.0.1:5000/json-test'
  ).then(res =>{
    console.log(res.data);
  }).catch(e => {
    console.log('error');
    console.log(e);
  })
}

class App extends React.Component {
  componentDidMount() {
    getJson();
  }

  render () {
    return <h1>sample</h1>
  }

}


export default App;
