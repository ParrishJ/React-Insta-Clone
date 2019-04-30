// comment section component js file
import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Media } from 'reactstrap';


const CommentSection = props => {
    return (
        <div>
        <Card>
            {props.comments.map ((comment, index) => (
                <div className ="commentSection" key={index}>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>
                </div>            
                ))}
                <Row>
                <input type="text" placeholder="Add a comment..."></input>
                <Button><i class="fas fa-ellipsis-h"></i></Button>
                </Row>
        </Card>
        </div>
    );
}

export default CommentSection