
import { getRandomElement } from './util.js';
import { getRandomInteger } from './util.js';

import { createdIdPost } from './util.js';
import { createdPhotoUrl } from './util.js';

import { createComment } from './comments.js';

import {thePost} from './posts.js';
/*

const createPost = () => ({
  id: createdIdPost(),
  url: `photos/${createdPhotoUrl()}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: Array.from({ length: getRandomInteger(1, COMMENTS_COUNT) }, createComment),
});

const thePost = () => {
  return Array.from({ length: POSTS }, createPost);
}

console.log(thePost());
*/
