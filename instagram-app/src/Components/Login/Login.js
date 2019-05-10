import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
  Media
} from "reactstrap";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <Card>
        <form onSubmit={this.loginHandler}>
          <input
            name="username"
            value={this.state.username}
            onChange={this.changeHandler}
            type="text"
            placeholder="username"
          />
          <input
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
            type="text"
            placeholder="password"
          />
          <button>Login</button>
        </form>
      </Card>
    );
  }
}

export default Login;
