var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/TreeWithDent1.png') {
      myImage.setAttribute ('src','bilder/TorchWithLight.png');
    } else {
      myImage.setAttribute ('src','bilder/TreeWithDent1.png');
    }
}

document.querySelector('li').onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/TreeWithDent1.png') {
        myImage.setAttribute ('src','bilder/TorchWithLight.png');
      } else {
        myImage.setAttribute ('src','bilder/TreeWithDent1.png');
      }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Bitte geben Sie Ihren Namen ein.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Wellcome, ' + myName + " to the best Website";
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Wellcome ' + storedName + " to the best Website";
  }

  myButton.onclick = function() {
    setUserName();
  }

  <input type="button" 
  onclick="location.href='https://google.com';" 
  value="Go to Google" />

/*
document.querySelector('html').onclick = function() {
    alert('Hey! Nicht so viel klicken!');
}
*/