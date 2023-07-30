const loaderStyles = `
  $animation-duration: 1.8s;

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 10px;
    background: #3498DB;
    border-radius: 5px;
    animation: load $animation-duration ease-in-out infinite; 
  }

  .loader:before,
  .loader:after {
    position: absolute; 
    display: block;
    content: "";
    animation: load $animation-duration ease-in-out infinite;
    height: 10px;
    border-radius: 5px;
  }

  .loader:before {
    top: -20px;
    left: 10px;
    width: 40px;
    background: #EF4836;
  }

  .loader:after {
    bottom: -20px;
    width: 35px;
    background: #F5AB35; 
  }

  @keyframes load {
    0% {
      transform: translateX(40px);
    }
  
    50% {
      transform: translateX(-30px);
    }
  
    100% {
      transform: translateX(40px);
    }
  }
`;

function createLoader() {
  const loaderDiv = document.createElement('div');
  loaderDiv.className = 'loader';
  loaderDiv.id = 'loader';
  document.body.appendChild(loaderDiv);
}

function showContent() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');
  loader.style.display = 'none';
  content.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  // Add the loader styles dynamically
  const styleElement = document.createElement('style');
  styleElement.innerHTML = loaderStyles;
  document.head.appendChild(styleElement);

  // Show the loader and mask the content
  createLoader();

  // Simulate some delay before hiding the loader and revealing the content (for demonstration purposes)
  setTimeout(showContent, 3000); // Replace 3000 with the desired delay in milliseconds
});
