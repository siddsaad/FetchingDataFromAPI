import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FetchUser from "./components/FetchUser";

class App extends Component{
  state = {
    visible: true
  };

  render(){
    return (
      <div className="App">
        <FetchUser/>
      </div>
    );
  }
}

export default App;
