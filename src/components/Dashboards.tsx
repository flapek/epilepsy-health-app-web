import React from "react";
import { XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas} from 'react-vis';

export default function Dashboards() {
  
  return (
    <XYPlot width={300} height={300} style={{backgroundColor:'white'}}>
    <HorizontalGridLines />
    <VerticalGridLines />
    <XAxis />
    <YAxis />
    {/* <LineSeries
    data={[
      {x: 1, y: 10},
      {x: 2, y: 5},
      {x: 3, y: 15}
    ]}/> */}
    <ChartLabel 
      text="X Axis"
      className="alt-x-label"
      includeMargin={false}
      xPercent={0.025}
      yPercent={1.01}
      />

    <ChartLabel 
      text="Y Axis"
      className="alt-y-label"
      includeMargin={false}
      xPercent={0.06}
      yPercent={0.06}
      style={{
        transform: 'rotate(-90)',
        textAnchor: 'end'
      }}
      />
      <LineSeries
            className="first-series"
            data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
          />
          <LineSeries
            className="third-series"
            curve={'curveMonotoneX'}
            data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
          />
  </XYPlot>
  );
}