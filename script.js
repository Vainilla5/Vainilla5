fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const usernames = data.map(entry => entry.username);
    const rachas = data.map(entry => entry.racha);

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
