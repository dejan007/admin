import React from 'react';
import Head from 'next/head'
import Layout from '../../components/ui/Layout/layout'
import DataTable from '../../components/ui/assets/usersTable/UsersTable';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Users</title>
      </Head>
      <h1>Users</h1>
      <DataTable />
    </Layout>
  )
}