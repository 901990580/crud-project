import React from "react";
import "./App.css";
import { BarChart } from '@mui/x-charts/BarChart';


export const Dashboard = () => {
  return (
    <div className="dashboard container">
      <h1>Admin Dashboard</h1>
      <p>Welcome, love to see you back.</p>

      <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={290}
        xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </div>
  );
};
