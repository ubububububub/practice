import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function Graph() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
  );

  const options = {
    indexAxis: "y",
    barThickness: 3,
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "right",
        color: "blue",
        font: { size: 12 },
        formatter: function (value, context) {
          console.log(value, context);
          return value + "!";
        },
      },
    },
    layout: {
      padding: {
        right: 50,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = ["", "", ""];

  const data = {
    labels,
    datasets: [
      {
        data: [100, 200, 200],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Bar
      width={500}
      height={200}
      options={options}
      data={data}
      plugins={[ChartDataLabels]}
    />
  );
}
