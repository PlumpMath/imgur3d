export default function(scene, camera, renderer, controls, clock) {
  (function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);

    const delta = clock.getDelta();
    controls.update(delta);
  }());
}
