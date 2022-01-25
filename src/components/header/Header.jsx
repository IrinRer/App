import classes from './Header.module.css';
import logo from '/Devel/js/react/react-1/my-app/src/img/Logo.svg';

const Header = () => {
    return (
        <div className={classes.header}>
            <img src={logo} alt="logo" />

            <div className={classes.wall}></div>
        </div>
    );
};

export default Header; 