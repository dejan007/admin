import React, { useState } from 'react';
import styles from './task-item.module.scss';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function TaskItem({id, title, responsible, status, deleteOneTask, setShowingTask}) {


    return(
        <div key={id} className={styles.container} onMouseEnter={()=>setShowingTask({id: id, title:title, responsible:responsible, status:status})} onMouseLeave={()=>setShowingTask(false)}>
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
                            <DeleteForeverIcon onClick={()  => {deleteOneTask(id); setShowingTask(false)}} />
            
        </div>
    );
}

export default TaskItem;