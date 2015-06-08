require('babel/polyfill');
import init from './init';
import setupScene from './scene';
import setupTweening from './tweening';
import animate from './animate';
import createPictures from './create_pictures';
import createHUD from './create_hud';
import setupRoom from './setup_room';

const { scene, objects, camera, renderer, controls, clock } = init();
const HUD = createHUD();
setupScene(scene, objects);
createPictures(scene, objects);
//setupRoom(scene);
//setupTweening(objects.basecube);
animate(scene, objects, camera, renderer, controls, clock, HUD);

