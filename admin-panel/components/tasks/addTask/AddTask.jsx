import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './add-task.module.scss';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


function AddTask({ tasks, setTasks }) {
    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [responsible, setResponsible] = useState('');
    const [status, setStatus] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
        const newTask = { id: Math.floor(Math.random() * 99999999), title: title, responsible: responsible, status: status };
        setTasks([...tasks, newTask]);
        setTitle('');
        setResponsible('');
        setStatus('');
    }

    return (
        <div className={styles.container}>
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
                        <div className={styles.addTaskHeader} onClick={handleOpen}> <AddToQueueIcon />Add new task</div>
                        <input type="text" placeholder="Task title" onChange={handleTitleChange} className={styles.inputField} value={title} />
                        <input type="text" placeholder="Responsible person" onChange={handleResponsibleChange} className={styles.inputField} value={responsible} />

                        <FormControl variant="outlined">
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
                        <Button
                            variant='contained'
                            color='primary'
                            className={styles.addButton}
                            onClick={addTask}
                            disabled={title === '' || responsible === '' || status === ''}
                        > Add Task</Button>
                    </div>
                </Fade>
            </Modal>

            <div className={styles.addTaskHeader} onClick={handleOpen}> <AddToQueueIcon />Add new task</div>
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
        marginLeft: '10px'
    },
}));

export default AddTask;