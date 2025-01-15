fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Filtrar los datos con más de 7 rachas
    const filteredData = data.filter(entry => entry.racha > 7);

    // Ordenar los datos filtrados por racha en orden descendente
    const sortedData = filteredData.sort((a, b) => b.racha - a.racha);

    // Extraer los nombres de usuario y rachas ordenadas
    const usernames = sortedData.map(entry => entry.username);
    const rachas = sortedData.map(entry => entry.racha);

    const ctx = document.getElementById('rachaChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: usernames,
        datasets: [{
          label: 'VainiRacha',
          data: rachas,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
