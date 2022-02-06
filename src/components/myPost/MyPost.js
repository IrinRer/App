import React from "react";
import { Formik, Form, Field } from "formik";
import classes from "./MyPost.module.scss";
import Post from "./post/Post";

const MyPost = ({ dataPost, newPost, addPost, changePost }) => {
  const postElement = dataPost.map((item) => {
    return <Post post={item.post} like={item.like} key={item.id} />;
  });

  const onAddPost = () => {
    addPost();
  };

  const onChangePost = (text) => {
    changePost(text);
  };

  const FormText = () => {
    return (
      <Formik
        initialValues={{
          post: newPost,
        }}
        onSubmit={(values, { setSubmitting }) => {
          onChangePost(values.post);
          onAddPost();
          setTimeout(() => {
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.create__new__post}>
            <Field name="post"  as="textarea" />
            <button disabled={isSubmitting}>Add post</button>
          </Form>
        )}
      </Formik>
    );
  };


  return (
    <div className={classes.post}>
      <h3>My posts</h3>
        <FormText />
      {postElement}
    </div>
  );
};

export default MyPost;
