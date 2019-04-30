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
                                     <Media src={post.thumbnailUrl} />
                               
                                        <CardTitle>{post.username}</CardTitle> 
                                        </Row>
                                    </CardTitle>
                                <CardBody>
                                   
                                    <CardImg className="postPic" src={post.imageUrl} />
                                    <div className="postFoot">
                                        <img src="" />
                                        <img src="" />
                                        <div src={post.likes}></div>
                                    </div>
                                    <CommentSection comments={post.comments}/>
                                </CardBody>
                            </Card>
                        ))}
                    </Col>
                    {/* <Col></Col> */}
                </Row>
            </Container>
        </div>  
    )
}

/* const PostContainer = props => {
    return(
       <div>
           {props.dummyData.map(post => (
               
            <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
           ))}
       </div>  
   )
} */

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


export default PostContainer
