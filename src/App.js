import React from 'react';
import Login from './components/Login';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      newItem: '',
      list: []
    }

  }

  render () {
    return (
    <div className="container">
      <Login property="abc"></Login>
    </div>
    )
  }
  
  
}

export default App;
