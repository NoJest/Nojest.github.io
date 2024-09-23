//Creaating a h2 element add some text content
const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript";
//Including code to add h2 element to the body element in DOM
document.querySelector('body').appendChild(h2);
//Adding event listener for buttons to be links
// 
document.addEventListener('DOMContentLoaded', () => {
    const instagramButton = document.querySelector('.links button:nth-child(1)');
    const spotifyButton = document.querySelector('.links button:nth-child(2)');
  
    instagramButton.addEventListener('click', () => {
      window.open('https://Instagram.com/Nojest_', '_blank');
    });
  
    spotifyButton.addEventListener('click', () => {
      window.open('https://open.spotify.com/user/iohf8imf7f923nr073aw5trpq?si=59ebe575ce984d81', '_blank');
    });
  });
  