// comment section component js file
import React from 'react'


const CommentSection = props => {
    return (
        <div>
            {props.comments.map ((comment, index) => (
                <div className ="commentSection" key={index}>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>

                </div>            
                ))}
        </div>
    );
}

export default CommentSection