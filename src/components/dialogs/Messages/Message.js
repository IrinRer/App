import classes from './../Dialogs.module.scss';

const Message = ({ message }) => {
    return(
    <div className={classes.wrapper__message__item}>
        <span>{message}</span>
    </div>
    )
};

export default Message;