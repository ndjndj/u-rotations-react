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
  state = {
    data: []
  }

  componentDidMount() {
    Axios.get(
        'http://127.0.0.1:5000/json-test'
    ).then(res =>{
      console.log(res.data);
      this.setState({ data: res.data });
    }).catch(e => {
      console.log('error');
      console.log(e);
      return null;
    })
  }

  render () {
    return <div>{this.state.data.map(d => <li>{d.farm}</li>)}</div>
  }

}


export default App;
