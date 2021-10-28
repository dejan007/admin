import React, { useState, useContext } from 'react';
import styles from './onePost.module.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ThemeContext from '../../../../contexts/ThemeContext';
import Tooltip from "@material-ui/core/Tooltip";
import Router from 'next/router';

function OnePost({ id, title, body }) {
    const { theme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const images = ['mountains-5051149_1920.jpg', 'mountains-5801628_1920.jpg', 'sea-6159674_1920.jpg', 'woman-6012907_1920.jpg' ]
    const authors = ['Jack','Alison','Peter','Theresa']

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div  className= {`${styles.container} ${theme}`} onClick={handleOpen}>
                <img src={'images/' + images[id % 4]} className={styles.postImage} />
                <div className={styles.blogText}>
                <div className={styles.title}>{title}</div>
                <div className={styles.body}>{body}</div>
                </div>
            </div>
            <Modal
                aria-labelledby="post-title"
                aria-describedby="post-body"
                className={styles.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={`${styles.modalContainer} ${theme}`}>
                    <img src={'images/' + images[id % 4]} className={styles.postImage} />
                        <h3 id="post-title">{title}</h3>
                        <p id="post-body">{body}{body}</p>
                        <Tooltip title="Click to go to authors screen" placement="top">
                        <div className={styles.author} onClick={() => Router.push('/authors')}>Author: {authors[id%4]}</div>
                        </Tooltip>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

export default OnePost;