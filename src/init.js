import THREE from 'three';
import FirstPersonControls from './first_person_controls';
import PointerLock from './pointer_lock';
import { UNIT_SIZE, WIDTH, HEIGHT } from './constants';
import fancy from './fancy';

export default function() {
  const clock = new THREE.Clock();
  fancy(); // do fancy stuff

  const scene = new THREE.Scene();
  scene.fog = THREE.FogExp2(0xD6F1FF, 0.0005);

  const ASPECT = WIDTH / HEIGHT;
  const objects = {};
  const camera = new THREE.PerspectiveCamera(75, ASPECT, 1, 10000);
  camera.position.set(500, 1500, 500);

  scene.add(camera);

  const MOVEMENTSPEED = 100;
  const LOOKSPEED = 0.075;
  const controls = new FirstPersonControls(camera);
  controls.movementSpeed = MOVEMENTSPEED;
  controls.lookSpeed = LOOKSPEED;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.domElement.style.backgroundColor = 'rgb(0, 0, 150)';

  const container = document.querySelector('#wrapper');

  container.appendChild(renderer.domElement);

  return { scene, objects, camera, renderer, controls, clock };
}
