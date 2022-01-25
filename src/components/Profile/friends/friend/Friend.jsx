import classes from '../Friends.module.css'

const Friend = ({name}) => {
    return (
        <div className={classes.wrapper__cicle__item}>
           <div></div>
           <p>{name}</p>
        </div>
    )
};

export default Friend; 