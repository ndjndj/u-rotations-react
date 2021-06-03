import './App.css';
import React from 'react';
import Axios from 'axios';

const getJson = (state) => {
  Axios.get(
      'http://127.0.0.1:5000/json-test'
  ).then(res =>{
    state.setState({data: res.data});
    return res.data;
  }).catch(e => {
    return [];
  })
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentDidMount() {
    getJson(this.state);
  }



  render () {
    return <div>{this.state.data.map(d => <li>{d.farm}</li>)}</div>
  }

}


export default App;
