console.log('Loaded!');
var element = document.getElementById('main-text')
;
element.innerHTML = "My test run";

var img = document.getElementByID('madi');

img.onclick = function(){
    var interval = setInterval(moveLeft,1);
};