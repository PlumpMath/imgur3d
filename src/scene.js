import THREE from 'three';
import { UNIT_SIZE } from './constants';

export default function(scene, objects) {
  const MAP_WIDTH = 20;

  const floor = new THREE.Mesh(
    new THREE.BoxGeometry(MAP_WIDTH * UNIT_SIZE, 10, MAP_WIDTH * UNIT_SIZE),
    new THREE.MeshLambertMaterial({ color: 0xEDCBA0 })
  );
  scene.add(floor);
  objects.floor = floor;

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(100, 100, 100),
    new THREE.MeshLambertMaterial({ color: 0x00FF00 })
  );
  cube.position.set(UNIT_SIZE, 50, 0);
  scene.add(cube);
  objects.baseCube = cube;

  const directionalLight1 = new THREE.DirectionalLight(0xFFFFFF, 0.7);
  directionalLight1.position.set(0.5, 1, 0.5);
  scene.add(directionalLight1);

  const directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, 0.5);
  directionalLight2.position.set(-0.5, -1, -0.5);
  scene.add(directionalLight2);

  const hemisphereLight = new THREE.HemisphereLight(0xFFFFFF, 0x000000, 0.8);
  scene.add(hemisphereLight);

  objects.lights = {
    directional: [
      directionalLight1,
      directionalLight2
    ],
    hemisphere: [
      hemisphereLight
    ]
  };
}
