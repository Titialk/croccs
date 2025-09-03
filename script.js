document.addEventListener('DOMContentLoaded', () => {
    const jibbitzContainer = document.getElementById('jibbitz-container');
    const numberOfJibbitz = 30; // Quantidade de Jibbitz flutuantes

    for (let i = 0; i < numberOfJibbitz; i++) {
        createJibbitz();
    }

    function createJibbitz() {
        const jibbitz = document.createElement('div');
        jibbitz.classList.add('jibbitz');

        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        jibbitz.style.left = `${startX}vw`;
        jibbitz.style.top = `${startY}vh`;

        const scale = 0.5 + Math.random() * 0.8; 
        const duration = 15 + Math.random() * 10; 
        const xOffset = (Math.random() - 0.5) * 50; 
        const yOffset = (Math.random() - 0.5) * 50; 

        jibbitz.style.setProperty('--scale', scale);
        jibbitz.style.setProperty('--x-offset', `${xOffset}px`);
        jibbitz.style.setProperty('--y-offset', `${yOffset}px`);
        
        jibbitz.style.animation = `float ${duration}s ease-in-out infinite`;
        jibbitz.style.animationDelay = `-${Math.random() * duration}s`;

        jibbitzContainer.appendChild(jibbitz);
    }
});
