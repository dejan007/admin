
import React from 'react';
import styles from './smallCard.module.scss';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function SmallCard({ arrow, value, title }) {

    return(
        <div className={styles.container}>
            <>
            
            <div className={styles.value}><ArrowUpwardIcon />{value}%</div>
            </>
            <div className={styles.title}>{title}</div>
        </div>
    );
}

export default SmallCard;