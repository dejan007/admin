import React, { useContext } from 'react';
import ThemeContext from '../../../contexts/ThemeContext';
import styles from './header.module.scss';
import Router from 'next/router';


function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <>
            <head>
                <meta name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            </head>
            <div className={styles.headerContainer}>
                <div className={styles.headerText}>
                    For any questions feel free to contact us
                    <span onClick={() => Router.push('/contact')}> here</span>
                </div>
                <button onClick={changeTheme} className={`${styles.button} ${theme}`}> Change theme</button>
            </div>
        </>
    )
}

export default Header;