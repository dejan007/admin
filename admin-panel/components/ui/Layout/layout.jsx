import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import Link from 'next/link'
import Header from '../Header/Header.jsx';

const name = 'Dejan'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  return (
      <>
      <Header />
    <div className={styles.container}>
       <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/posts/first-post">
            <a>Posts</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/about">
            <a>Contact</a>
        </Link>
      
    </div>
    <div className={styles.content}>
    <main>{children}</main>
    </div>
    </>
  )
}