// Search Bar js file

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
import dummyData from "../../dummy-data";
import styled from "styled-components";
import SearchContainer from "../StylesAndReusables/SearchContainer";
import LikeIcon from "../StylesAndReusables/LikeIcon";
import "./SearchBar.css";

const SearchBar = props => {
  //functional components do not need "this.props, only props" - we dont need a class here because we don't need state, we're just invoking a function.
  return (
    <SearchContainer className="topNav">
      <Card>
        <Row>
          <div className="topLogos">
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">Instagram</a>
          </div>
          <div className="search">
            <input
              onKeyDown={props.searchPosts}
              type="text"
              placeholder="search"
            />
          </div>
          <div className="profileNav">
            <a href="#">
              <i className="far fa-compass" />
            </a>
            <a href="#">
              <LikeIcon type="nav" className="far fa-heart" />
            </a>
            <a href="#">
              <i className="far fa-user" />
            </a>
          </div>
        </Row>
      </Card>
    </SearchContainer>
  );
};

export default SearchBar;
