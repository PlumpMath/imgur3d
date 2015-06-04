function animate(scene, camera, renderer) {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

export default animate;
