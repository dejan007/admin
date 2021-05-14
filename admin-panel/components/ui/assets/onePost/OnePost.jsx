import React, { useState } from 'react';
import styles from './onePost.module.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

function OnePost({ id, title, body }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={styles.container} onClick={handleOpen}>
                <div className={styles.title}>{title}</div>
                <div className={styles.body}>{body}</div>
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
                    <div className={styles.modalContainer}>
                        <h2 id="post-title">{title}</h2>
                        <p id="post-body">{body}</p>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

export default OnePost;