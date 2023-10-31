import React, { useEffect, useState } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

import { getCurrencyExchange } from '../../api/fetch';
import { ChartData } from '../../types/ChartData';

import './ChartComponent.scss';

const ChartComponent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currencyData, setCurrencyData] = useState<ChartData | null>(null);
  const chartLabels = Object.keys(currencyData?.rates || {}).slice(0, 40);
  const chartData = Object.values(currencyData?.rates || {}).slice(0, 40);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ChartData = await getCurrencyExchange();
        setCurrencyData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!currencyData) {
    return null;
  }

  const filterAndFormatRates = () => {
    const filteredRates: { [key: string]: number } = {};

    for (const currency in currencyData?.rates) {
      const rate = currencyData?.rates[currency];

      if (rate <= 4) {
        filteredRates[currency] = Math.round(rate * 100) / 100;
      };
    }
    return filteredRates;
  };

  const filteredExchangeRates = filterAndFormatRates();

  ChartJS.register(...registerables);

  return (
    <>
      {loading && (
        <div className="loader">
          <div className="loader__spinner"></div>
        </div>
      )}
      <div className="date">
        <p className="date__title">Date updated:</p>
        <p className="date__number">{currencyData?.date}</p>
      </div>
      <div className="chart">
        <Bar
          data={{
            labels: chartLabels,
            datasets: [
              {
                label: currencyData?.base,
                data: filteredExchangeRates,
                backgroundColor: [
                  "rgba(148, 0, 211, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
          options={{
            scales: {
              y: {
                type: 'linear',
                beginAtZero: true,
              },
            },
          }}
        />
        <Line
          data={{
            labels: chartLabels,
            datasets: [
              {
                label: currencyData?.base,
                data: filteredExchangeRates,
                backgroundColor: [
                  "rgba(0, 128, 0, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: "rgb(0, 128, 0, 0.5)",
              },
            ],
          }}
          options={{
            scales: {
              y: {
                type: 'linear',
                beginAtZero: true,
              },
            },
          }}
        />
          <Doughnut
            data={{
              labels: chartLabels,
              datasets: [
                {
                  label: currencyData?.base,
                  data: chartData,
                },
              ],
            }}
          />
      </div>
    </>
  );
};

export default ChartComponent;
