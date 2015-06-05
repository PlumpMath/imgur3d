import THREE from 'three';
import fetchImages from './fetch_images';
import setupTweening from './tweening';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async function(scene) {
  THREE.ImageUtils.crossOrigin = '';
  const images = await fetchImages();
  const imageObjects = [];

  for (let i = 0; i < 30; i++) {
    if (images[i].is_album) continue;
    let imageUrl = images[i].link;
    let geometry = new THREE.BoxGeometry(100, 100, 5);
    let blankMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
    let material = new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture(`${imageUrl}b`),
      color: 0xFFFFFF
    });

    let materials = [
      blankMaterial,
      blankMaterial,
      blankMaterial,
      blankMaterial,
      material,
      blankMaterial
    ];

    let mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
    mesh.position.set(getRandomInt(0, 1600), getRandomInt(0, 400), getRandomInt(10, 1000));
    mesh.lookAt(new THREE.Vector3(0, 0, 0));
    mesh.name = 'image';
    mesh.info = images[i];

    scene.add(mesh);
    imageObjects.push(mesh);
  }
  setupTweening(imageObjects);
}
