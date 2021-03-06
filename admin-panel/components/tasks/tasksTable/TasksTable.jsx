import React, { useContext } from 'react';
import TaskItem from '../taskItem/TaskItem';
import styles from './tasks-table.module.scss';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import ThemeContext from '../../../contexts/ThemeContext';


function TasksTable({tasks, setTasks, showingTask, setShowingTask}) {
    const { theme } = useContext(ThemeContext);
    const deleteOneTask = (id) => {     
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        
        <div className= {`${styles.tableContainer} ${theme}`}>
            <div className={styles.tableHeader}><AssignmentLateIcon /> Task list</div>
            {tasks &&
            tasks.map((task) => (
                <TaskItem  
                key ={task.id} 
                id={task.id} 
                title={task.title} 
                responsible={task.responsible} 
                status={task.status} 
                deleteOneTask={deleteOneTask} 
                setShowingTask={setShowingTask}
                />
            ))}
            { tasks.length === 0 && 
            <div className={styles.noTasks}>There are no task at the moment</div>

            }
        </div>
        
    );
}

export default TasksTable;