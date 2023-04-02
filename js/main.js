function getRandomNumber(min, max) {
	if (min > max) {
		const t = min;
		min = max;
		max = t;
	};

	const res = Math.round(Math.random() * (max - min) + min);
	return res;

};

function checkLengthStr(str, length) {
	return str.length <= length;
};
checkLengthStr('zzzz', 6);
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
getPhotos();
