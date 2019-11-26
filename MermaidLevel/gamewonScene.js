class gamewonScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gamewonScene' });
    }

    preload() {
        this.load.image('gamewon','assets/gamewonScene.png');

    }

    create () {

        this.add.image(0, 0, 'gamewon').setOrigin(0, 0);
        
        this.add.text(0,580, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is gamewonScene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        var aDown = this.input.keyboard.addKey('A');

        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, reply game");
        this.scene.stop("gamewonScene");
        this.scene.start("mainScene");
        }, this );

        aDown.on('down', function(){
            console.log("A pressed (main menu)");
            this.scene.stop("gamewonScene");
            this.scene.start("mainScene");
            }, this );

    }

}
