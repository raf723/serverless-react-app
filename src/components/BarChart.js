import React from "react";
import {
  Bar,
  XAxis,
  YAxis,
  Label,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Example({ counts }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={counts}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="os" height={50}>
          <Label
            value="Operating System"
            fill="rgb(75, 75, 180)"
            position="insideBottom"
          />
        </XAxis>
        <YAxis allowDecimals={false}>
          <Label
            value="Redirects"
            offset={0}
            angle={-90}
            fill="rgb(75, 75, 180)"
            position="center"
          />
        </YAxis>
        <Bar dataKey="count" fill="rgb(75, 75, 180)" />
      </BarChart>
    </ResponsiveContainer>
  );
}
