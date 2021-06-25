

// hanging individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
    myOtherBox.object3D.rotation.x += rotationSpeed;
    console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps

myOtherBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.90;
	console.log('mouse enter');
});