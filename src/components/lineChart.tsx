import {
  ChartType,
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
import { Data } from "../utils/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart: React.FunctionComponent = () => {
  const options = {
    layout: {
      padding: 0,
    },
    plugins: {
      title: {
        display: false,
        text: "Happy families with pets 2016-2022",
      },
    },
  };
  const chartData = {
    labels: Data.map((data) => data.year),
    datasets: [
      {
        type: "line" as const,
        label: "Cats",
        data: Data.map((data) => data.catOwners),
        borderColor: "rgba(238 130 238 / 0.7)",
        backgroundColor: "rgba(238 130 238 / 0.3)",
        cubicInterpolationMode: "monotone" as const,
        borderWidth: 3,
      },
      {
        type: "line" as const,
        label: "Dogs",
        data: Data.map((data) => data.dogOwners),
        borderColor: "rgba(124 58 237 / 0.7)",
        backgroundColor: "rgba(124 58 237 / 0.3)",
        cubicInterpolationMode: "monotone" as const,
        borderWidth: 3,
      },
      {
        type: "line" as const,
        label: "Other",
        data: Data.map((data) => data.otherPetOwners),
        borderColor: "rgba(0 224 217 / 0.7)",
        backgroundColor: "rgba(0 224 217 / 0.3)",
        cubicInterpolationMode: "monotone" as const,
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="min-w-screen min-h-fit flex items-center justify-center px-5 pt-20">
      <div className="w-full max-w-3xl">
        <div className="-mx-2 md:flex">
          <div className="w-full md:w-full px-2">
            <div className="rounded-lg shadow-sm mb-4 border">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl overflow-visible p-5">
                <h4 className="p-4 text-center font-medium text-3xl text-gray-900 tracking-tight">
                  Happy families with pets 2016-2022
                </h4>
                <Line data={chartData} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
