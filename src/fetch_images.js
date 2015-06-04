import fetch from 'isomorphic-fetch';
import { CLIENT_ID } from './constants';

async function fetchImages() {
  let response = await fetch('https://api.imgur.com/3/gallery/hot/viral/0.json', {
    headers: {
      Authorization: `Client-ID ${CLIENT_ID}`
    }
  });

  let images = await response.json();

  return images.data;
}

export default fetchImages;
