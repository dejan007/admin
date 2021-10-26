import React, { useState } from 'react';
import Head from 'next/head'
import Layout from '../../components/ui/Layout/Layout'
import styles from './contact.module.scss';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function Index() {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [validMail, setValidMail] = useState(false);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [popUpText, setPopUpText] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleMailChange = (e) => {
    setValidMail(validateEmail(e.target.value));
    setMail(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const validateEmail = (email) => {
        var regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
    
  const handleSubmit = () =>  {
    setPopUpOpen(true);
    if (name && mail && validMail && message) {
      setPopUpText('Thanks for submitting  your message !');
    } else if (!name || !mail || !message) {
      setPopUpText('Please fill in all fields !')
    } else (
      setPopUpText('Please fill in a valid email !')
    )

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
          {mail && validMail && <CheckCircleIcon className={styles.checkIcon}/> }
        </div>
        <div className={styles.inputContainer}>
          <textarea className={styles.textField} value={message} name="text" placeholder="Your message/question" onChange={handleMessageChange} />
          {message && <CheckCircleIcon className={styles.checkIconMessage}/> }
        </div>
        <button className={styles.contactButton} onClick={handleSubmit}> Contact us !</button>

        {popUpOpen &&
        <div className={styles.popUp}>
          <div className={styles.line}></div>
          <div className={styles.popUpText}>
            {popUpText}
          </div>
        
        </div>
      }
      </div>
      
      
      

    </Layout>
  )
}