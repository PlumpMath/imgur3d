import THREE from 'three';
import FirstPersonControls from './first_person_controls';
import { UNIT_SIZE, WIDTH, HEIGHT } from './constants';

export default function() {
  const scene = new THREE.Scene();
  scene.fog = THREE.FogExp2(0xD6F1FF, 0.0005);

  const ASPECT = WIDTH / HEIGHT;
  const camera = new THREE.PerspectiveCamera(60, ASPECT, 1, 10000);
  camera.position.y = UNIT_SIZE * 0.2;
  camera.position.z = 5;

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

  return { scene, camera, renderer, controls };
}
