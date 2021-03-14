import React from "react";
import Dashboard from "./Dashboard";
import { Chart } from "react-charts";

export default function Dashboards() {
    
    
    const axes = React.useMemo(
        () => [
          {
            primary: true,
            type: "time",
            position: "bottom",
            // filterTicks: (ticks) =>
            //   ticks.filter((date) => +timeDay.floor(date) === +date),
          },
          { type: "linear", position: "left" },
        ],
        []
      );

      
    return (
    <Dashboard>
        <Chart data={data} series={series} axes={axes} tooltip />
    </Dashboard>
    );
}