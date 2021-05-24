import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Layout from '../../components/ui/Layout/Layout'
import axios from 'axios';
import OnePost from '../../components/ui/assets/onePost/OnePost';
import styles from './posts.module.scss';

export default function Index() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchPosts();
  }, [])

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
    setPosts(response.data)
  }

  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
      {posts &&
        <>
          <div className={styles.postsContainer}>
            {posts.map((post) => (
              <OnePost title={post.title} body={post.body} id={post.id}/>
            )
            )}
          </div>
        </>
      }
    </Layout >
  )
}