import React, { Component } from "react";
import style from "../../static/sass/_user.scss";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ip: "",
      login: ""
    };
  }

  render() {
    return (
      <div className="user-wrapper">
        <i className="icon"> </i>
        <div className="info">
          <div className="login"> login</div>
          <div className="ip"> 10.10.10.3 </div>
        </div>
      </div>
    );
  }
}

export default User;
