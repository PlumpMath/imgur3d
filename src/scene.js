import THREE from 'three';
import { UNIT_SIZE } from './constants';

export default function(scene) {
  const MAP_WIDTH = 20;

  const floor = new THREE.Mesh(
    new THREE.BoxGeometry(MAP_WIDTH * UNIT_SIZE, 10, MAP_WIDTH * UNIT_SIZE),
    new THREE.MeshLambertMaterial({ color: 0xEDCBA0 })
  );
  scene.add(floor);

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshLambertMaterial({ color: 0x00FF00 })
  );
  scene.add(cube);

  const directionalLight1 = new THREE.DirectionalLight(0xFFFFFF, 0.7);
  directionalLight1.position.set(0.5, 1, 0.5);
  scene.add(directionalLight1);

  const directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, 0.5);
  directionalLight2.position.set(-0.5, -1, -0.5);
  scene.add(directionalLight2);
}
