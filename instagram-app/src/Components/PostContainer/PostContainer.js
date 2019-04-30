// Post Container js file
import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Media } from 'reactstrap';

import './PostContainer.css' ;


 const PostContainer = props => {
     return(
        <div>
            <Container>
                <Row>
                    {/* <Col></Col> */}
                    <Col>
                        {props.dummyData.map(post => ( 
                            <Card key={post.timestamp} className="post">
                                 <CardTitle className="postHead">
                                    <Row>
                                     <Media className="thumbnail" src={post.thumbnailUrl} />
                               
                                        <CardTitle>{post.username}</CardTitle> 
                                        </Row>
                                    </CardTitle>
                                <CardBody>
                                   
                                    <CardImg className="postPic" src={post.imageUrl} />
                                    <CardText /* className="postFoot" */>
                                        <i class="fas fa-heart"></i>
                                        <i class="fas fa-comment"></i>
                                        <div>{post.likes} likes</div>
                                    </CardText>
                                    <CommentSection comments={post.comments}/>
                                </CardBody>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>  
    )
}



PostContainer.propTypes = {
    post: PropTypes.arrayOf(
        PropTypes.shape ({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf ({
                username: PropTypes.string,
                text: PropTypes.string,
            })
        })
    )}

PostContainer.defaultProps = {
    post: []
}


export default PostContainer
