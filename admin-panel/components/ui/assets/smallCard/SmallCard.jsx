
import React from 'react';
import styles from './smallCard.module.scss';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function SmallCard({ arrow, value, title }) {

    return(
        <div className={styles.container}>
            <>
            
            <div className={styles.value}><KeyboardArrowDownIcon />{value}%</div>
            </>
            <div className={styles.title}>{title}</div>
        </div>
    );
}

export default SmallCard;