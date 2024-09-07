// Progress Bar Animation
window.onload = function() {
    document.getElementById('progress-bar').style.width = '25%';
};

// Modal Functionality
function openModal(postId) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-post-content');
    
    const posts = {
        post1: '<h3>Improving My Swing</h3><p>Full content of the swing improvement blog post...</p>',
        post2: '<h3>Playing at Augusta National</h3><p>Full content of the Augusta National post...</p>',
        post3: '<h3>New Golf Clubs Review</h3><p>Full review of the golf clubs...</p>'
    };
    
    modalContent.innerHTML = posts[postId];
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Add Score to Scorecard and Update Chart
function addScore(event) {
    event.preventDefault();

    const date = document.getElementById('scoreDate').value;
    const course = document.getElementById('scoreCourse').value;
    const score = document.getElementById('scoreValue').value;
    const fairways = document.getElementById('fairwaysHit').value;
    const gir = document.getElementById('gir').value;
    const putts = document.getElementById('putts').value;

    // Add to scorecard
    const table = document.querySelector('#scorecard tbody');
    const newRow = `<tr>
        <td>${date}</td>
        <td>${course}</td>
        <td>${score}</td>
        <td>${fairways}%</td>
        <td>${gir}%</td>
        <td>${putts}</td>
    </tr>`;
    table.innerHTML += newRow;

    // Update chart
    scoreChart.data.labels.push(date);
    scoreChart.data.datasets[0].data.push(score);
    scoreChart.update();

    // Clear form
    document.getElementById('scoreForm').reset();
}

// Score Progression Chart
const ctx = document.getElementById('scoreChart').getContext('2d');
const scoreChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2024-09-01', '2024-09-05'],
        datasets: [{
            label: 'Scores',
            data: [85, 82],
            borderColor: '#76c7c0',
            backgroundColor: 'rgba(118, 199, 192, 0.5)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Score'
                }
            }
        }
    }
});
