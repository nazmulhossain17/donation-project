'use client'
import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

// Define the ProgressReportCard component
const ProgressReportCard: React.FC = () => {
  useEffect(() => {
    // Ensure the code runs on the client only
    if (typeof window !== 'undefined') {
      // ApexCharts options and config
      const getChartOptions = () => {
        return {
          series: [90, 85, 70],
          colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],
          chart: {
            height: "380px",
            width: "100%",
            type: "radialBar",
            sparkline: {
              enabled: true,
            },
          },
          plotOptions: {
            radialBar: {
              track: {
                background: '#E5E7EB',
              },
              dataLabels: {
                show: false,
              },
              hollow: {
                margin: 0,
                size: "32%",
              }
            },
          },
          grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
              left: 2,
              right: 2,
              top: -23,
              bottom: -20,
            },
          },
          labels: ["Done", "In progress", "To do"],
          legend: {
            show: true,
            position: "bottom",
            fontFamily: "Inter, sans-serif",
          },
          tooltip: {
            enabled: true,
            x: {
              show: false,
            },
          },
          yaxis: {
            show: false,
            labels: {
              formatter: function (value: number) {
                return value + '%';
              }
            }
          }
        }
      }

      // Check if document and ApexCharts are defined before rendering the chart
      if (document.getElementById("radial-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.querySelector("#radial-chart") as HTMLElement, getChartOptions());
        chart.render();
      }
    }
  }, []); // Empty dependency array ensures useEffect runs only once

  // JSX for rendering the component
  return (
    <div className="h-screen flex items-center justify-center">
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="py-6" id="radial-chart"></div>
    </div>
  </div>  

  );
};

// Export the component as default
export default ProgressReportCard;
