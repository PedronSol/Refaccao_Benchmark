// Dados do gráfico de redes
var dadosRedesInstagram = [94, 46, 60];
var dadosRedesTwitter = [144, 18, 38];
var dadosRedesFacebook = [46, 42, 112];

//Dados do gráfico de Gênero
var dadosGeneroMasculino = [44, 38, 118];
var dadosGeneroNA = [34, 124, 22];
var dadosGeneroFeminino = [98, 64, 38];

//Dados do total de postagens
var totalDesconstrutivas =
  dadosRedesInstagram[0] + dadosRedesTwitter[0] + dadosRedesFacebook[0];
var totalNeutras =
  dadosRedesInstagram[1] + dadosRedesTwitter[1] + dadosRedesFacebook[1];
var totalConstrutivas =
  dadosRedesInstagram[2] + dadosRedesTwitter[2] + dadosRedesFacebook[2];
var totalPostagens = totalConstrutivas + totalNeutras + totalDesconstrutivas;

//Dados dos cards do topo da página principal
var cardTotalPostagens = document.getElementById("cardTotalPostagens");
cardTotalPostagens.textContent = totalPostagens;

var cardPostagensDesconstrutivas = document.getElementById(
  "cardPostagensDesconstrutivas"
);
cardPostagensDesconstrutivas.textContent = totalDesconstrutivas;

var cardPostagensNeutras = document.getElementById("cardPostagensNeutras");
cardPostagensNeutras.textContent = totalNeutras;

var cardPostagensConstrutivas = document.getElementById(
  "cardPostagensConstrutivas"
);
cardPostagensConstrutivas.textContent = totalConstrutivas;

//Gráfico do volume de postagens por rede
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
        data: dadosRedesInstagram,
      },
      {
        label: "Twitter/X",
        backgroundColor: "rgba(2,161,242,0.75)",
        data: dadosRedesTwitter,
      },
      {
        label: "Facebook",
        backgroundColor: "rgba(66,103,178,0.75)",
        data: dadosRedesFacebook,
      },
    ],
  },
  options: {
    borderRadius: 8,
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

//Gráfico do volume de postagens por gênero
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
        data: dadosGeneroMasculino,
      },
      {
        label: "N/A",
        backgroundColor: "rgba(196, 204, 255,0.75)",
        data: dadosGeneroNA,
      },
      {
        label: "Feminino",
        backgroundColor: "rgba(245,66,152,0.75)",
        data: dadosGeneroFeminino,
      },
    ],
  },
  options: {
    borderRadius: 8,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 15,
          },
        },
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

//Gráfico da timeline de postagens
var graficoPostagensTimeline = document
  .getElementById("grafico-postagens-timeline")
  .getContext("2d");

new Chart(graficoPostagensTimeline, {
  type: "bar",
  data: {
    labels: [
      "01/08/2024",
      "02/08/2024",
      "03/08/2024",
      "04/08/2024",
      "05/08/2024",
      "06/08/2024",
      "07/08/2024",
      "08/08/2024",
      "09/08/2024",
      "10/08/2024",
      "11/08/2024",
      "12/08/2024",
      "13/08/2024",
      "14/08/2024",
    ],
    datasets: [
      {
        label: "Desconstrutivo",
        backgroundColor: "rgba(252,3,3,0.75)",
        data: [63, 25, 12, 31, 9, 7, 42, 3, 12, 33, 2, 16, 1, 28],
      },
      {
        label: "Neutro",
        backgroundColor: "rgba(163,162,166,0.75)",
        data: [5, 14, 22, 3, 7, 2, 10, 10, 3, 5, 4, 9, 2, 10],
      },
      {
        label: "Construtivo",
        backgroundColor: "rgba(23,252,3,0.75)",
        data: [6, 20, 12, 11, 16, 2, 22, 3, 12, 2, 47, 16, 33, 8],
      },
    ],
  },
  options: {
    borderRadius: 8,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 15,
          },
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 15,
          },
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Postagens",
          font: {
            size: 15,
            weight: 600,
          },
        },
      },
    },
  },
});

//Gráficos de Pizza
var graficoPizzaDesconstrutivo = document.getElementById("grafico-pizza-desconstrutivo").getContext("2d");
new Chart(graficoPizzaDesconstrutivo, {
  type: "pie",
  data: {
    labels: ["Educação", "Transporte", "Segurança", "Saúde", "Economia"],
    datasets: [
      {
        label: "Número de Postagens",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [72, 56, 81, 15, 60],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Desconstrutivas",
        font: {
          size: 20,
        },
      },
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 15,
          },
        },
      },
    },
  },
});

var graficoPizzaNeutro = document.getElementById("grafico-pizza-neutro").getContext("2d");
new Chart(graficoPizzaNeutro, {
  type: "pie",
  data: {
    labels: ["Educação", "Transporte", "Segurança", "Saúde", "Economia"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [20, 18, 15, 25, 28],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Neutras",
        font: {
          size: 20,
        },
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 15,
          },
        },
      },
    },
  },
});

var graficoPizzaConstrutivo = document.getElementById("grafico-pizza-construtivo").getContext("2d");
new Chart(graficoPizzaConstrutivo, {
  type: "pie",
  data: {
    labels: ["Educação", "Transporte", "Segurança", "Saúde", "Economia"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [32, 45, 58, 37, 38],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Construtivas",
        font: {
          size: 20,
        },
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 15,
          },
        },
      },
    },
  },
});
