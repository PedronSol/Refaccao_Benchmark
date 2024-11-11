document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("checkbox-Twitter");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      trocaGraficoTwitterNormalizado();
    } else {
      trocaGraficoTwitterPadrao();
    }
  });
});

function trocaGraficoTwitterPadrao() {
  graficoPostagensRedeTwitterTerceiros.data = {
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
  };

  graficoPostagensRedeTwitterTerceiros.options = {
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      title: {
        display: false,
        text: "Postagens Twitter com Autoria de Terceiros",
        position: "top",
        font: {
          size: 20,
        },
        padding: {
          bottom: 15,
        },
      },
      legend: {
        display: false,
        position: "bottom",
        align: "start",
      },
      tooltip: {
        xAlign: 'center',
        yalign: 'bottom'
      }
    },
    scales: {
      y: {
        ticks: {
          font: {
            size: 14,
          },
        },
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
  };
  graficoPostagensRedeTwitterTerceiros.update();
}

function trocaGraficoTwitterNormalizado() {
  graficoPostagensRedeTwitterTerceiros.data = {
    labels: ["Paulinho", "Carlos Eduardo", "Natália"],
    datasets: [
      {
        label: "Desconstrutivas",
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        data: desconstrutivasTwitterTerceirosNormalizada,
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: neutrasTwitterTerceirosNormalizada,
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: construtivasTwitterTerceirosNormalizada,
      },
    ],
  };

  graficoPostagensRedeTwitterTerceiros.options = {
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      title: {
        display: false,
        text: "Postagens Twitter com Autoria de Terceiros Normalizado",
        position: "top",
        font: {
          size: 20,
        },
        padding: {
          bottom: 15,
        },
      },
      legend: {
        display: false,
        position: "bottom",
        align: "start",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {

            if(tooltipItem.datasetIndex == 0){
              if(tooltipItem.dataIndex == 0){
                return `${(desconstrutivasTwitterTerceirosNormalizada[0]*100).toFixed(0)}% (${desconstrutivasTwitterTerceiros[0]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 1){
                return `${(desconstrutivasTwitterTerceirosNormalizada[1]*100).toFixed(0)}% (${desconstrutivasTwitterTerceiros[1]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 2){
                return `${(desconstrutivasTwitterTerceirosNormalizada[2]*100).toFixed(0)}% (${desconstrutivasTwitterTerceiros[2]} Postagens)`;
              }
            }
            if(tooltipItem.datasetIndex == 1){
              if(tooltipItem.dataIndex == 0){
                return `${(neutrasTwitterTerceirosNormalizada[0]*100).toFixed(0)}% (${neutrasTwitterTerceiros[0]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 1){
                return `${(neutrasTwitterTerceirosNormalizada[1]*100).toFixed(0)}% (${neutrasTwitterTerceiros[1]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 2){
                return `${(neutrasTwitterTerceirosNormalizada[2]*100).toFixed(0)}% (${neutrasTwitterTerceiros[2]} Postagens)`;
              }
            }
            if(tooltipItem.datasetIndex == 2){
              if(tooltipItem.dataIndex == 0){
                return `${(construtivasTwitterTerceirosNormalizada[0]*100).toFixed(0)}% (${construtivasTwitterTerceiros[0]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 1){
                return `${(construtivasTwitterTerceirosNormalizada[1]*100).toFixed(0)}% (${construtivasTwitterTerceiros[1]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 2){
                return `${(construtivasTwitterTerceirosNormalizada[2]*100).toFixed(0)}% (${construtivasTwitterTerceiros[2]} Postagens)`;
              }
            }
          },
        },
        xAlign: 'center',
        yalign: 'bottom'
      },
    },
    scales: {
      y: {
        max: 1,
        ticks: {
          format: {
            style: "percent",
          },
          font: {
            size: 14,
          },
        },
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
  };
  graficoPostagensRedeTwitterTerceiros.update();
}

document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("checkbox-Facebook");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      trocaGraficoFacebookNormalizado();
    } else {
      trocaGraficoFacebookPadrao();
    }
  });
});

function trocaGraficoFacebookPadrao() {
  graficoPostagensRedeFacebookTerceiros.data = {
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
  };

  graficoPostagensRedeFacebookTerceiros.options = {
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      title: {
        display: false,
        text: "Postagens Facebook com Autoria de Terceiros",
        position: "top",
        font: {
          size: 20,
        },
        padding: {
          bottom: 15,
        },
      },
      legend: {
        display: true,
        position: "top",
        align: "end",
      },
    },
    scales: {
      y: {
        ticks: {
          font: {
            size: 14,
          },
        },
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
  };
  graficoPostagensRedeFacebookTerceiros.update();
}

function trocaGraficoFacebookNormalizado() {
  graficoPostagensRedeFacebookTerceiros.data = {
    labels: ["Paulinho", "Carlos Eduardo", "Natália"],
    datasets: [
      {
        label: "Desconstrutivas",
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        data: desconstrutivasFacebookTerceirosNormalizada,
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: neutrasFacebookTerceirosNormalizada,
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: construtivasFacebookTerceirosNormalizada,
      },
    ],
  };

  graficoPostagensRedeFacebookTerceiros.options = {
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      title: {
        display: false,
        text: "Postagens Facebook com Autoria de Terceiros Normalizado",
        position: "top",
        font: {
          size: 20,
        },
        padding: {
          bottom: 15,
        },
      },
      legend: {
        display: true,
        position: "top",
        align: "end",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {

            if(tooltipItem.datasetIndex == 0){
              if(tooltipItem.dataIndex == 0){
                return `${(desconstrutivasFacebookTerceirosNormalizada[0]*100).toFixed(0)}% (${desconstrutivasFacebookTerceiros[0]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 1){
                return `${(desconstrutivasFacebookTerceirosNormalizada[1]*100).toFixed(0)}% (${desconstrutivasFacebookTerceiros[1]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 2){
                return `${(desconstrutivasFacebookTerceirosNormalizada[2]*100).toFixed(0)}% (${desconstrutivasFacebookTerceiros[2]} Postagens)`;
              }
            }
            if(tooltipItem.datasetIndex == 1){
              if(tooltipItem.dataIndex == 0){
                return `${(neutrasFacebookTerceirosNormalizada[0]*100).toFixed(0)}% (${neutrasFacebookTerceiros[0]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 1){
                return `${(neutrasFacebookTerceirosNormalizada[1]*100).toFixed(0)}% (${neutrasFacebookTerceiros[1]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 2){
                return `${(neutrasFacebookTerceirosNormalizada[2]*100).toFixed(0)}% (${neutrasFacebookTerceiros[2]} Postagens)`;
              }
            }
            if(tooltipItem.datasetIndex == 2){
              if(tooltipItem.dataIndex == 0){
                return `${(construtivasFacebookTerceirosNormalizada[0]*100).toFixed(0)}% (${construtivasFacebookTerceiros[0]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 1){
                return `${(construtivasFacebookTerceirosNormalizada[1]*100).toFixed(0)}% (${construtivasFacebookTerceiros[1]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 2){
                return `${(construtivasFacebookTerceirosNormalizada[2]*100).toFixed(0)}% (${construtivasFacebookTerceiros[2]} Postagens)`;
              }
            }
          },
        },
      },
    },
    scales: {
      y: {
        max: 1,
        ticks: {
          format: {
            style: "percent",
          },
          font: {
            size: 14,
          },
        },
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
  };
  graficoPostagensRedeFacebookTerceiros.update();
}

document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("checkbox-Instagram");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      trocaGraficoInstagramNormalizado();
    } else {
      trocaGraficoInstagramPadrao();
    }
  });
});

function trocaGraficoInstagramPadrao() {
  graficoPostagensRedeInstagramTerceiros.data = {
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
  };

  graficoPostagensRedeInstagramTerceiros.options = {
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      title: {
        display: false,
        text: "Postagens Instagram com Autoria de Terceiros",
        position: "top",
        font: {
          size: 20,
        },
        padding: {
          bottom: 15,
        },
      },
      legend: {
        display: true,
        position: "bottom",
        align: "start",
      },
    },
    scales: {
      y: {
        ticks: {
          font: {
            size: 14,
          },
        },
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
  };
  graficoPostagensRedeInstagramTerceiros.update();
}

function trocaGraficoInstagramNormalizado() {
  graficoPostagensRedeInstagramTerceiros.data = {
    labels: ["Paulinho", "Carlos Eduardo", "Natália"],
    datasets: [
      {
        label: "Desconstrutivas",
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        data: desconstrutivasInstagramTerceirosNormalizada,
      },
      {
        label: "Neutras",
        backgroundColor: "rgba(255, 206, 86, 0.7)",
        data: neutrasInstagramTerceirosNormalizada,
      },
      {
        label: "Construtivas",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        data: construtivasInstagramTerceirosNormalizada,
      },
    ],
  };

  graficoPostagensRedeInstagramTerceiros.options = {
    maintainAspectRatio: false,
    borderRadius: 8,
    plugins: {
      title: {
        display: false,
        text: "Postagens Instagram com Autoria de Terceiros Normalizado",
        position: "top",
        font: {
          size: 20,
        },
        padding: {
          bottom: 15,
        },
      },
      legend: {
        display: true,
        position: "bottom",
        align: "start",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {

            if(tooltipItem.datasetIndex == 0){
              if(tooltipItem.dataIndex == 0){
                return `${(desconstrutivasInstagramTerceirosNormalizada[0]*100).toFixed(0)}% (${desconstrutivasInstagramTerceiros[0]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 1){
                return `${(desconstrutivasInstagramTerceirosNormalizada[1]*100).toFixed(0)}% (${desconstrutivasInstagramTerceiros[1]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 2){
                return `${(desconstrutivasInstagramTerceirosNormalizada[2]*100).toFixed(0)}% (${desconstrutivasInstagramTerceiros[2]} Postagens)`;
              }
            }
            if(tooltipItem.datasetIndex == 1){
              if(tooltipItem.dataIndex == 0){
                return `${(neutrasInstagramTerceirosNormalizada[0]*100).toFixed(0)}% (${neutrasInstagramTerceiros[0]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 1){
                return `${(neutrasInstagramTerceirosNormalizada[1]*100).toFixed(0)}% (${neutrasInstagramTerceiros[1]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 2){
                return `${(neutrasInstagramTerceirosNormalizada[2]*100).toFixed(0)}% (${neutrasInstagramTerceiros[2]} Postagens)`;
              }
            }
            if(tooltipItem.datasetIndex == 2){
              if(tooltipItem.dataIndex == 0){
                return `${(construtivasInstagramTerceirosNormalizada[0]*100).toFixed(0)}% (${construtivasInstagramTerceiros[0]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 1){
                return `${(construtivasInstagramTerceirosNormalizada[1]*100).toFixed(0)}% (${construtivasInstagramTerceiros[1]} Postagens)`;
              }
              if(tooltipItem.dataIndex == 2){
                return `${(construtivasInstagramTerceirosNormalizada[2]*100).toFixed(0)}% (${construtivasInstagramTerceiros[2]} Postagens)`;
              }
            }
          },
        },
      },
    },
    scales: {
      y: {
        max: 1,
        ticks: {
          format: {
            style: "percent",
          },
          font: {
            size: 14,
          },
        },
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
  };
  graficoPostagensRedeInstagramTerceiros.update();
}
