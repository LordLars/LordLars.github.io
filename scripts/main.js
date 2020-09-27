//--------------------------
//       UserName:
//--------------------------

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


//--------------------------
//       ChangePic:
//--------------------------

var items = document.querySelectorAll("#list li"),
    tab = [], index,
    myImage = document.querySelector('img');


for(var i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
}

for(var i = 0; i < items.length;i++){
    items[i].onclick = function(){
        index = tab.indexOf(this.innerHTML);
        console.log(this.innerHTML + " INDEX: " + index);
        myImage.setAttribute ('src','bilder/' + (index + 1) + '.png');
    };
}

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
    for(var i = 0; i < items.length;i++){

      if(mySrc === "bilder/" + (i + 1) + ".png"){
        console.log("PIC: " + (i + 1));
        if(i < (items.length - 1)){
          myImage.setAttribute ('src','bilder/' + (i + 2) + '.png');
          items[i].addClass('active');
          console.log("Item: " + i);
        }else{
          myImage.setAttribute ('src','bilder/' + (1) + '.png');
        }

      }
    }
}




//--------------------------
//       List:
//--------------------------
function setActive(){
  $items[0].addClass('active').siblings().removeClass('active');
}

$(document).on('click', 'ul li', function(){
  $(this).addClass('active').siblings().removeClass('active')
})





/*
function changePic(){
  myImage.setAttribute ('src','bilder/TorchWithLight.png');
}
*/

/*
document.querySelector('html').onclick = function() {
    alert('Hey! Nicht so viel klicken!');
}
*/