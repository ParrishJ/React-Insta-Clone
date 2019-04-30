// comment section component js file
import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Media } from 'reactstrap';


class CommentSection extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            comment: []
        }
    }

    componentDidMount (){
        this.setState({
            comment: this.props.comments
        })
    }

    addNewComment = (e, index) => {
        this.state = {
            newComment: ''
        }
    }
    
    render(){
    return (
        
        <card>
            {this.state.comment.map ((comment, index) => (
                <div className ="commentSection" key={index}>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>
                </div>            
                ))}
                <Row>
                    <input type="text" placeholder="Add a comment..."></input>
                    <Button><i class="fas fa-ellipsis-h"></i></Button>
                </Row>
        </card>
        
    );
 }
}

export default CommentSection