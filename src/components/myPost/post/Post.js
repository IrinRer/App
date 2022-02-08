import classes from "./Post.module.scss";

const Post = ({ post }) => {
  return (
    <div className={classes.new__post}>
      <p>{post}</p>
    </div>
  );
};

export default Post;
