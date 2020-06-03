import React from 'react';


class Login extends React.Component {
  constructor(props){
    super(props);

    this.state={
    }

  }

  render () {
    return (
    <div id="login">
        <h1 property="abc">{this.property}Login Details</h1>
        <input type="text" placeholder="User ID / Email"></input>
        <input type="password" placeholder="Password"></input>
        <button>Log in</button>
    </div>
    )
  }
  
  
}

export default Login;