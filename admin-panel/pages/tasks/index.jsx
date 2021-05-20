import React, { useState } from 'react';
import Head from 'next/head'
import Layout from '../../components/ui/Layout/layout'
import TasksTable from '../../components/tasks/tasksTable/TasksTable';
import AddTask from '../../components/tasks/addTask/addTask';
import styles from './tasks.module.scss';

export default function Index() {

  const [tasks, setTasks] = useState([
    {id:1, title:"Button style" , responsible:"Jack", status:'TODO' },
    {id:2, title:"Create login form" , responsible:"Alice", status:'IN PROGRESS' },
    {id:234003, title:"Fix bugs" , responsible:"Helene", status:'IN REVIEW' },
    {id:3311, title:"Create modal" , responsible:"Eric", status:'FINISHED' },
    {id:211, title:"Delete icons" , responsible:"Sawyer", status:'TODO' },
]);

  return (
    <Layout>
      <Head>
        <title>Tasks</title>
      </Head>
      <h1>Tasks</h1>
      <div className={styles.contentWrapper}>
        <TasksTable  tasks={tasks}/>
        <AddTask tasks={tasks} setTasks={setTasks}/>
      </div>
    </Layout>
  )
}