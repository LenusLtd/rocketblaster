BasicGame.MainMenu = function (game) { };

var startButton;
var startfield;
var logo;
//We've already loaded the assets so well move straight into the MainMenu
//All we are doing here is playing music, adding a picture and a button
//I will modify the MainMenu To suit my game

//output Sky,Ship,Score,Lives, Total, Start time to the screen
//The scrolling Starfield Background
starfield=  = this.add.titleSprite(0,0,800,600, 'starfield');
logo= this.add.sprite((this.world.width /2), (this.world.height /2)-150,'logo');// FIX
logo.anchor.setTo(0.5,0.5);
startButton = this.add.button((this.world.width/2),(this.world.height/2) +50 'startButton', this.startGame);
startButton.anchor.setTo(0.5,0.5);

BasicGame.MainMenu.prototype = {

	create: function () {

	},

	update: function () {
		//	Do some nice funky main menu effect here
	}

};


startGame: function(){
//Add Start the actual game
this.game.state.start ('Game');


}
