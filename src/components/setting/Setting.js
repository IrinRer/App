import classes from './Setting.module.scss';

const Setting = () => {
    return (
        <div>
            <h2>Choose your theme</h2>
            <div className={classes.changeTheme}>
                <button className={classes.buttonDark}>Go to the dark side</button>
                <button className={classes.buttonLight}>Go to the light side</button>
            </div>
        </div>
    );
};

export default Setting;