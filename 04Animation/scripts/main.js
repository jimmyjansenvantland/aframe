
var rotationSpeed = 0.001;
var myOtherBox = document.getElementById('myOtherBox');
var myBox = document.getElementById('myBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	myOtherBox.object3D.rotation.y -= rotationSpeed;
	myOtherBox.object3D.rotation.z -= rotationSpeed/2;
	console.log(myOtherBox.object3D.rotation);
}

function spin2(){
    myBox.object3D.rotation.x += rotationSpeed;
    myBox.object3D.rotation.y += rotationSpeed;
    myBox.object3D.rotation.z += rotationSpeed/2;
    console.log(myBox.object3D.rotation);
}

setInterval(spin, 16);


myOtherBox.addEventListener('mouseover', function( event ){
    rotationSpeed = 0.01;
    spin();
});

myOtherBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.01;
	console.log('mouse enter');
});

myOtherBox.addEventListener('mouseleave', function(){
	rotationSpeed = 0.001;
	console.log('mouse leave');
});

myBox.addEventListener('mouseover', function( event ){
    rotationSpeed = 0.01;
    spin2();
});

myBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.01;
	console.log('mouse enter');
});

myBox.addEventListener('mouseleave', function(){
	rotationSpeed = 0.001;
	console.log('mouse leave');
});



// material="src: #wood" 
// 