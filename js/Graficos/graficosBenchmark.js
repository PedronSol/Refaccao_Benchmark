// Dados do gráfico de autoria do candidato
var dadosAutoriaPaulinho = [6, 2, 85];
var dadosAutoriaNatalia = [22, 20, 149];
var dadosAutoriaCarlos = [6, 3, 44];

//Dados do gráfico de autoria de terceiros
var dadosTerceirosPaulinho = [485, 95, 290];
var dadosTerceirosNatalia = [65, 68, 318];
var dadosTerceirosCarlos = [74, 51, 103];

//Dados do total de postagens
var totalPaulinho = 0;
for (i = 0; i < dadosAutoriaPaulinho.length; i++) {
  totalPaulinho += dadosAutoriaPaulinho[i];
}
for (i = 0; i < dadosTerceirosPaulinho.length; i++) {
  totalPaulinho += dadosTerceirosPaulinho[i];
}

var totalNatalia = 0;
for (i = 0; i < dadosAutoriaNatalia.length; i++) {
  totalNatalia += dadosAutoriaNatalia[i];
}
for (i = 0; i < dadosTerceirosNatalia.length; i++) {
  totalNatalia += dadosTerceirosNatalia[i];
}

var totalCarlos = 0;
for (i = 0; i < dadosAutoriaCarlos.length; i++) {
  totalCarlos += dadosAutoriaCarlos[i];
}
for (i = 0; i < dadosTerceirosCarlos.length; i++) {
  totalCarlos += dadosTerceirosCarlos[i];
}

//Dados dos cards do topo da página principal
var cardTotalPaulinho = document.getElementById("cardTotalPaulinho");
cardTotalPaulinho.textContent = totalPaulinho;

var cardTotalNatalia = document.getElementById("cardTotalNatalia");
cardTotalNatalia.textContent = totalNatalia;

var cardTotalCarlos = document.getElementById("cardTotalCarlos");
cardTotalCarlos.textContent = totalCarlos;

//Dados de Postagens por Rede com Autoria do Candidato
var desconstrutivasTwitterCandidato = [3, 0, 20]; //Seguindo a ordem [Paulinho, Carlos Eduardo, Natália]
var neutrasTwitterCandidato = [2, 0, 16];
var construtivasTwitterCandidato = [29, 2, 100];

var desconstrutivasFacebookCandidato = [0, 0, 0]; //Seguindo a ordem [Paulinho, Carlos Eduardo, Natália]
var neutrasFacebookCandidato = [0, 0, 0];
var construtivasFacebookCandidato = [0, 0, 0];

var desconstrutivasInstagramCandidato = [3, 6, 2]; //Seguindo a ordem [Paulinho, Carlos Eduardo, Natália]
var neutrasInstagramCandidato = [0, 3, 4];
var construtivasInstagramCandidato = [56, 42, 49];

//Dados de Postagens por Rede com Autoria de Terceiros
var desconstrutivasTwitterTerceiros = [356, 36, 17]; //Seguindo a ordem [Paulinho, Carlos Eduardo, Natália]
var neutrasTwitterTerceiros = [54, 19, 5];
var construtivasTwitterTerceiros = [76, 9, 16];

var desconstrutivasFacebookTerceiros = [125, 37, 43]; //Seguindo a ordem [Paulinho, Carlos Eduardo, Natália]
var neutrasFacebookTerceiros = [35, 32, 58];
var construtivasFacebookTerceiros = [135, 84, 273];

var desconstrutivasInstagramTerceiros = [4, 1, 5]; //Seguindo a ordem [Paulinho, Carlos Eduardo, Natália]
var neutrasInstagramTerceiros = [6, 0, 5];
var construtivasInstagramTerceiros = [79, 10, 29];

//Dados de Postagens Por Período de Tempo com Autoria do Candidato
var datasCandidatoPaulinho = [3, 8, 4, 5, 6, 2, 7, 6, 18, 5, 1, 2, 3, 2, 8, 11, 2];
var datasCandidatoCarlos = [1, 5, 3, 4, 4, 1, 6, 3, 3, 2, 4, 2, 2, 3, 3, 4, 3];
var datasCandidatoNatalia = [11, 5, 28, 6, 8, 4, 10, 11, 46, 6, 5, 4, 7, 4, 7, 4, 10, 10, 16];

//Dados de Postagens Por Período de Tempo com Autoria de Terceiros
var datasTerceirosPaulinho = [22, 52, 41, 24, 27, 36, 167, 31, 128, 27, 13, 32, 64, 61, 77, 57, 8, 3];
var datasTerceirosCarlos = [3, 21, 7, 16, 39, 4, 8, 14, 36, 7, 18, 9, 1, 5, 9, 20, 11, 0];
var datasTerceirosNatalia = [36, 40, 44, 15, 19, 37, 17, 11, 48, 8, 13, 35, 18, 21, 15, 37, 35, 2];

//Grafico de Volume de Postagens com Autoria do Candidato
var graficoPostagensCandidato = document
  .getElementById("grafico-postagens-candidato")
  .getContext("2d");

new Chart(graficoPostagensCandidato, {
  type: "bar",
  data: {
    labels: ["Paulinho Freire", "Carlos Eduardo", "Natália Bonavides"],
    datasets: [
      {
        label: "Desconstrutivas",
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        data: [
          dadosAutoriaPaulinho[0],
          dadosAutoriaCarlos[0],
          dadosAutoriaNatalia[0],
        ],
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: [
          dadosAutoriaPaulinho[1],
          dadosAutoriaCarlos[1],
          dadosAutoriaNatalia[1],
        ],
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: [
          dadosAutoriaPaulinho[2],
          dadosAutoriaCarlos[2],
          dadosAutoriaNatalia[2],
        ],
      },
    ],
  },
  options: {
    borderRadius: 8,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: true,
        position: "bottom",
        align: "start",
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 16,
            weight: 600,
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

//Grafico de Volume de Postagens com Autoria de Terceiros
var graficoPostagensTerceiros = document
  .getElementById("grafico-postagens-terceiros")
  .getContext("2d");

new Chart(graficoPostagensTerceiros, {
  type: "bar",
  data: {
    labels: ["Paulinho Freire", "Carlos Eduardo", "Natália Bonavides"],
    datasets: [
      {
        label: "Desconstrutivas",
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        data: [
          dadosTerceirosPaulinho[0],
          dadosTerceirosCarlos[0],
          dadosTerceirosNatalia[0],
        ],
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: [
          dadosTerceirosPaulinho[1],
          dadosTerceirosCarlos[1],
          dadosTerceirosNatalia[1],
        ],
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: [
          dadosTerceirosPaulinho[2],
          dadosTerceirosCarlos[2],
          dadosTerceirosNatalia[2],
        ],
      },
    ],
  },
  options: {
    borderRadius: 8,
    maintainAspectRatio: false,
    responsive: true,
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
            weight: 600,
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

//Graficos de Postagens por Rede com Autoria do Candidato
var graficoPostagensRedeTwitterCandidato = document
  .getElementById("grafico-postagens-rede-twitter-candidato")
  .getContext("2d");

new Chart(graficoPostagensRedeTwitterCandidato, {
  type: "bar",
  data: {
    labels: ["Paulinho", "Carlos Eduardo", "Natália"],
    datasets: [
      {
        label: "Desconstrutivas",
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        data: desconstrutivasTwitterCandidato,
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: neutrasTwitterCandidato,
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: construtivasTwitterCandidato,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      title: {
        display: true,
        text: "Twitter",
        position: "bottom",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 14,
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
        max: 160,
      },
    },
  },
});

var graficoPostagensRedeFacebookCandidato = document
  .getElementById("grafico-postagens-rede-facebook-candidato")
  .getContext("2d");

new Chart(graficoPostagensRedeFacebookCandidato, {
  type: "bar",
  data: {
    labels: ["Paulinho", "Carlos Eduardo", "Natália"],
    datasets: [
      {
        label: "Desconstrutivas",
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        data: desconstrutivasFacebookCandidato,
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: neutrasFacebookCandidato,
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: construtivasFacebookCandidato,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      title: {
        display: true,
        text: "Facebook",
        position: "bottom",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        stacked: true,
        title: {
          display: false,
          text: "Postagens",
          font: {
            size: 16,
            weight: 600,
          },
        },
        max: 160,
      },
    },
  },
});

var graficoPostagensRedeInstagramCandidato = document
  .getElementById("grafico-postagens-rede-instagram-candidato")
  .getContext("2d");

new Chart(graficoPostagensRedeInstagramCandidato, {
  type: "bar",
  data: {
    labels: ["Paulinho", "Carlos Eduardo", "Natália"],
    datasets: [
      {
        label: "Desconstrutivas",
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        data: desconstrutivasInstagramCandidato,
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: neutrasInstagramCandidato,
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: construtivasInstagramCandidato,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      title: {
        display: true,
        text: "Instagram",
        position: "bottom",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        stacked: true,
        title: {
          display: false,
          text: "Postagens",
          font: {
            size: 16,
            weight: 600,
          },
        },
        max: 160,
      },
    },
  },
});

//Graficos do Volume de Postagens por Rede Feitos por Terceiros
var graficoPostagensRedeTwitterTerceiros = document
  .getElementById("grafico-postagens-rede-twitter-terceiros")
  .getContext("2d");

new Chart(graficoPostagensRedeTwitterTerceiros, {
  type: "bar",
  data: {
    labels: ["Paulinho", "Carlos Eduardo", "Natália"],
    datasets: [
      {
        label: "Desconstrutivas",
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        data: desconstrutivasTwitterTerceiros,
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: neutrasTwitterTerceiros,
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: construtivasTwitterTerceiros,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      title: {
        display: false,
        text: "Twitter",
        position: "bottom",
        font: {
          size: 16,
        },
        padding: {
          top: 10,
        },
      },
      legend: {
        display: false,
        position: "bottom",
        align: "start",
      },
    },
    scales: {
      y: {
        max: 400,
      },
      x: {
        ticks: {
          font: {
            size: 15,
            weight: 600,
          },
        },
      },
    },
  },
});

var graficoPostagensRedeFacebookTerceiros = document
  .getElementById("grafico-postagens-rede-facebook-terceiros")
  .getContext("2d");

new Chart(graficoPostagensRedeFacebookTerceiros, {
  type: "bar",
  data: {
    labels: ["Paulinho", "Carlos Eduardo", "Natália"],
    datasets: [
      {
        label: "Desconstrutivas",
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        data: desconstrutivasFacebookTerceiros,
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: neutrasFacebookTerceiros,
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: construtivasFacebookTerceiros,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      title: {
        display: false,
        text: "Facebook",
        position: "bottom",
        font: {
          size: 16,
        },
        padding: {
          top: 10,
        },
      },
      legend: {
        position: "top",
        align: "end",
      },
    },
    scales: {
      y: {
        max: 400,
      },
      x: {
        ticks: {
          font: {
            size: 15,
            weight: 600,
          },
        },
      },
    },
  },
});

var graficoPostagensRedeInstagramTerceiros = document
  .getElementById("grafico-postagens-rede-instagram-terceiros")
  .getContext("2d");

new Chart(graficoPostagensRedeInstagramTerceiros, {
  type: "bar",
  data: {
    labels: ["Paulinho", "Carlos Eduardo", "Natália"],
    datasets: [
      {
        label: "Desconstrutivas",
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        data: desconstrutivasInstagramTerceiros,
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: neutrasInstagramTerceiros,
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: construtivasInstagramTerceiros,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      title: {
        display: false,
        text: "Instagram",
        position: "bottom",
        font: {
          size: 16,
        },
        padding: {
          top: 10,
        },
      },
      legend: {
        position: "bottom",
        align: "start",
        font: {
          size: 14,
        },
      },
    },
    scales: {
      y: {
        max: 400,
      },
      x: {
        ticks: {
          font: {
            size: 16,
            weight: 600,
          },
        },
      },
    },
  },
});

//Graficos de Linha Do Volume de Postagens por Período de Tempo com Autoria do Candidato
var gradientNatalia = document.getElementById("grafico-postagens-tempo-terceiros").getContext("2d").createLinearGradient(0, 0, 0, 400);
gradientNatalia.addColorStop(0, 'rgba(245, 90, 66, 0.6)');   
gradientNatalia.addColorStop(0.7, 'rgba(245, 90, 66, 0.05)');

var gradientCarlosEduardo = document.getElementById("grafico-postagens-tempo-terceiros").getContext("2d").createLinearGradient(0, 0, 0, 400);
gradientCarlosEduardo.addColorStop(0, 'rgba(102, 245, 66, 0.6)');   
gradientCarlosEduardo.addColorStop(0.7, 'rgba(102, 245, 66, 0.05)');

var gradientPaulinho = document.getElementById("grafico-postagens-tempo-terceiros").getContext("2d").createLinearGradient(0, 0, 0, 400);
gradientPaulinho.addColorStop(0, 'rgba(66, 93, 245, 0.6)');   
gradientPaulinho.addColorStop(0.7, 'rgba(66, 93, 245, 0.05)');

new Chart(document.getElementById("grafico-postagens-tempo-candidato"), {
  type: "line",
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
      "15/08/2024",
      "16/08/2024",
      "17/08/2024",
    ],
    datasets: [
      {
        data: datasCandidatoNatalia,
        label: "Natália",
        borderColor: "#f55a42",
        fill: false,
        tension: 0.3,
      },
      {
        data: datasCandidatoPaulinho,
        label: "Paulinho",
        borderColor: "#425df5",
        fill: false,
        tension: 0.3,
      },
      {
        data: datasCandidatoCarlos,
        label: "Carlos Eduardo",
        borderColor: "#66f542",
        fill: false,
        tension: 0.3,
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: "Volume de Postagens Por Período de Tempo com Autoria do Candidato",
        font: {
          size: 18
        }
      },
      legend: {
        align: "end"
      }
    },
  },
});

new Chart(document.getElementById("grafico-postagens-tempo-terceiros"), {
  type: "line",
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
      "15/08/2024",
      "16/08/2024",
      "17/08/2024",
    ],
    datasets: [
      {
        data: datasTerceirosPaulinho,
        label: "Paulinho",
        borderColor: "#425df5",
        backgroundColor: gradientPaulinho,
        fill: true,
        tension: 0.3,
        order: 3,
      },
      {
        data: datasTerceirosCarlos,
        label: "Carlos Eduardo",
        borderColor: "#66f542",
        backgroundColor: gradientCarlosEduardo,
        fill: true,
        tension: 0.3,
        order: 1,
      },
      {
        data: datasTerceirosNatalia,
        label: "Natália",
        borderColor: "#f55a42",
        backgroundColor: gradientNatalia,
        fill: true,
        tension: 0.3,
        order: 2,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: "Volume de Postagens Por Período de Tempo com Autoria do Candidato",
        font: {
          size: 18
        }
      },
      legend: {
        align: "start",
        position: "right"
      }
    },
  },
});