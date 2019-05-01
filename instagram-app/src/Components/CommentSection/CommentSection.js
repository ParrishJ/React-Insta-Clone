// comment section component js file
import React from 'react';
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Media } from 'reactstrap';


class CommentSection extends React.Component {
    constructor (props) { console.log('comment section props', props.comments);
        super (props);
        this.state = {
            comment: [],
            newComment: ''
        }
    }

    componentDidMount (){
        this.setState({
            comment: this.props.comments,
            newComment: ''
        })
    }

    
    changeHandler = e => {
        this.setState = ({
            newComment: e.target.value,
        })
    };

    addNewComment = e => {
        e.preventDefault();
       /*  const addedNewComment = {username: "guest", text: this.state.newComment.text}; */
        this.setState = ({
            comment: [
                ...this.state.comment, /* addedNewComment */
                {
                    username: "guest",
                    text: this.state.newComment, 
                }
            ],
            newComment: '' 
        })
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
                    <form onSubmit={this.addNewComment}>
                        <input name="newComment" value={this.state.newComment} onChange={this.changeHandler} type="text" placeholder="Add a comment..." />
                    </form>
                </Row>
        </card>
        
    );
 }
}

export default CommentSection