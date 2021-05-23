import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import Title from './Title';

export default function Chart({ title,  xTitle, yTitle, data}: {title: string, xTitle?: string, yTitle?: string, data: {time: string, value: number}[]}) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} >
            {xTitle}
          </XAxis>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              {yTitle}
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="value" stroke={theme.palette.primary.main} dot={false} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}