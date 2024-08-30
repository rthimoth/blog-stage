import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Enregistrement des composants nécessaires de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TestGraph = () => {
  const data = {
    labels: [
      'Semaine 1', 
      'Semaine 2', 
      'Semaine 3', 
      'Semaine 4', 
      'Semaine 5', 
      'Semaine 6', 
      'Semaine 7', 
      'Semaine 8', 
      'Semaine 9', 
      'Semaine 10',
      'Semaine 11'
    ],
    datasets: [
      {
        label: 'Laravel',
        data: [3, 5, 8, 10, 12, 15, 18, 20, 22, 25, 28], // Progression de l'utilisation de Laravel sur 11 semaines
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'React',
        data: [0, 0, 0, 2, 4, 6, 8, 10, 12, 14, 16], // Progression de l'utilisation de React sur 11 semaines
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Git',
        data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22], // Progression de l'utilisation de Git sur 11 semaines
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Docker',
        data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], // Progression de l'utilisation de Docker sur 11 semaines
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as 'top', // Utilisation d'une valeur de type spécifique
      },
      title: {
        display: true,
        text: 'Progression de l\'utilisation des technologies pendant le stage',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TestGraph;
