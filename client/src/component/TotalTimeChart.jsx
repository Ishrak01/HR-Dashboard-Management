import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';
import { useCreationTimeQuery } from '../Features/candidate/candidateApi';

const TotalTimeChart = () => {
  const { data, isLoading, isError } = useCreationTimeQuery();
  const chartRef = useRef(null);

  useEffect(() => {
    if (!isLoading && !isError && data && data.length > 0) {
      const timestamps = data.map(creationTime => new Date(creationTime.createdAt).getTime());
      renderChart(timestamps);
    }
  }, [data, isLoading, isError]);

  const renderChart = (timestamps) => {
    const maxTime = Math.max(...timestamps);
    const minTime = Math.min(...timestamps)

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('timeChart');
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: timestamps.map((_, index) => index + 0), // Adjusted to start from 1
        datasets: [{
          label: 'Candidates Created Over Time',
          data: timestamps.map(time => ((time - minTime) / (maxTime - minTime))),
          borderColor: 'blue',
          borderWidth: 4,
          fill: false
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Candidates'
            },

          }
        }
      }
    });
  };

  return (
    <div>
      <canvas id="timeChart" width="800" height="400"></canvas>
    </div>
  );
};

export default TotalTimeChart;
