import THREE from 'three';
import FirstPersonControls from './first_person_controls';
import PointerLock from './pointer_lock';
import { UNIT_SIZE, WIDTH, HEIGHT } from './constants';

export default function() {
  const clock = new THREE.Clock();

  const scene = new THREE.Scene();
  scene.fog = THREE.FogExp2(0xD6F1FF, 0.0005);

  const ASPECT = WIDTH / HEIGHT;
  const objects = {};
  const camera = new THREE.PerspectiveCamera(75, ASPECT, 1, 10000);
  camera.position.x = -350;
  camera.position.y = 350;

  scene.add(camera);

  const MOVEMENTSPEED = 100;
  const LOOKSPEED = 0.075;
  const controls = new FirstPersonControls(camera);
  controls.movementSpeed = MOVEMENTSPEED;
  controls.lookSpeed = LOOKSPEED;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.domElement.style.backgroundColor = 'rgb(0, 0, 150)';

  document.body.appendChild(renderer.domElement);

  return { scene, objects, camera, renderer, controls, clock };
}
