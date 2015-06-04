require('babel/polyfill');
import init from './init';
import setupScene from './scene';
import animate from './animate';
import createPictures from './create_pictures';

const { scene, camera, renderer, controls, clock } = init();
setupScene(scene);
createPictures(scene);
animate(scene, camera, renderer, controls, clock);

