import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/ui/Layout/layout'
import SmallCard from '../../components/ui/assets/SmallCard'


export default function FirstPost() {
  return (
    <Layout>
      
     <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  )
}