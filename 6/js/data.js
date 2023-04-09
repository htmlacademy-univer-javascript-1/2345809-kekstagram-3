import { getRandomNumber } from "./util.js";
function getPhotos () {
	const photos =[];
	for(let j=0;j<24;j++){
		photos.push({
			id: j+1,
			url:`photos/${j+1}.jpg`,
			description: `фото номер ${j+1}`,
			likes: getRandomNumber(15,200),
			Comments: getRandomNumber(0,200)
		});
	}
	return photos;
};
export {getPhotos}
