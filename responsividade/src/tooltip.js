const tooltip = document.getElementById('tooltip');

tooltip.classList.add('show');
setTimeout(() => {
    tooltip.classList.remove('show');
}, 3000);