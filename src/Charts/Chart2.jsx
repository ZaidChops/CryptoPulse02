import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart2 = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        fill:true,
        label: "Dataset 1",
        data: [1,0,3, 6, 3, 9,2],
        backgroundColor: "aqua",
        borderColor: "red",
        pointBorderColor: "aqua",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: true,
      scales: {
        y: {},
      },
    },
  };

  return (
    <div className="w-[100%] h-[100%]">
      <Line data={data} options={options} className="bg-red-100"></Line>
    </div>
  );
};

export default Chart2;
