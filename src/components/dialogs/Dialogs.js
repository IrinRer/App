import React from "react";
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import { Navigate } from "react-router-dom";

const Dialogs = ({
  data,
  dataMess,
  addMess,
  changeMess,
  newMessage,
  isAuth,
}) => {
  const dataElement = data.map((item) => {
    return <DialogItem name={item.name} key={item.id} id={item.id} />;
  });

  const messElement = dataMess.map((item) => {
    return <Message message={item.mess} key={item.id} />;
  });

  const addVal = (e) => {
    e.preventDefault();
    addMess();
  };

  const givVal = (e) => {
    const text = e.target.value;
    changeMess(text);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__dialogs}>{dataElement}</div>
      <div className={classes.wrapper__messages}>
        {messElement}
        <form className={classes.wrapper__messages__add}>
          <textarea name="messag" onChange={givVal} value={newMessage} />
          <button onClick={addVal}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
