import THREE from 'three';
import { UNIT_SIZE } from './constants';

export default function(scene, objects) {
  const geometry = new THREE.SphereGeometry(3000, 60, 40);
  const uniforms = {
    texture: { type: 't', value: THREE.ImageUtils.loadTexture('assets/sky.jpg') }
  };

  const material = new THREE.ShaderMaterial( {
    uniforms:       uniforms,
    vertexShader:   document.getElementById('sky-vertex').textContent,
    fragmentShader: document.getElementById('sky-fragment').textContent
  });

  const skyBox = new THREE.Mesh(geometry, material);
  skyBox.scale.set(-1, 1, 1);
  skyBox.eulerOrder = 'XZY';
  skyBox.renderDepth = 1000.0;
  scene.add(skyBox);

  const MAP_WIDTH = 20;
  THREE.ImageUtils.crossOrigin = '';

  const directionalLight1 = new THREE.DirectionalLight(0xFFFFFF, 0.5);
  directionalLight1.position.set(-100, 0, 0);
  scene.add(directionalLight1);

  const directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, 0.5);
  directionalLight2.position.set(100,0,0);
  scene.add(directionalLight2);

  const hemisphereLight = new THREE.HemisphereLight(0xFFFFFF, 0xCCCCCC, 0.2);
  scene.add(hemisphereLight);
}
