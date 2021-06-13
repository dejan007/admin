import React, { useContext } from 'react';
import styles from './layout.module.scss'
import Link from 'next/link'
import Header from '../Header/Header.jsx';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { useRouter } from 'next/router';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ThemeContext from '../../../contexts/ThemeContext';

export default function Layout({ children }) {
    const { theme, setTheme } = useContext(ThemeContext);
    const router = useRouter();

    return (
        <>
            <Header />
            <div className={styles.container}>
                <LocalBarIcon />
                <div className={styles.navigationWrapper}>
                    <Link href="/home">
                        <a className={router.route==='/home' ? styles.navActive: undefined}>
                             <EqualizerIcon className={styles.homeIcon} />Home</a>
                    </Link>
                    <Link href="/posts">
                        <a className={router.route==='/posts' ? styles.navActive: undefined}>
                         <LibraryBooksIcon className={styles.postsIcon}/>Posts</a>
                    </Link>
                    <Link href="/users">
                        <a className={router.route==='/users' ? styles.navActive: undefined}>Users</a>
                    </Link>
                    <Link href="/tasks">
                        <a className={router.route==='/tasks' ? styles.navActive: undefined}>Tasks</a>
                    </Link>
                    <Link href="/orders">
                        <a className={router.route==='/orders' ? styles.navActive: undefined}>Orders</a>
                    </Link>
                    <Link href="/contact">
                        <a className={router.route==='/contact' ? styles.navActive: undefined}>Contact</a>
                    </Link>
                    
                </div>

            </div>
            <div className={`${styles.content} ${theme}`}>
                {children}
            </div>
        </>
    )
}