import React, { useEffect } from "react";
import Head from 'next/head'
import Layout from '../components/ui/Layout/Layout'
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
        <title>Home</title>
      </Head>
     
    </Layout>
  )
}