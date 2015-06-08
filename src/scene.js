import THREE from 'three';
import { UNIT_SIZE } from './constants';

export default function(scene, objects) {
  const MAP_WIDTH = 20;
  THREE.ImageUtils.crossOrigin = '';


  //setup floor for perspective
  let imageUrl = 'http://i.imgur.com/Lv5n6Ch.png'; // img/grid.jpg doesn't work due to cross origin crap
  var texture = THREE.ImageUtils.loadTexture( imageUrl );
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 15, 100 );
  let material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.BackSide
  });
  objects.floor = new THREE.Mesh(
    new THREE.PlaneGeometry(3000,20000),
    material
  );
  objects.floor.position.set(0, 0, 0);
  objects.floor.rotation.x = Math.PI / 2;




  //setup invisible raytracer intersection plane
  objects.raytracePlane = new THREE.Mesh(
      new THREE.PlaneGeometry(3000,20000),
      material
  );
  objects.raytracePlane.position.set(-150, 100, 0);
  objects.raytracePlane.lookAt(new THREE.Vector3(-350, 600, 0));




  //setup base sphere at 0,0,0 origin for reference
  objects.baseSphere = new THREE.Mesh(
    new THREE.SphereGeometry(30, 20, 20),
    new THREE.MeshLambertMaterial({ color: 0x00FF00 })
  );
  objects.baseSphere.position.set(0, 0, 0);



  //setup a sphere that follows the mouse
  objects.mouseSphere = new THREE.Mesh(
      new THREE.SphereGeometry(30, 20, 20),
      new THREE.MeshLambertMaterial({ color: 0xFFFF00 })
  );

  //also a flashlight
  objects.mouseLight = new THREE.PointLight( 0xFFFFFF, 1, 1000 );



  objects.lights = {
    directional: [],
    hemisphere: []
  };

  objects.lights.directional[1] = new THREE.DirectionalLight(0xFFFFFF, 0.5);
  objects.lights.directional[1].position.set(-100, 0, 0);
  scene.add(objects.lights.directional[1]);

  objects.lights.directional[2] = new THREE.DirectionalLight(0xFFFFFF, 0.5);
  objects.lights.directional[2].position.set(100,0,0);



  // // This (or some other directional / point light) would be neat to have it follow the mouse and act as a 'flashlight', lighting up images as you hover near
  //const hemisphereLight = new THREE.HemisphereLight(0xFFFFFF, 0x000000, 0.8);
  //scene.add(hemisphereLight);




  scene.add(objects.floor);
  scene.add(objects.raytracePlane);
  scene.add(objects.baseSphere);
  scene.add(objects.mouseSphere);
  scene.add(objects.mouseLight);
  scene.add(objects.lights.directional[1]);
  scene.add(objects.lights.directional[2]);

}
