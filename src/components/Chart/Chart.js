import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
    const totalMax = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value));
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={totalMax}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
