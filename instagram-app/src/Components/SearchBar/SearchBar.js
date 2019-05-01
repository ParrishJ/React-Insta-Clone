// Search Bar js file

import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Media } from 'reactstrap';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="topNav">
        <Card>   
        <Row>
                <div className="topLogos">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#">Instagram</a>
                </div>
                <div className="search">
                    <input type="text" placeholder="search"></input>
                </div>
                <div className ="profileNav">
                    <a href="#"><i className="fas fa-compass"></i></a>
                    <a href="#"><i className="fas fa-heart"></i></a>
                    <a href="#"><i className="fas fa-user"></i></a>
                </div>
            </Row>
            </Card> 
        </div>
    )
}

export default SearchBar;