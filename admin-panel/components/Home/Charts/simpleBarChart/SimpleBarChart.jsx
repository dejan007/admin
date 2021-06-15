import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    Delivered: 4000,
    InProgress: 2400,
    
  },
  {
    name: 'Tuesday',
    Delivered: 3000,
    InProgress: 1398,
  },
  {
    name: 'Wednesday',
    Delivered: 2000,
    InProgress: 9800,
  },
  {
    name: 'Thursday',
    Delivered: 2780,
    InProgress: 3908,
  },
  {
    name: 'Friday',
    Delivered: 1890,
    InProgress: 4800,
  },
  {
    name: 'Saturday',
    Delivered: 2390,
    InProgress: 3800,
  },
  {
    name: 'Sunday',
    Delivered: 3490,
    InProgress: 4300,
  },
];

function SimpleBarChart () {
  
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="Delivered" dataKey="Delivered" stackId="a" fill="#d84aac" />
          <Bar name="In Progress" dataKey="InProgress" stackId="b" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  export default SimpleBarChart;

