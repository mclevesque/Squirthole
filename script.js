document.addEventListener('DOMContentLoaded', () => {
    const pumpButton = document.getElementById('pumpButton');
    const valueDisplay = document.getElementById('valueDisplay');
    let value = 0;
    pumpButton.addEventListener('click', () => {
        value += Math.random() * 10; // Simulate the pump
        valueDisplay.textContent = `Squirthole Value: $${value.toFixed(2)}`;
        
        setTimeout(() => { // Simulate the dump
            value = Math.random() * 10;
            valueDisplay.textContent = `Squirthole Value: $${value.toFixed(2)}`;
            alert('Rug Pull! Better luck next time!');
        }, 5000);
    });

    const ctx = document.getElementById('myChart').getContext('2d');
    const squirtholeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 60}, (_, i) => i.toString()), // Mock 60 time intervals
            datasets: [{
                label: 'Squirthole Price',
                data: Array.from({length: 60}, () => Math.random() * 100), // Random price data
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Simulate live updates
    setInterval(() => {
        squirtholeChart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
            dataset.data.push(Math.random() * 100); // New random value
        });
        squirtholeChart.update();
    }, 1000);
});
