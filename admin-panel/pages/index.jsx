import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/ui/Layout/layout'
import utilStyles from '../styles/utils.module.css'
import MainPanel from '../components/Home/MainPanel'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MainPanel />
    </Layout>
  )
}