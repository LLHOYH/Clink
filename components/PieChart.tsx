'use client'
import React, { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface PieChartProps {
  data: { name: string; y: number; color?: string }[];
  chartName: string;
  type:string;
}

const PieChart: React.FC<PieChartProps> = ({ data, chartName, type }) => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    credits: {
      enabled: false,
    },
    chart: {
      type: 'pie',
      backgroundColor: 'black',
    },
    title: {
      text: chartName,
      style: {
        color: "white",
      },
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'default',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y:.1f}',
            color: 'white',
            style: {
              textOutline: 'none'
            }
          }
      }
    },
    series: [{
      name:type,
      data
    }] as Highcharts.SeriesPieOptions[],
    legend: {
      itemStyle: {
        color: "white",
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />;
};

export default PieChart;