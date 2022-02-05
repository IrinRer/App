import React from "react";
import {useMediaQuery} from '@react-hook/media-query'
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
  userMess
}) => {
  const dataElement = data.map((item) => {
    return <DialogItem name={item.name} key={item.id} id={item.id} />;
  });

  const messElement = dataMess.map((item) => {
    if(+userMess === 1) {
      return <Message message={item.mess} key={item.id} userMess={userMess}/>
    } 
  });

  const addVal = (e) => {
    e.preventDefault();
    addMess();
  };

  const givVal = (e) => {
    const text = e.target.value;
    changeMess(text);
  };

  const isSmallScreen = useMediaQuery('(max-width: 600px)'); 

  const form = <form className={classes.wrapper__messages__add}>
                  <textarea name="messag" onChange={givVal} value={newMessage} />
                  <button onClick={addVal}>Send</button>
                </form>

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__dialogs}>
        {dataElement}
      </div>
      <div className={classes.wrapper__messages}>
        {messElement[0] === undefined && !isSmallScreen ? <Message1 /> : messElement}
        {messElement[0] === undefined ? null : form}
      </div>
    </div>
  );
};

export default Dialogs;
