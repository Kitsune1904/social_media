import classes from './Posts.module.css'
const Post = (props) => {
    return (
        <>
            <div className={classes.post}>
                <div className={classes.postText}>
                    <img src={'https://pics.craiyon.com/2023-11-12/VPGUPu8_QdmirKZEKJ34-A.webp'}/>
                    <p>{props.postText}</p>
                </div>
                <div className={classes.postBtns}>
                    <button>Change post</button>
                    <button>Delete post</button>
                </div>

            </div>

        </>

    )
}

export default Post