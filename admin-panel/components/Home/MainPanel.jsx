import { Grid } from '@material-ui/core';
import React from 'react';
import SmallCard from '../ui/assets/smallCard/SmallCard';
import BarChart from './Charts/barChart/BarChart';
import SimpleBarChart from './Charts/simpleBarChart/SimpleBarChart';
import SimpleRadarChart from './Charts/radarChart/RadarChart';
import PieChart1 from './Charts/pieChart/PieChart';
import LineChart1 from './Charts/lineChart/LineChart';
import styles from './mainPanel.module.scss';

function MainPanel() {

    return (
        <div className={styles.container}>
            <Grid container spacing={2}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <SmallCard
                        value={56}
                        title={'Bitcoin'}
                    />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <SmallCard
                        value={31}
                        title={'Polkadot'}
                    />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <SmallCard
                        value={12.4}
                        title={'Theta'}
                    />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <SmallCard
                        value={22.4}
                        title={'Gold'}
                    />
                </Grid>
            </Grid>
        <div className={styles.chartsWrapper}>
            <Grid className={styles.chartWrapper}>
                <SimpleBarChart/>
            </Grid>
            <Grid className={styles.chartWrapper}>
                <SimpleRadarChart/>
            </Grid>

            <Grid className={styles.chartWrapper}>
                <PieChart1/>
            </Grid>

            <Grid className={styles.chartWrapper}>
                <LineChart1/>
            </Grid>

        </div>    
        </div>
    );
}

export default MainPanel;