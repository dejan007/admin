import React from 'react';
import Head from 'next/head'
import Layout from '../../components/ui/Layout/Layout'
import DataTable from '../../components/ui/assets/usersTable/UsersTable';
import HorizontalUsersScroll from '../../components/ui/assets/horizontalScroll/HorizontalUsersScroll';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Users</title>
      </Head>
      <DataTable />

      <HorizontalUsersScroll />
    </Layout>
  )
}