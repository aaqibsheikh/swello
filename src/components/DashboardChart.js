import React from 'react'
// Chartjs
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export const options = {
  responsive: true,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    legend: {
      // display: false,
      position: 'top',
    },
    title: {
      display: false,
      text: '',
    },
  },
}

const labels = ['07', '10', '14', '21', '25', '30']

export const data = {
  labels,
  datasets: [
    {
      lineTension: 0.8,
      label: 'Balance',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(250, 85, 255)',
      backgroundColor: 'rgba(250, 85, 255, 1)',
      borderDash: [10,10]
    },
    {
      lineTension: 0.8,
      label: 'Earned',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}
export default function DashboardChart() {
  return <Line options={options} data={data} />
}
