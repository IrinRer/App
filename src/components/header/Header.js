import { NavLink } from 'react-router-dom';
import classes from "./Header.module.scss";
import logo from '../../img/Logo.svg';

const Header = ({login, isAuth}) => {
    return (
        <div className={classes.header}>
            <div className={classes.header__wrapper}>
                <img src={logo} alt="logo" />
                {isAuth ? login : <NavLink to={'./login'} className={classes.link}>Login in</NavLink>}
            </div>
            <div className={classes.wall}></div>
        </div>
    );
};

export default Header; 