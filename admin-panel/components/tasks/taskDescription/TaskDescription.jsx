import React from 'react';
import styles from './task-description.module.scss';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';


function TaskDescription({showingTask}) {
    return(
        <div className={styles.container}>
          <div className={styles.header}><WbIncandescentIcon />{showingTask.title}</div>
          <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
         <div className={styles.appointed}> Task appointed to:  <span>{showingTask.responsible}</span></div>
         <div className={styles.status}>Status: {showingTask.status}</div>
        </div>
    );
}

export default TaskDescription;