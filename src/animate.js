import THREE from 'three';

export default function(scene, camera, renderer, controls, clock, HUD) {
  (function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);

    const delta = clock.getDelta();
    controls.update(delta);

    let closestImage = {
      distance: 1000,
      title: null
    };

    scene.traverse((obj) => {
      if (obj.type !== 'Mesh' || obj.name !== 'image') { return; }

      let currentImageDistance = camera.position.distanceTo(obj.position);
    
      if (currentImageDistance < closestImage.distance) {
        closestImage.distance = currentImageDistance;
        closestImage.title = obj.title;
      }
    });

    const closestMessage = closestImage.distance < 100 ?
      `${closestImage.distance} - ${closestImage.title}` :
      'get closer to an image';

    HUD.querySelector('.HUD-info').textContent = closestMessage;
  }());
}

