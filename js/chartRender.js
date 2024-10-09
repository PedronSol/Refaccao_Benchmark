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