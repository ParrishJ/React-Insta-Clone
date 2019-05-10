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
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  searchPosts = e => {
    const searchedPosts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: searchedPosts });
  };

  render() {
    return (
      <div /* className="App" */>
        <SearchBar searchPosts={this.searchPosts} />
        {this.state.filteredPosts.length > 0
          ? this.state.filteredPosts.map(post => (
              <PostContainer post={post} key={post.timestamp} />
            ))
          : this.state.posts.map(post => (
              <PostContainer post={post} key={post.timestamp} />
            ))}
      </div>
    );
  }
}

export default PostPage;
