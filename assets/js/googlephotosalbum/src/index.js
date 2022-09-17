class Album {
	constructor(name) {
		console.log('Album:', name);
	}
}

let GooglePhotosAlbum = {
	new: function (name) {
		return new Album(name);
	},
};

export default GooglePhotosAlbum;
