// comment section component js file
import React from "react";
import PropTypes from "prop-types";
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
import styled from "styled-components";

const CommentBox = styled.div`
  border: none !important;
`;

const CommentInput = styled.input`
  width: 100%;
  height: auto;
  border: none;
  border-top: 1pt solid grey;
`;

const InputForm = styled.form`
  width: 100%;
  height: auto;
`;

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: ""
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNewComment = e => {
    e.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: "guest",
          text: this.state.newComment
        }
      ],
      newComment: ""
    });
  };

  render() {
    return (
      <CommentBox>
        {this.state.comments.map((comment, index) => (
          <div className="commentSection" key={index}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
          </div>
        ))}
        <div>
          <InputForm onSubmit={this.addNewComment}>
            <CommentInput
              name="newComment"
              value={this.state.newComment}
              onChange={this.changeHandler}
              type="text"
              placeholder="Add a comment..."
            />
          </InputForm>
        </div>
      </CommentBox>
    );
  }
}

export default CommentSection;
