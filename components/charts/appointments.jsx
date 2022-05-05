import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Filler,
} from "chart.js";

Chart.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Filler
);

import { useChat } from "../../hooks/useChat";
import { Box } from "@chakra-ui/react";

export const AppointmentGraph = () => {
  const { apData } = useChat();

  return (
    <>
      <Box minH={"286px"} w="100%">
        <Line
          data={apData}
          options={{
            plugins: {
              title: {
                display: false,
              },
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            elements: {
              line: {
                tension: 0.5,
                borderWidth: 2,
                borderColor: "#FAC032",
              },
              point: {
                radius: 2,
                borderColor: "#FCDF98",
                borderWidth: 5,
                hitRadius: 0,
              },
            },
            scales: {
              xAxis: {
                grid: {
                  display: false,
                },
              },
              yAxis: {
                beginAtZero: true,
                ticks: {
                  callback: function (value) {
                    if (parseInt(value) >= 1000) {
                      return value
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    } else {
                      return value;
                    }
                  },
                },
                grid: {
                  borderDash: [8, 4],
                  drawBorder: false,
                  borderColor: "#D7DBDE",
                },
              },
            },
          }}
        />
      </Box>
    </>
  );
};
