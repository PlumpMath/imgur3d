require('babel/polyfill');
import init from './init';
import setupScene from './scene';
import animate from './animate';
import fetchImages from './fetch_images';

const { scene, camera, renderer, controls } = init();
setupScene(scene);
animate(scene, camera, renderer);

fetchImages();

