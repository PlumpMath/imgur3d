import THREE from 'three';

export default function(scene) {
  const jsonLoader = new THREE.JSONLoader();
  jsonLoader.load('assets/Bubblebox.js', (geometry, materials) => {
    const person = new THREE.Mesh(
      geometry,
      new THREE.MeshFaceMaterial(materials)
    );

    person.position.set(520, 20, 40);
    person.name = 'person';

    scene.add(person);
  });

  jsonLoader.load('assets/astronaut.js', (geometry, materials) => {
    const naut = new THREE.Mesh(
      geometry,
      new THREE.MeshFaceMaterial(materials)
    );

    naut.position.set(440, 0, 440);
    naut.rotation.set(0, Math.PI / 4 * 2.8, 0);
    naut.name = 'naut';
    naut.scale.set(20, 20, 20);

    scene.add(naut);
  });
}
