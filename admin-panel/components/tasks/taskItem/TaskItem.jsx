import React from 'react';
import styles from './task-item.module.scss';

function TaskItem({id, title, responsible, status}) {

    return(
        <div key={id} className={styles.container}>
            <div className={`${styles.line} ${styles.blueLine}`}></div>
            <div className={styles.textWrapper}>
                <div className={styles.title}>{title}</div>
                <div className={styles.responsible}>{responsible}</div>
            </div>
            <div className={status === "TODO" ? `${styles.status} ${styles.statusTODO}` :
                            status === "IN PROGRESS" ? `${styles.status} ${styles.statusINPROGRESS}`:
                            status === "IN REVIEW" ? `${styles.status} ${styles.statusINREVIEW}`:
                            `${styles.status} ${styles.statusFINISHED}`
                            }>{status}</div>
            
        </div>
    );
}

export default TaskItem;