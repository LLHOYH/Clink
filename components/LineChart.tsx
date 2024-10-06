'use client'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";

const LineChart = ({ stakeVol,stakeDate,chartName }:{ stakeVol:{name:string;y:number | string;color:string}[]; stakeDate?:string[];chartName:string }) => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  
  const options = {
    title: {
      text: chartName,
      style: {
        color: "white",
      },
    },
    series: [
      {
        name: "Volume",
        type: "line",
        data: stakeVol,
        color: "#D9D9D9",
        lineWidth: 1,
        marker: {
          radius: 8,
        },
      },
    ],
    xAxis: {
      title: {
        text: "Date (last 14 days)",
      },
      categories:stakeDate,
      labels: {
        style: {
          color: "white",
          fontSize: "0.8rem",
        },
      },
    },
    yAxis: {
      title: {
        text: "Rewards (USD)",
      },
      gridLineColor: "#496C6D",
      tickColor: "#fff",
      labels: {
        style: {
          color: "#8E8A8A",
        },
      },
    },
    chart: {
      backgroundColor: "black",
    },
    legend: {
      itemStyle: {
        color: "white",
      },
    },
  };

//   return <div></div>;
    return <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />;
};

export default LineChart;
