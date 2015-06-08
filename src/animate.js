import THREE from 'three';
import TWEEN from 'tween.js';

export default function(scene, objects, camera, renderer, controls, clock, HUD) {
  (function animate() {
    requestAnimationFrame(animate);

    TWEEN.update();

    renderer.render(scene, camera);

    const delta = clock.getDelta();
    controls.update(delta);

    // Display HUD
    let closestImage = {
      distance: 1000,
      info: null
    };

    scene.traverse((obj) => {
      if (obj.name === 'person') {
        obj.rotation.y -= 0.001;
      }

      if (obj.name === 'naut') {
        obj.rotation.x += 0.0001;
        obj.rotation.y += 0.0003;
        obj.rotation.z += 0.0002;
      }

      if (obj.type !== 'Mesh' || obj.name !== 'image') { return; }

      let currentImageDistance = camera.position.distanceTo(obj.position);
    
      if (currentImageDistance < closestImage.distance) {
        closestImage.distance = currentImageDistance;
        closestImage.info = obj.info;
      }
    });

    const op = closestImage.info.account_url || 'anonymous';
    const closestMessage = closestImage.info ?
      `<a target="_blank" href="http://imgur.com/gallery/${closestImage.info.id}">${closestImage.info.title}</a> by <a target="_blank" href="http://imgur.com/user/${op}">${op}</a>` :
      null;

    HUD.querySelector('.HUD-info').innerHTML = closestMessage;

    if (closestImage.distance < 100) {
      if (HUD.classList.contains('visible')) { return; }

      HUD.classList.add('visible');
    } else {
      HUD.classList.remove('visible');
    }
  }());
}

