import classes from './Post.module.css';

const Post = ({post, like}) => {
    return (

        <div className={classes.new__post}>
                <img></img>
                <p>{post}</p>
                <span>{like}</span>
        </div>
    );
}

export default Post;