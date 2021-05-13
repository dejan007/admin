import React from 'react';
import styles from './onePost.module.scss';


function OnePost({ id, title, body }) {

    return(
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{body}</div>
        </div>
    );
}

export default OnePost;