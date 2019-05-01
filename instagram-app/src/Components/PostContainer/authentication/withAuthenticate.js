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
import PostPage from "../PostPage";

const withAuthenticate = Component =>
  class extends React.component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return <Component />;
    }
  };

const ComponentFromWithAuthenticate = withAuthenticate(PostPage);

export default withAuthenticate;
