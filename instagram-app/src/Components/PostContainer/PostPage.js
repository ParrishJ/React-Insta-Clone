import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";
import dummyData from "../../dummy-data";
import CommentSection from "../CommentSection/CommentSection";
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

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map((post, index) => (
          <PostContainer post={post} index={index} key={index} />
        ))}
      </div>
    );
  }
}

export default PostPage;
