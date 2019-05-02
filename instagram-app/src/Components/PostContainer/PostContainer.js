// Post Container js file
import React from "react";
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
import styled from "styled-components";
import LikeIcon from "../StylesAndReusables/LikeIcon";
import ThumbnailImg from "../StylesAndReusables/ThumbnailImg";
import Username from "../StylesAndReusables/Username";
import CommentIcon from "../StylesAndReusables/CommentIcon";

import "./PostContainer.css";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  componentDidMount() {
    this.setState({
      likes: this.props.post.likes
    });
  }

  clickHandler = e => {
    /* this.setState({
      likes: this.state.likes + 1
    }); */
    this.setState(state => ({ likes: state.likes + 1 }));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card key={this.props.post.timestamp} className="post">
                <CardTitle className="postHead">
                  <Row>
                    <ThumbnailImg src={this.props.post.thumbnailUrl} />
                    <Username>{this.props.post.username}</Username>
                  </Row>
                </CardTitle>
                <CardBody>
                  <CardImg className="postPic" src={this.props.post.imageUrl} />
                  <CardText>
                    <LikeIcon
                      onClick={this.clickHandler}
                      className="far fa-heart"
                    />
                    <CommentIcon className="far fa-comment" />
                    <div>{this.state.likes} likes</div>
                  </CardText>
                  <CommentSection
                    comments={this.props.post.comments}
                    index={this.props.index}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf({
        username: PropTypes.string,
        text: PropTypes.string
      })
    })
  )
};

PostContainer.defaultProps = {
  post: []
};

export default PostContainer;
