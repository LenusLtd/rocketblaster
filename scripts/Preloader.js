var BasicGame = {};

BasicGame.Preloader = function (game) {
	this.ready = false;
};

BasicGame.Preloader.prototype = {

	preload: function () {
		//display a loading screen message whie the assets
		this.preloaderText = this.add.text(this.world.centerX,this.world)

///FIX ME COMPLete ^^^^^^

this.preloadText.anchor.setTo(0.5,0.5);
		//Preload the images,Sprites and audio assets into memory
  this.load.image('logo', 'assets/PhaserLogo.png');
	this.load.image('starfield', 'assets/starfield.png');
	this.load.image('startButton', 'assets/startButton.png');
	this.load.image('Ship', 'assets/ship.png');
	},

	create: function () {

	},

	update: function () {
		this.game.state.start('MainMenu');

	}

};
