import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./Table";
import { render } from '@testing-library/react';
import { Component } from 'react';
class App extends Component {

  state = {
  users : [
    {
      fname:"Babu",
      lname:"Prasad",
      mail:"babu@gmail.com"
    },
    {
      fname:"Arvint",
      lname:"Athikesav",
      mail:"arvint@gmail.com"
    },
    {
      fname:"Arul",
      lname:"Rajam",
      mail:"arul@gmail.com"
    }
  ],
};

handleDelete = (index) => {
  const updateUsers = this.state.users;
  updateUsers.splice(index,1);
  this.setState({users : updateUsers });
};

  render(){
    return (
      <div className="App">
        <Table userdata={this.state.users} handleDelete = {this.handleDelete} />
      </div>
    );
  }
  
}

export default App;
