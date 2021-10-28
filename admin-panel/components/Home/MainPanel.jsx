import { Grid } from '@material-ui/core';
import React from 'react';
import SmallCard from '../ui/assets/smallCard/SmallCard';
import BarChart from './Charts/barChart/BarChart';
import SimpleBarChart from './Charts/simpleBarChart/SimpleBarChart';
import SimpleRadarChart from './Charts/radarChart/RadarChart';
import PieChart1 from './Charts/pieChart/PieChart';
import LineChart1 from './Charts/lineChart/LineChart';
import SimplePieChart from './Charts/simplePieChart/SimplePieChart';
import styles from './mainPanel.module.scss';
import { classnames } from '@material-ui/data-grid';

function MainPanel() {

    return (
        <div className={styles.container}>
            <Grid container spacing={2}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <SmallCard
                        value={13}
                        title={'More users this month'}
                    />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <SmallCard
                        value={31}
                        title={'More users today'}
                    />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <SmallCard
                        value={12.4}
                        title={'More subscriptions'}
                    />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <SmallCard
                        value={22.4}
                        title={'More posts written'}
                    />
                </Grid>
            </Grid>
        <div className={styles.chartsWrapper}>
            <Grid className={styles.chartWrapper}>
                <SimpleBarChart/>
            </Grid>
            <Grid className={styles.chartWrapper}>
                <SimplePieChart/>
            </Grid>

            <Grid className={styles.chartWrapper}>
            
            <div className={styles.userCard}>
            <div className={styles.imageWrapper}>
            <img
                src={"/images/" + 'photo4.jpg'}
                alt="Picture of the author"
                quality={100}
              />
            </div>
            <div className={styles.userName}>Teresa Smith</div>
            <div className={styles.userRating}>97</div>
            <div className={styles.userMessage}>Author with best rating last week</div>
            </div>

            </Grid>

            <Grid className={styles.chartWrapper}>
                <LineChart1/>
            </Grid>

        </div>    
        </div>
    );
}

export default MainPanel;