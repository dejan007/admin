import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'North America', value: 28 },
    { name: 'Europe', value: 20 },
    { name: 'Asia', value: 21 },
    { name: 'South America', value: 11 },
    { name: 'Australia', value: 10 },
    { name: 'Africa', value: 10 },
  ];

  function SimplePieChart() {

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div style={{color: "white", backgroundColor: 'gray', padding:'0 3px 0 3px'}} >
                    <p>{payload[0].name}: {payload[0].value}% </p>
                </div>
            );
        }
    
        return null;
    };
    return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    );
  }

export default SimplePieChart;