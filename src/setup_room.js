import THREE from 'three';

export default function(scene) {
  function buildHallwayLamps(group) {
    const jsonLoader = new THREE.JSONLoader();
    jsonLoader.load('assets/lamp.json', (obj) => {
      obj.position.set(10, 30, 10);
      scene.add(obj);
    });

    for (let i = 0; i < 8; i ++) {
      const lamp = new THREE.PointLight(0xcc00cc, 1, 350);
      lamp.position.set(i * 200 - 500, 160, 0);
      lamp.name = 'lamp'
      group.add(lamp);
      // group.add(new THREE.PointLightHelper(lamp), 1);
    }

    for (let i = 0; i < 10; i ++) {
      const lamp = new THREE.PointLight(0xcccc00, 1, 350);
      lamp.position.set(0, 160, i * 200 - 1000);
      lamp.name = 'lamp'
      group.add(lamp);
      // group.add(new THREE.PointLightHelper(lamp), 1);
    }
  }

  const buildingGroup = new THREE.Object3D();
  const jsonLoader = new THREE.JSONLoader();
  jsonLoader.load('assets/3dimgur_textures.js', (geometry, materials) => {
    for (let i = 0; i < materials.length; i++) {
      materials[i].side = THREE.DoubleSide;
    }

    const buildingMesh = new THREE.Mesh(
      geometry,
      new THREE.MeshFaceMaterial(materials)
    );

    buildingMesh.position.set(0, 0, 0);
    buildingMesh.scale.set(100, 100, 100);

    buildingGroup.add(buildingMesh);

    buildHallwayLamps(buildingGroup);

    buildingGroup.position.set(0, -75, 0);
    buildingGroup.name = 'buildingGroup';
    scene.add(buildingGroup);
  });
}
