export const useChat = () => {
  const data = {
    labels: ["1 June", "8 July", "16 Augt", "24 Sept", "15 Octo"],
    datasets: [
      {
        data: [40000, 100000, 20000, 60000, 40000],
      },
    ],
  };

  const apData = {
    labels: [
      "25 Apri",
      "26 May",
      "27 June",
      "28 July",
      "29 Augt",
      "30 Sept",
      "15 Octo",
    ],
    datasets: [
      {
        data: [2000, 3100, 1800, 2900, 2000, 4900, 900, 2700],
      },
    ],
  };

  return { data, apData };
};
