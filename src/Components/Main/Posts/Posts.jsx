import classes from "./Posts.module.css"
import {useCallback, useRef, useState} from "react";
import Post from "./Post";

const Posts = () => {
    const[posts, setPosts] = useState([]);

    const inputText = useRef(null);

    const addPost = useCallback(() => {
        const text = inputText.current.value;
        text !== '' && setPosts([...posts, text]);
        inputText.current.value = ''
    }, [posts]);

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            addPost()
        }
    }

    return (
        <div className={classes.postsHolder}>
            <div className={classes.postMaker}>
                <textarea ref={inputText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <h3>My posts</h3>
            {posts.map((post) => <Post postText={post}/>)}
        </div>
    )
}

export default Posts