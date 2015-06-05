import THREE from 'three';
import fetchImages from './fetch_images';
import setupTweening from './tweening';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async function(scene, objects) {
  THREE.ImageUtils.crossOrigin = '';
  const images = await fetchImages();
  objects.images = [];

  for (let i = 0; i < 10; i++) {
    if (images[i].is_album) continue;
    let imageUrl = images[i].link;
    console.log(imageUrl);
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
    mesh.position.set(getRandomInt(0, 400), getRandomInt(200, 300), getRandomInt(-600, 600));
    mesh.lookAt(new THREE.Vector3(-350, 350, 0));
    mesh.name = 'image';
    mesh.info = images[i];

    scene.add(mesh);
    objects.images.push(mesh);
  }
  setupTweening(objects.images);
}
