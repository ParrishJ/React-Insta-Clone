// Post Container js file
import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types'
import './PostContainer.css' 


 const PostContainer = props => {
     return(
        <div>
            {props.dummyData.map(post => (
                
                <div key={post.timestamp} className="post">
                    <div className="postHead">
                        <img src={post.thumbnailUrl}></img>
                        <h1>{post.username}</h1>
                    </div>
                    <div className="postPic">
                        <img src={post.imageUrl} />
                    </div>
                    <div className="postFoot">
                        <img src="" />
                        <img src="" />
                        <div src={post.likes}></div>
                    </div>
                    <CommentSection comments={post.comments}/>
                </div>
            ))}
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


export default PostContainer
