import THREE from 'three';

export default function(scene) {
  const roomGroup = new THREE.Object3D();

  const wallLeft = new THREE.Mesh(
    new THREE.PlaneGeometry(150, 150),
    new THREE.MeshPhongMaterial({ color: 0xffffff })
  );
  wallLeft.material.side = THREE.DoubleSide;
  wallLeft.rotation.y = Math.PI / 2;
  wallLeft.position.x = -75;
  wallLeft.position.z = 0;
  roomGroup.add(wallLeft);

  const wallRight = wallLeft.clone();
  wallRight.position.x = 75;
  roomGroup.add(wallRight);

  const wallBack = wallLeft.clone();
  wallBack.rotation.y = 0;
  wallBack.position.y = 65;
  wallBack.position.x = 0;
  wallBack.position.z = -75;
  roomGroup.add(wallBack);

  const doorWall = new THREE.Shape();
  doorWall.moveTo(0, 0);
  doorWall.lineTo(65, 0);
  doorWall.lineTo(65, 50);
  doorWall.lineTo(105, 50);
  doorWall.lineTo(105, 0);
  doorWall.lineTo(150, 0);
  doorWall.lineTo(150, 100);
  doorWall.lineTo(0, 100);
  doorWall.lineTo(0, 0);
  const dWall = new THREE.Mesh(
    new THREE.ShapeGeometry(doorWall),
    new THREE.MeshPhongMaterial({ color: 0xffffff })
  );
  dWall.material.side = THREE.DoubleSide;
  dWall.position.set(-75, -10, 75);
  roomGroup.add(dWall);

  const interiorLamp = new THREE.PointLight(0x33ff00, 1, 150);
  interiorLamp.position.set(0, 20, 0);
  roomGroup.add(interiorLamp);

  const exteriorLampLeft = new THREE.PointLight(0x0033ff, 1, 150);
  exteriorLampLeft.position.set(-50, 10, 120);
  roomGroup.add(exteriorLampLeft);

  const exteriorLampRight = exteriorLampLeft.clone();
  exteriorLampRight.position.x = 50;
  roomGroup.add(exteriorLampRight);

  roomGroup.position.set(100, 10, 30);
  scene.add(roomGroup);
}
