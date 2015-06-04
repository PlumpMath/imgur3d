import THREE from 'three';
import FirstPersonControls from './first_person_controls';

export default function() {
  const scene = new THREE.Scene();
  scene.fog = THREE.FogExp2(0xD6F1FF, 0.0005);

  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;
  const ASPECT = WIDTH / HEIGHT;
  const camera = new THREE.PerspectiveCamera(60, ASPECT, 1, 10000);

  scene.add(camera);

  const MOVEMENTSPEED = 100;
  const LOOKSPEED = 0.075;
  const controls = new FirstPersonControls(camera);
  controls.movementSpeed = MOVEMENTSPEED;
  controls.lookSpeed = LOOKSPEED;
  controls.noFly = true;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(WIDTH, HEIGHT);

  renderer.domElement.style.backgroundColor = 'rgb(0, 0, 150)';
  document.body.appendChild(renderer.domElement);
}
