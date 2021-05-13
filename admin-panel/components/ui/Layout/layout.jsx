import React from 'react';
import styles from './layout.module.scss'
import Link from 'next/link'
import Header from '../Header/Header.jsx';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { useRouter } from 'next/router';

const name = 'Dejan'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {

    const router = useRouter();
    console.log(router.route);
    return (
        <>
            <Header />
            <div className={styles.container}>
                <LocalBarIcon />
                <div className={styles.navigationWrapper}>
                    <Link href="/home">
                        <a className={router.route==='/home' ? styles.navActive: undefined}>Home</a>
                    </Link>
                    <Link href="/posts">
                        <a className={router.route==='/posts' ? styles.navActive: undefined}>Posts</a>
                    </Link>
                    <Link href="/users">
                        <a className={router.route==='/users' ? styles.navActive: undefined}>Users</a>
                    </Link>
                    <Link href="/buttons">
                        <a className={router.route==='/buttons' ? styles.navActive: undefined}>Our buttons</a>
                    </Link>
                    <Link href="/contact">
                        <a className={router.route==='/contact' ? styles.navActive: undefined}>Contact</a>
                    </Link>
                </div>

            </div>
            <div className={styles.content}>
                <main>{children}</main>
            </div>
        </>
    )
}