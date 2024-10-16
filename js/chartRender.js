var graficoPostagensTipo = document
 .getElementById("grafico-postagens-rede")
 .getContext("2d");

new Chart(graficoPostagensTipo, {
  type: "bar",
  data: {
    labels: ["Desconstrutivo", "Neutro", "Construtivo"],
    datasets: [
      {
        label: "Instagram",
        backgroundColor: "rgba(193,53,132,0.75)",
        data: [47, 23, 30],
      },
      {
        label: "Twitter/X",
        backgroundColor: "rgba(2,161,242,0.75)",
        data: [72, 9, 19],
      },
      {
        label: "Facebook",
        backgroundColor: "rgba(66,103,178,0.75)",
        data: [23, 21, 56],
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 16,
          },
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Posts",
          font: {
            size: 16,
            weight: 600,
          },
        },
      },
    },
  },
});
