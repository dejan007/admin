import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  FlexibleXYPlot,
  FlexibleWidthXYPlot
} from 'react-vis';


function LineChart () {
    const axisStyle = {
        ticks: {
          fontSize: '14px',
          color: '#333'
        },
        title: {
          fontSize: '16px',
          color: '#333'
        }
      };
 
    return(
        <FlexibleWidthXYPlot height={250}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis
          hideLine
          title="X"
          labelFormat={v => `Value is ${v}`}
          labelValues={[2]}
          tickValues={[1, 1.5, 2, 2.5, 3, 4]}
          style={axisStyle}
        />
        <YAxis hideTicks />
        <LineSeries data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 11}]} />
      </FlexibleWidthXYPlot>
    );
}

export default LineChart;