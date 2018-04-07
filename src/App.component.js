import React, { Component } from "react";
import _index from "../static/sass/_index.scss";
import entrySass from "../static/sass/main.scss";
import loginSass from "../static/sass/_login.scss";

import UsersList from "./components/UserList";
import Chat from "./components/chat/Chat.js";

class App extends Component {
  render() {
    return (
      <div>

        <div className="application_wrapper">
          <div className="app">
            <div className="left-container">
              <div className="title" > Users </div>
              <div className="content">
                <UsersList />
              </div>
            </div>
            <div className="right-container">
            <div className="title" > Messages </div>
              <div className="content">
                <Chat />
              </div>
            </div>
          </div>

          <div className="login-box">
            </div>
        </div>
      </div>
    );
  }
}

export default App;
