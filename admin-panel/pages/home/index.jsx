import React from 'react';
import Head from 'next/head'
import Layout from '../../components/ui/Layout/layout'
import MainPanel from '../../components/Home/MainPanel';

export default function Index() {
    
  return (
    <Layout>
      
     <Head>
        <title>Home</title>
      </Head>
      <h1>My home branch</h1>
      <MainPanel />
    </Layout>
  )
}