import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './add-task.module.scss';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';


function AddTask({ tasks, setTasks }) {
    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [responsible, setResponsible] = useState('');
    const [status, setStatus] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleResponsibleChange = (e) => {
        setResponsible(e.target.value);
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    }

    const addTask = () => {
        const newTask = { id: 231234, title: title, responsible: responsible, status: status };
        setTasks([...tasks, newTask]);
    }

    return (
        <div className={styles.container}>
            <div>Add new task</div>
            <input type="text" placeholder="Task title" onChange={handleTitleChange} className={styles.inputField} />
            <input type="text"  placeholder="Responsible person" onChange={handleResponsibleChange} className={styles.inputField} />

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={status}
                    onChange={handleStatusChange}
                    label="Status"
                >
                    <MenuItem value={'TODO'}>TODO</MenuItem>
                    <MenuItem value={'IN PROGRESS'}>IN PROGRESS</MenuItem>
                    <MenuItem value={'IN REVIEW'}>IN REVIEW</MenuItem>
                    <MenuItem value={'FINISHED'}>FINISHED</MenuItem>
                </Select>
            </FormControl>
            <Button variant='contained' color='primary' onClick={addTask}>Add Task</Button>

        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default AddTask;