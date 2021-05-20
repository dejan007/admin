import React from 'react';
import TaskItem from '../taskItem/taskItem';
import styles from './tasks-table.module.scss';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';

function TasksTable({tasks}) {


    return (
        
        <div className={styles.tableContainer}>
            <div className={styles.tableHeader}><AssignmentLateIcon /> Task list</div>
            {tasks &&
            tasks.map((task) => (
                <TaskItem  key ={task.id} id={task.id} title={task.title} responsible={task.responsible} status={task.status} />
            ))}
        </div>
        
    );
}

export default TasksTable;