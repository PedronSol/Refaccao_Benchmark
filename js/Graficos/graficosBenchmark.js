// Dados do gráfico de autoria do candidato
var dadosAutoriaPaulinho = [6,2,85];
var dadosAutoriaNatalia = [22,20,149];
var dadosAutoriaCarlos = [6,3,44];

//Dados do gráfico de autoria de terceiros
var dadosTerceirosPaulinho = [485,95,290];
var dadosTerceirosNatalia = [65,68,318];
var dadosTerceirosCarlos = [74,51,103];

//Dados do total de postagens
var totalPaulinho = 0;
for (i = 0; i < dadosAutoriaPaulinho.length; i++){
totalPaulinho += dadosAutoriaPaulinho[i];
};
for (i = 0; i < dadosTerceirosPaulinho.length; i++){
totalPaulinho += dadosTerceirosPaulinho[i];
};

var totalNatalia = 0;
for (i = 0; i < dadosAutoriaNatalia.length; i++){
totalNatalia += dadosAutoriaNatalia[i];
};
for (i = 0; i < dadosTerceirosNatalia.length; i++){
totalNatalia += dadosTerceirosNatalia[i];
};

var totalCarlos = 0;
for (i = 0; i < dadosAutoriaCarlos.length; i++){
totalCarlos += dadosAutoriaCarlos[i];
};
for (i = 0; i < dadosTerceirosCarlos.length; i++){
totalCarlos += dadosTerceirosCarlos[i];
};

//Dados dos cards do topo da página principal
var cardTotalPaulinho = document.getElementById("cardTotalPaulinho");
cardTotalPaulinho.textContent = totalPaulinho;

var cardTotalNatalia = document.getElementById("cardTotalNatalia");
cardTotalNatalia.textContent = totalNatalia;

var cardTotalCarlos = document.getElementById(
  "cardTotalCarlos"
);
cardTotalCarlos.textContent = totalCarlos;

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
        data: [dadosAutoriaPaulinho[0], dadosAutoriaCarlos[0], dadosAutoriaNatalia[0]],
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: [dadosAutoriaPaulinho[1], dadosAutoriaCarlos[1], dadosAutoriaNatalia[1]],
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: [dadosAutoriaPaulinho[2], dadosAutoriaCarlos[2], dadosAutoriaNatalia[2]],
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
        position: "bottom",
        align: "start"
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 16,
            weight: 600
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
        data: [dadosTerceirosPaulinho[0], dadosTerceirosCarlos[0], dadosTerceirosNatalia[0]],
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: [dadosTerceirosPaulinho[1], dadosTerceirosCarlos[1], dadosTerceirosNatalia[1]],
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: [dadosTerceirosPaulinho[2], dadosTerceirosCarlos[2], dadosTerceirosNatalia[2]],
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
            weight: 600
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