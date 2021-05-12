import React from 'react';
import SmallCard from '../ui/assets/SmallCard';
import styles from './mainPanel.module.scss';
function MainPanel() {

    return(
    <div className={styles.container}>
        <SmallCard
        value={56}
        title={'Bitcoin'}
    />
    </div>
    );
}

export default MainPanel;