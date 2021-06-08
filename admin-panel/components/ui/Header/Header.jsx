import React, { useContext } from 'react';
import ThemeContext from '../../../contexts/ThemeContext';
import styles from './header.module.scss'


function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        theme==='light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <div className={styles.headerContainer}>
            <button onClick={changeTheme} className={`${styles.button} ${theme}`}> Change theme</button>
        </div>
    )
}

export default Header;