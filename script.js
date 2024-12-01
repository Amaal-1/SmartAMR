// Handle form submission and display a success message
document.getElementById('usage-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const antibiotic = document.getElementById('antibiotic').value;
    const duration = document.getElementById('duration').value;
    const symptoms = document.getElementById('symptoms').value;

    // Show a success message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = `<p>Thank you for submitting your data! You reported the use of <strong>${antibiotic}</strong> for <strong>${duration}</strong> days to treat <strong>${symptoms}</strong>.</p>`;
    
    // Clear form fields
    document.getElementById('usage-form').reset();
});

// Simulate heatmap (replace with real data and interactive map later)
const canvas = document.getElementById('heatmapCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

// Simple simulated heatmap effect (can be replaced with real heatmap data later)
function drawHeatmap() {
    const colors = ['#ffcccc', '#ff6666', '#ff3333', '#cc0000', '#990000'];
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 5, 5);
    }
}

drawHeatmap();
