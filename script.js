document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('grid-container');
    const button = document.getElementById('generate-button');

    function createGrid(squaresPerSide) {
        container.innerHTML = '';
        let size = 100 / squaresPerSide;
        container.style.setProperty('--squares-per-side', size + '%');

        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.flexBasis = size + '%';
            square.style.opacity = 0; // Start with opacity at 0
            square.addEventListener('mouseover', function() {
                let currentOpacity = parseFloat(square.style.opacity);
                if (currentOpacity < 1) {
                    square.style.opacity = currentOpacity + 0.1; // Increment opacity by 0.1
                }
            });
            container.appendChild(square);
        }
    }

    createGrid(16); // Initial grid size

    button.addEventListener('click', function() {
        let squaresPerSide = prompt("Enter the number of squares per side for the new grid:", 16);
        if (squaresPerSide !== null && squaresPerSide > 0) {
            createGrid(squaresPerSide);
        }
    });
});
