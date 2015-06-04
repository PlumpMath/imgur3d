import init from './init';
import setupScene from './scene';
import animate from './animate';

const { scene, camera, renderer, controls } = init();
setupScene(scene);
animate(scene, camera, renderer);


