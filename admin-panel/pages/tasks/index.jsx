import React, { useState } from 'react';
import Head from 'next/head'
import Layout from '../../components/ui/Layout/Layout'
import TasksTable from '../../components/tasks/tasksTable/TasksTable';
import AddTask from '../../components/tasks/addTask/AddTask';
import styles from './tasks.module.scss';
import TaskDescription from '../../components/tasks/taskDescription/TaskDescription';

export default function Index() {

  const [tasks, setTasks] = useState([
    {id:1, title:"Write about Weather" , responsible:"Jack", status:'TODO' },
    {id:2, title:"Create login form" , responsible:"Alice", status:'IN PROGRESS' },
    {id:234003, title:"Fix last article pls" , responsible:"Helene", status:'IN REVIEW' },
    {id:3311, title:"Research about gold price" , responsible:"Eric", status:'FINISHED' },
    {id:211, title:"Interview with CEO" , responsible:"Sawyer", status:'TODO' },
]);

const [showingTask, setShowingTask] = useState(false);

  return (
    <Layout>
      <Head>
        <title>Tasks</title>
      </Head>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <div className={styles.contentWrapper}>
        <TasksTable  tasks={tasks} setTasks={setTasks} showingTask={showingTask} setShowingTask={setShowingTask}/>
        {showingTask &&
        <TaskDescription showingTask={showingTask}/>
      }
      </div>
    </Layout>
  )
}