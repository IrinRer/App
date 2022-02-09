import { useEffect, useState } from 'react';
import { useTheme } from '../hook/useTheme';
import classes from './Setting.module.scss';

const Setting = () => {
    const {theme, setTheme} = useTheme();

   const setDarkTheme = () => {
       setTheme('dark');
   };

   const setLightTheme = () => {
      setTheme('light');
   };

    return (
        <div className={classes.wrapper}>
            <h2>Choose your theme</h2>
            <div className={classes.changeTheme}>
                <button className={classes.buttonDark} onClick={setDarkTheme}>Go to the dark side</button>
                <button className={classes.buttonLight} onClick={setLightTheme}>Go to the light side</button>
            </div>
        </div>
    );
};

export default Setting;