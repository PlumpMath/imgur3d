import velocity from 'velocity-animate';

export default function() {
  const breath = document.querySelector('.Breath');
  const wrapper = document.querySelector('#wrapper');
  const fadeInDuration = 3000;

  velocity(
    wrapper,
    {
      opacity: 1
    },
    {
      easing: 'easeInSine',
      duration: fadeInDuration
    }
  );

  velocity(
    breath,
    {
      opacity: 1
    },
    {
      loop: true,
      easing: 'easeInSine',
      duration: 2500,
      delay: fadeInDuration
    }
  );
}

