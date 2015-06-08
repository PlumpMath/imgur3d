import TWEEN from 'tween.js';
import { UNIT_SIZE } from './constants';

export default function(objects) {
    const addRandomTweening = function(object){

        const position = { y: object.position.y };
        const target = { y: object.position.y + 25 };
        const targetBack = { y: object.position.y };

        const update = function(){
            object.position.y = position.y;
        };

        let maxTweenDelay = 7800;
        let minTweenDelay = 3000;
        let tweenDelay = Math.random() * (maxTweenDelay - minTweenDelay + 1) + minTweenDelay;
        let easing = TWEEN.Easing.Circular.InOut;

        const tweenHead = new TWEEN.Tween(position).to(target, tweenDelay)
            .easing(easing)
            .onUpdate(update);
        const tweenBack = new TWEEN.Tween(position).to(targetBack, tweenDelay)
            .easing(easing)
            .onUpdate(update);

        tweenHead.chain(tweenBack);
        tweenBack.chain(tweenHead);

        tweenHead.start();
    };

    if (objects.constructor === Array){
        for (var i=0; i<objects.length; i++){
            addRandomTweening(objects[i]);
        }
    } else {
        addRandomTweening(objects);
    }

}
