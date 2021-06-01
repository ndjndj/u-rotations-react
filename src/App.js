import './App.css';
import React from 'react';
import Axios from 'axios';

const getJson = () => {
  Axios.get(
      'http://127.0.0.1:5000/json-test'
  ).then(res =>{
    console.log(res.data);
    return res.data;
  }).catch(e => {
    console.log('error');
    console.log(e);
    return null;
  })
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  componentDidMount() {
    this.setState({ data: getJson() } );
  }

  render () {
    return <h1>sample</h1>
  }

}


export default App;
