import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
];

const BarChartBox = ({ type }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill={type === 'revenue' ? '#60A5FA' : '#34D399'} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartBox;
