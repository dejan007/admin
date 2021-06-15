import React from 'react'
import { FlexibleWidthXYPlot, VerticalBarSeries } from 'react-vis';
import { XYPlot, XAxis, YAxis } from 'react-vis';

function BarChart() {

    const data1 = [
        {
            x: 0,
            y: 10
        },
        {
            x: 1,
            y: 10.15557004780211
        },
        {
            x: 2,
            y: 11.641757215729985
        },
        {
            x: 3,
            y: 12.356117691011278
        },
        {
            x: 4,
            y: 12.43105788204668
        },
        {
            x: 5,
            y: 12.800444185806136
        },
        {
            x: 6,
            y: 12.411702047511362
        },
        {
            x: 7,
            y: 13.150948147173562
        },
        {
            x: 8,
            y: 14.091422230894365
        }
    ]

    return (
        <FlexibleWidthXYPlot xType="ordinal" height={350}>
             <XAxis />
            <YAxis />
            <VerticalBarSeries
                data={data1}
                style={{}}
            />
            <VerticalBarSeries
                data={[
                    {
                        x: 0,
                        y: 10
                    },
                    {
                        x: 1,
                        y: 11.68707863401701
                    },
                    {
                        x: 2,
                        y: 9.722030637398754
                    },
                    {
                        x: 3,
                        y: 9.013862994125144
                    },
                    {
                        x: 4,
                        y: 8.608592574638074
                    },
                    {
                        x: 5,
                        y: 9.130387795227868
                    },
                    {
                        x: 6,
                        y: 11.149368834905566
                    },
                    {
                        x: 7,
                        y: 10.54590633615194
                    },
                    {
                        x: 8,
                        y: 11.779145069915272
                    }
                ]}
                style={{}}
            />

        </FlexibleWidthXYPlot>

    );
}

export default BarChart;