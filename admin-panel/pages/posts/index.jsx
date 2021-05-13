import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/ui/Layout/layout'
import SmallCard from '../../components/ui/assets/SmallCard'


export default function Index() {
  return (
    <Layout>
      
     <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
    </Layout>
  )
}