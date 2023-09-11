import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedSeconds = parseFloat(
  localStorage.getItem('videoplayer-current-time')
);

if (!isNaN(savedSeconds)) {
  player.setCurrentTime(savedSeconds);
}

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTimeInSeconds = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTimeInSeconds);
  }, 1000)
);
