BasicGame.Game = function (game) {};

// Grapghical Objects
var ship;

BasicGame.Game.prototype = {

	create: function () {
       //Specify the pysics of the game to ARCADE
			 this.physics.startsystem(Phaser.Physics.ARCADE);
			 //Add the starfield and logo on screen
			 this.starfield = this.add.tileSprite(0,0,800,600) 'starfield');
			 //Add the ship on the screen, set physics and the boundaries
			 ship = this.add.sprite((this.world.width /2,) this.world.height -50, 'ship');
			 ship.anchor.setTo(0.5,0);
			 this.physics.enable(ship, Phaser.Physics.ARCADE);
			 ship.body.collideWorldBounds = True;

	},

	update: function () {
		//execute 'createUfo','createLife','moveShip','collisionDetection' function

	}

};
