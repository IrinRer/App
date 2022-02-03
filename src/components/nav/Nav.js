import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.wrapper}>
            <div className={classes.wrapper__item}>
                 <NavLink to='/Profile'className={classes.item_link}>Profile</NavLink>
            </div>
            <div className={classes.wrapper__item}>
                 <NavLink to='/dialogs' className={classes.item_link}>Messages</NavLink>
            </div>
            {/* <div className ={classes.wrapper__item}>
                 <NavLink to='/news' className={classes.item_link}>News</NavLink>
            </div>
            <div className={classes.wrapper__item}>
                 <NavLink to='/music' className={classes.item_link}>Music</NavLink>
            </div> */}
            <div className={classes.wrapper__item}>
                 <NavLink to='/setting' className={classes.item_link}>Setting</NavLink>
            </div>
            <div className ={classes.wrapper__item}>
                 <NavLink to='/users' className={classes.item_link}>Find users</NavLink>
            </div>
      </nav>
    );
}

export default Nav;