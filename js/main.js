import { checkLengthStr } from './util.js';
import { getPhotos } from './data.js';
import { drawPic } from './draw.js';
checkLengthStr('zzzz', 6);
drawPic(getPhotos());
