document.addEventListener('DOMContentLoaded', () => {
    // Creating an h2 element and adding some text content
    const h2 = document.createElement('h2');
    h2.textContent = "Brought to you by NoJest";
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
  
    // Event listeners for showing little logos
    const spotifyLogo = document.getElementById('spotifylogo');
    const instagramLogo = document.getElementById('instagramlogo');
    const githubLogo = document.getElementById('githublogo');
  
    const showLogo = (logo, event) => {
      logo.style.display = 'block';
      logo.style.top = `${event.pageY}px`;
      logo.style.left = `${event.pageX}px`;
    };
  
    const hideLogo = (logo) => {
      logo.style.display = 'none';
    };
  
    spotifyButton.addEventListener('mouseover', (event) => showLogo(spotifyLogo, event));
    spotifyButton.addEventListener('mouseout', () => hideLogo(spotifyLogo));
    spotifyButton.addEventListener('mousemove', (event) => showLogo(spotifyLogo, event));
  
    instagramButton.addEventListener('mouseover', (event) => showLogo(instagramLogo, event));
    instagramButton.addEventListener('mouseout', () => hideLogo(instagramLogo));
    instagramButton.addEventListener('mousemove', (event) => showLogo(instagramLogo, event));
  
    githubButton.addEventListener('mouseover', (event) => showLogo(githubLogo, event));
    githubButton.addEventListener('mouseout', () => hideLogo(githubLogo));
    githubButton.addEventListener('mousemove', (event) => showLogo(githubLogo, event));
  
    // Form validation
    document.querySelector('form').addEventListener('submit', function (event) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        event.preventDefault();
      }
    });
  
    // Dark mode toggle
    document.getElementById('theme-toggle').addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
    });
  });