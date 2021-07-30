import React, { useState } from 'react';
import Head from 'next/head'
import Layout from '../../components/ui/Layout/Layout'
import styles from './contact.module.scss';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function Index() {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleMailChange = (e) => {
    setMail(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <Layout>
      
     <Head>
        <title>Contact</title>
      </Head>
      <h2 className={styles.head}>Get in touch with us</h2>

      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <input className={styles.inputField} value={name} type="text" name="name" placeholder="Your name" onChange={handleNameChange}/>
          {name && <CheckCircleIcon className={styles.checkIcon}/> }
        </div>
        <div className={styles.inputContainer}>
          <input className={styles.inputField} value={mail} type="text" name="email" placeholder="Your mail" onChange={handleMailChange} />
          {mail && <CheckCircleIcon className={styles.checkIcon}/> }
        </div>
        <div className={styles.inputContainer}>
          <textarea className={styles.textField} value={message} name="text" placeholder="Your message/question" onChange={handleMessageChange} />
          {message && <CheckCircleIcon className={styles.checkIconMessage}/> }
        </div>
        <button className={styles.contactButton}> Contact us !</button>
      </div>
      

    </Layout>
  )
}