// Post Container js file
import React from 'react';
import CommentSection from '../CommentSection/CommentSection'


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


export default PostContainer
