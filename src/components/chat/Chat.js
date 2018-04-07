import React, { Component } from "react";
import cahtStyle from "../../../static/sass/_chat.scss";
import Message from "./Message";

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          author: "loading",
          body: "...",
          timeout: 0
        },
        {
          author: "bot",
          body: "Hello",
          timeout: 800
        }
      ],
      responses: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
    this.mockReply = this.mockReply.bind(this);
  }

  componentDidMount() {
    // this.demo();
  }

  demo() {
    this.setState({
      messages: [],
      responses: 0
    });

    messages.map((item, index) => {
      setTimeout(() => this.addMessage(item), item.timeout);
    });

    // window.addEventListener('keydown', (e) => {
    //     // if d for demo
    //     if (e.keyCode == "68") {
    //         this.demo();
    //     }
    // });

    setTimeout(() => {
      this.setState({
        messages: this.state.messages.slice(1, this.state.messages.length)
      });
    }, 700);
  }

  addMessage(item) {
    this.setState({
      messages: [...this.state.messages, item]
    });

    setTimeout(() => {
      const items = document.querySelectorAll("li");
      const lastItem = items[items.length - 1];
      document.querySelector(".c-chat__list").scrollTop =
        lastItem.offsetTop + lastItem.style.height;
    }, 100);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.addMessage({
      author: "human",
      body: e.target.querySelector("input").value
    });

    this.mockReply();

    e.target.reset();
  }

  mockReply() {
    let response;

    if (this.state.responses == 0) {
      response = responses[this.state.responses];
    } else {
      if (responses[this.state.responses])
        response = responses[this.state.responses];
    }

    if (response) {
      this.setState({
        responses: this.state.responses + 1
      });

      if (Array.isArray(response)) {
        response.map((item, index) => {
          setTimeout(
            () => this.addMessage({ author: "bot", body: item }),
            600 + 500 * index
          );
        });
      } else {
        setTimeout(
          () => this.addMessage({ author: "bot", body: response }),
          600
        );
      }
    }
  }

  render() {
    let cssClass = ["c-chat"];

    // if (this.state.messages.length > 4) {
    //   cssClass.push("c-chat--ready");
    // }

    // if (this.state.messages.length == 5) {
    //   document.querySelector("input").focus();
    // }

    return (
      <div className={cssClass.join(" ")}>
        <ul className="c-chat__list">
          {this.state.messages.map((message, index) => (
            // <Message key={index} props={message} />
            // <div key={index}> {message.body} </div>
            <li
              key={index}
              className={"c-chat__item c-chat__item--" + message.author}
            >
              <div className="c-chat__message">{message.body}</div>
            </li>
          ))}
        </ul>

        <form className="c-chat__form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            placeholder="Type your message here..."
            autoFocus
            autoComplete="on"
            required
          />
        </form>
      </div>
    );
  }
}

export default Chat;
