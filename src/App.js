import React, { Component } from "react";
import "./App.css";

import Input from "./Input/Input";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {

    users: [
      {
        id: "1",
        username: "waterstar",
        password: "password",
        bio: "Lorem Ipsum",
      },
      {
        id: "2",
        username: "enguyen",
        password: "password",
        bio: "Lorem Ipsum",
      },
      {
        id: "3",
        username: "tullutt",
        password: "password",
        bio: "Lorem Ipsum",
      },
    ],
  };

  inputChangedHandler = (e, id) => {
    const userIndex = this.state.users.findIndex((u) => {
      return u.id === id;
    });

    console.log(userIndex)
    const property = e.target.id.toLowerCase();

    console.log('/*********************/')
    const user = { ...this.state.users[userIndex] };
    console.log(user)
    user[property] = e.target.value;
    console.log(user)

    console.log('/*********************/')
    const users = [...this.state.users];
    console.log(users)
    users[userIndex] = user;
    console.log(users)

    this.setState({ users: users });
  };

  deleteCharHandler = (id, index) => {  
    const user0 = this.state.users[0]
    const userBio = user0.bio.split("");
    userBio.splice(index, 1)

    const updatedBio = userBio.join('')

    const userIndex = this.state.users.findIndex((u) => {
      return u.id === id;
    });

    const user = { ...this.state.users[userIndex] };
    user.bio = updatedBio;

    const users = [...this.state.users];
    users[userIndex] = user;

    this.setState({users: users})
  }

  render() {
    let userCard = null;
    let charList = this.state.users[0].bio.split("").map((ch, index) => {
      return <Char key={index} character={ch} clicked={()=>this.deleteCharHandler(this.state.users[0].id, index)}/>;
    });

    userCard = (
      <div className="columns">
        {this.state.users.map((user) => {
          return (
            <div>
              <Input
                username={user.username}
                password={user.password}
                bio={user.bio}
                key={user.id}
                changed={(e) => this.inputChangedHandler(e, user.id)}
              />
              <Validation inputLength={user.password.length} />
            </div>
          );
        })}
      </div>
    );

    return (
      <div className="App">
        {userCard} {charList}
      </div>
    );
  }
}

export default App;
