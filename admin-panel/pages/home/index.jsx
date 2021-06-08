import React from 'react';
import Head from 'next/head'
import Layout from '../../components/ui/Layout/Layout'
import MainPanel from '../../components/Home/MainPanel';

export default function Index() {
    
  return (
    <Layout>
      
     <Head>
        <title>Home</title>
      </Head>
      <MainPanel />
    </Layout>
  )
}