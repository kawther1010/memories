import React from "react";
import Post from "./Post/Post";
import useStyle from './styles';

const Posts = () => {
    const classes = useStyle();
    return(
        <>
            <h2>Posts</h2>
            <Post />
            <Post />
        </>
        
    );
}
export default Posts;
