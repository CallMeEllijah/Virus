class HelloWorldScene2 extends cc.Scene{
    constructor(score){
        super();
        this.score = score;
    }
    onEnter() {
        super.onEnter();
        let gameOverLayer = new GameOverLayer(this.score);
        this.addChild(gameOverLayer);

        this.allChildren = this.getChildren();

        let restartButton = new NineSliceLayout();
        restartButton.createEndScreen();

        this.addChild(restartButton);
    }   
}