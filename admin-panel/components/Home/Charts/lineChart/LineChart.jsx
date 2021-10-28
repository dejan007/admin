import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2012',
    uv: 4000,
    pv: 2400,
  },
  {
    name: '2014',
    uv: 3000,
    pv: 1398,
  },
  {
    name: '2016',
    uv: 2000,
    pv: 9800,
  },
  {
    name: '2018',
    uv: 2780,
    pv: 3908,
  },
  {
    name: '2020',
    uv: 1890,
    pv: 4800,
  },
  {
    name: '2022',
    uv: 2390,
    pv: 3800,
  },
  {
    name: '2024',
    uv: 3490,
    pv: 4300,
  },
];

export default function LineChart1() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line name="Male visitors" yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line name="Female visitors" yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }

