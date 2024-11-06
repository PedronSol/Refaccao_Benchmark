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
