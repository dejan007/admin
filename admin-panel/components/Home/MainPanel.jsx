import { Grid } from '@material-ui/core';
import React from 'react';
import SmallCard from '../ui/assets/smallCard/SmallCard';
import styles from './mainPanel.module.scss';
function MainPanel() {

    return (
        <div className={styles.container}>
            <Grid container spacing={2}>
                <Grid item>
                    <SmallCard
                        value={56}
                        title={'Bitcoin'}
                    />
                </Grid>
                <Grid item>
                    <SmallCard
                        value={31}
                        title={'Polkadot'}
                    />
                </Grid>
                <Grid item>
                    <SmallCard
                        value={12.4}
                        title={'Theta'}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default MainPanel;