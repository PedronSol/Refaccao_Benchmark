var graficoPostagensRede = document
 .getElementById("grafico-postagens-rede")
 .getContext("2d");

new Chart(graficoPostagensRede, {
  type: "bar",
  data: {
    labels: ["Desconstrutivas", "Neutras", "Construtivas"],
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
          text: "Postagens",
          font: {
            size: 16,
            weight: 600,
          },
        },
      },
    },
  },
});

var graficoPostagensGenero = document
 .getElementById("grafico-postagens-genero")
 .getContext("2d");

 new Chart(graficoPostagensGenero, {
  type: "bar",
  data: {
    labels: ["Desconstrutivas", "Neutras", "Construtivas"],
    datasets: [
      {
        label: "Masculino",
        backgroundColor: "rgba(23,54,255,0.75)",
        data: [22, 19, 59],
      },
      {
        label: "N/A",
        backgroundColor: "rgba(196, 204, 255,0.75)",
        data: [17, 62, 11],
      },
      {
        label: "Feminino",
        backgroundColor: "rgba(245,66,152,0.75)",
        data: [49, 32, 19],
      }
    ],
  },
  options: {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: true,
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
          text: "Postagens",
          font: {
            size: 16,
            weight: 600,
          },
        },
      },
    },
  },
});