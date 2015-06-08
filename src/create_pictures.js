import THREE from 'three';
import fetchImages from './fetch_images';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async function(scene, objects) {
  THREE.ImageUtils.crossOrigin = '';
  const images = await fetchImages();
  objects.images = [];

  const availableLocations = [
    {
      x: -580,
      y: 40,
      z: 70,
      rotation: {
        x: 0,
        y: Math.PI / 2,
        z: 0
      }
    },
    {
      x: -380,
      y: 40,
      z: -675,
      rotation: {
        x: 0,
        y: Math.PI / 2,
        z: 0
      }
    },

    {
      x: -380,
      y: 40,
      z: -380,
      rotation: {
        x: 0,
        y: Math.PI / 2,
        z: 0
      }
    },
    {
      x: -380,
      y: 40,
      z: 420,
      rotation: {
        x: 0,
        y: Math.PI / 2,
        z: 0
      }
    },
    {
      x: -380,
      y: 40,
      z: 700,
      rotation: {
        x: 0,
        y: Math.PI / 2,
        z: 0
      }
    },
    {
      x: 690,
      y: 40,
      z: 70,
      rotation: {
        x: 0,
        y: Math.PI / 2 * -1,
        z: 0
      }
    },
    {
      x: 490,
      y: 40,
      z: 420,
      rotation: {
        x: 0,
        y: Math.PI / 2 * -1,
        z: 0
      }
    },
    {
      x: 490,
      y: 40,
      z: 700,
      rotation: {
        x: 0,
        y: Math.PI / 2 * -1,
        z: 0
      }
    },
    {
      x: 490,
      y: 40,
      z: -380,
      rotation: {
        x: 0,
        y: Math.PI / 2 * -1,
        z: 0
      }
    },
    {
      x: 490,
      y: 40,
      z: -675,
      rotation: {
        x: 0,
        y: Math.PI / 2 * -1,
        z: 0
      }
    }
  ];

  for (let i = 0; i < 30; i++) {
    if (!availableLocations[i]) break;

    let imageUrl = images[i].is_album ? `http://i.imgur.com/${images[i].cover}b.jpg` : images[i].link;
    console.log(images[i]);
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
    mesh.position.set(
      availableLocations[i].x,
      availableLocations[i].y,
      availableLocations[i].z
    );
    mesh.rotation.set(
      availableLocations[i].rotation.x,
      availableLocations[i].rotation.y,
      availableLocations[i].rotation.z
    );
    mesh.name = 'image';
    mesh.info = images[i];

    scene.add(mesh);
    objects.images.push(mesh);
  }
}
