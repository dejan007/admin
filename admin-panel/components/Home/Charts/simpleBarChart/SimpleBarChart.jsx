import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    PostsWriten: 10,
    PostsUpdated: 11,
    
  },
  {
    name: 'Tuesday',
    PostsWriten: 12,
    PostsUpdated: 16,
  },
  {
    name: 'Wednesday',
    PostsWriten: 15,
    PostsUpdated: 22,
  },
  {
    name: 'Thursday',
    PostsWriten: 32,
    PostsUpdated: 11,
  },
  {
    name: 'Friday',
    PostsWriten: 22,
    PostsUpdated: 13,
  },
  {
    name: 'Saturday',
    PostsWriten: 4,
    PostsUpdated: 6,
  },
  {
    name: 'Sunday',
    PostsWriten: 7,
    PostsUpdated: 2,
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
          <Bar name="Posts writen" dataKey="PostsWriten" stackId="a" fill="#d84aac" />
          <Bar name="Posts updated" dataKey="PostsUpdated" stackId="b" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  export default SimpleBarChart;

