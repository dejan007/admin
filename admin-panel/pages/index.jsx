import React, { useEffect } from "react";
import Head from 'next/head'
import Layout, { siteTitle } from '../components/ui/Layout/layout'
import Router from 'next/router'

export default function Home() {

  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push('/home')
    }
  });
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
     
    </Layout>
  )
}