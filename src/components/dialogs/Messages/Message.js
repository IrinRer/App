import classes from './../Dialogs.module.css';

const Message = ({ message }) => {
    return(
    <div className={classes.wrapper__message__item}>
        <span>{message}</span>
    </div>
    )
};

export default Message;