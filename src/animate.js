export default function(scene, camera, renderer) {
  (function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);  
  }());
}
