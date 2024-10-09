new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ['30/09/2024','01/10/2024','02/10/2024','03/10/2024','04/10/2024','05/10/2024','06/10/2024','07/10/2024','08/10/2024','09/10/2024'],
      datasets: [{ 
          data: [30,50,25,64,100,10,12,8,5,40],
          label: "Natália",
          borderColor: "#de1414",
          fill: false,
        }, { 
          data: [5,91,63,71,14,55,26,30,1,7],
          label: "Paulinho",
          borderColor: "#144be3",
          fill: false,
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Postagens por dia',
      },
      responsive: true,
      legend: {
        position: 'right'
      }
    },
  });

new Chart(document.getElementById("donut-chart-paulinho"), {
  type: 'doughnut',
  data: {
    labels: ["Positivas", "Negativas", "Neutras"],
    datasets: [
      {
        label: "Postagens",
        backgroundColor: ["#2dba09", "#ba0909","#737272"],
        data: [2500, 800, 450]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Resumo das postagens (Paulinho)'
    }
  }
});

new Chart(document.getElementById("donut-chart-natalia"), {
  type: 'doughnut',
  data: {
    labels: ["Positivas", "Negativas", "Neutras"],
    datasets: [
      {
        label: "Postagens",
        backgroundColor: ["#2dba09", "#ba0909","#737272"],
        data: [1250, 900, 2000]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Resumo das postagens (Natalia)'
    }
  }
});