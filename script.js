document.addEventListener('DOMContentLoaded', () => {
    // Creating an h2 element and adding some text content
    const h2 = document.createElement('h2');
    h2.textContent = "This content added by JavaScript";
    // Including code to add h2 element to the body element in DOM
    document.querySelector('body').appendChild(h2);

    // Event listeners for buttons to open links
    const instagramButton = document.querySelector('.links button:nth-child(2)');
    const spotifyButton = document.querySelector('.links button:nth-child(3)');
    const githubButton = document.querySelector('.links button:nth-child(1)');

    instagramButton.addEventListener('click', () => {
        window.open('https://Instagram.com/Nojest_', '_blank');
    });

    spotifyButton.addEventListener('click', () => {
        window.open('https://open.spotify.com/user/iohf8imf7f923nr073aw5trpq?si=59ebe575ce984d81', '_blank');
    });

    githubButton.addEventListener('click', () => {
        window.open('https://github.com/Nojest', '_blank');
    });

    // Event listeners for mouseover, mouseout, and mousemove for showing little logos
    const spotifyLogo = document.getElementById('spotifylogo');
    const instagramLogo = document.getElementById('instagramlogo');
    const githubLogo = document.getElementById('githublogo');

    spotifyButton.addEventListener('mouseover', (event) => {
        spotifyLogo.style.display = 'block';
        spotifyLogo.style.top = `${event.pageY}px`;
        spotifyLogo.style.left = `${event.pageX}px`;
    });

    spotifyButton.addEventListener('mouseout', () => {
        spotifyLogo.style.display = 'none';
    });

    spotifyButton.addEventListener('mousemove', (event) => {
        spotifyLogo.style.top = `${event.pageY}px`;
        spotifyLogo.style.left = `${event.pageX}px`;
    });

    instagramButton.addEventListener('mouseover', (event) => {
        instagramLogo.style.display = 'block';
        instagramLogo.style.top = `${event.pageY}px`;
        instagramLogo.style.left = `${event.pageX}px`;
    });

    instagramButton.addEventListener('mouseout', () => {
        instagramLogo.style.display = 'none';
    });

    instagramButton.addEventListener('mousemove', (event) => {
        instagramLogo.style.top = `${event.pageY}px`;
        instagramLogo.style.left = `${event.pageX}px`;
    });

    githubButton.addEventListener('mouseover', (event) => {
        githubLogo.style.display = 'block';
        githubLogo.style.top = `${event.pageY}px`;
        githubLogo.style.left = `${event.pageX}px`;
    });

    githubButton.addEventListener('mouseout', () => {
        githubLogo.style.display = 'none';
    });

    githubButton.addEventListener('mousemove', (event) => {
        githubLogo.style.top = `${event.pageY}px`;
        githubLogo.style.left = `${event.pageX}px`;
    });
});