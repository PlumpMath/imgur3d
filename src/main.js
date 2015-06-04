import init from './init';
import setupScene from './scene';
import animate from './animate';

const { scene, camera, renderer, controls } = init();
setupScene(scene);
animate(scene, camera, renderer);



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//add a bunch of random spheres
var sphereGeometry = new THREE.SphereGeometry( 0.1, 32, 32 );
var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var posScale = 5;
var spherePos = {
    x: 0,
    y: 0,
    z: 0
};
var speedMax = 0.7;
var speedMin = 0.5;
var spheres = [];
for (var i = 0; i<10; i++){
    spheres[i] = new THREE.Mesh( sphereGeometry, sphereMaterial );
    spheres[i].speed = Math.random() * (speedMax - speedMin) + speedMin;
    spheres[i].direction = 1;
    spherePos.x = (0.5 - Math.random()) * posScale;
    spherePos.y = 0;
    spherePos.z = (0.5 - Math.random()) * posScale;
    spheres[i].position.set(spherePos.x, spherePos.y, spherePos.z);
    scene.add( spheres[i] );
}

camera.position.z = 5;

function render() {
    for (i in spheres){
        if (spheres[i].position.y > 1){
            spheres[i].direction = -1;
        } else if (spheres[i].position.y < 0){
            spheres[i].direction = 1;
        }
        spheres[i].position.y += spheres[i].direction * 0.1 * spheres[i].speed;
    }
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}
render();