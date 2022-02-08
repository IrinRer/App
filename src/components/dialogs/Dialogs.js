import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { Formik, Form, Field } from "formik";
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import Message1 from "./Messages/Messag1";

const Dialogs = ({
  data,
  dataMess,
  addMess,
  changeMess,
  newMessage,
  userMess,
}) => {
  const dataElement = data.map((item) => {
    return <DialogItem name={item.name} key={item.id} id={item.id} />;
  });

  const messElement = dataMess.map((item) => {
    if (+userMess === 1) {
      return <Message message={item.mess} key={item.id} userMess={userMess} />;
    }
  });

  const addVal = () => {
    addMess();
  };

  const givVal = (val) => {
    changeMess(val);
  };

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const FormText = () => {
    return (
      <Formik
        initialValues={{
          message: newMessage,
        }}
        onSubmit={(values, { setSubmitting }) => {
          givVal(values.message);
          addVal();
          setTimeout(() => {
            setSubmitting(false);
          }, 300);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.wrapper__messages__add}>
            <Field name="message" as="textarea" />
            <button disabled={isSubmitting}>Send</button>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__dialogs}>{dataElement}</div>
      <div className={classes.wrapper__messages}>
        {messElement[0] === undefined && !isSmallScreen ? (
          <Message1 />
        ) : (
          messElement
        )}
        {messElement[0] === undefined ? null : <FormText />}
      </div>
    </div>
  );
};

export default Dialogs;
