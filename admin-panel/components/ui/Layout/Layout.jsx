import React, { useContext, useState, useEffect } from 'react';
import styles from './layout.module.scss'
import Link from 'next/link'
import Header from '../Header/Header.jsx';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { useRouter } from 'next/router';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ThemeContext from '../../../contexts/ThemeContext';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';

export default function Layout({ children }) {
    const { theme, setTheme } = useContext(ThemeContext);
    const router = useRouter();
    const [visible, setVisible] = useState();



    return (
        <>
            <Header />
            <MenuIcon className={styles.menuIcon} onClick = {() => setVisible(!visible)}/>
          
            <div className={visible ? `${styles.container} ${styles.visible}` : styles.container}>
                
                <div className={styles.navigationWrapper}>
                    <Link href="/home">
                        <a className={router.route==='/home' ? styles.navActive: undefined}>
                             <EqualizerIcon className={`${styles.icon} ${styles.homeIcon}`} />Home</a>
                    </Link>
                    <Link href="/posts">
                        <a className={router.route==='/posts' ? styles.navActive: undefined}>
                         <LibraryBooksIcon className={`${styles.icon} ${styles.postsIcon}`}/>Posts</a>
                    </Link>
                    <Link href="/users">
                        <a className={router.route==='/users' ? styles.navActive: undefined}>
                            <PeopleAltIcon className={`${styles.icon} ${styles.usersIcon}`}/>Users</a>
                    </Link>
                    <Link href="/tasks">
                        <a className={router.route==='/tasks' ? styles.navActive: undefined}>
                            <AssignmentTurnedInIcon className={`${styles.icon} ${styles.tasksIcon}`}/>Tasks</a>
                    </Link>
                    <Link href="/orders">
                        <a className={router.route==='/orders' ? styles.navActive: undefined}>
                            <ShoppingCartIcon className={`${styles.icon} ${styles.ordersIcon}`}/>Orders</a>
                    </Link>
                    <Link href="/contact">
                        <a className={router.route==='/contact' ? styles.navActive: undefined}>
                            <EmailIcon className={`${styles.icon} ${styles.contactIcon}`}/>Contact</a>
                    </Link>
                    
                </div>

            </div>
            
            <div className={`${styles.content} ${theme}`}>
                {children}
            </div>
        </>
    )
}
