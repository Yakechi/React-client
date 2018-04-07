import React, { Component } from "react";
import User from "./SingleUser";

class UserList extends Component {
  constructor() {
    super();

    this.state = {
      secondsElapsed: 0,
      users: [1, 2, 3, 4]
    };
  }

  fetchDataFromServer() {
    fetch(`http://jsonplaceholder.typicode.com/posts`)
      .then(result => result.json())
      .then(items => {
        //console.log("users : ", items)
        this.setState({ users: items });
      });
  }
  //

  timerTicks() {
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  }

  componentDidMount() {
    this.interval = setInterval(this.fetchDataFromServer.bind(this), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        {this.state.users.map(item => (
          <div key={item.id}>
            <User props={item} />
          </div>
        ))}
      </div>
    );
  }
}

export default UserList;
