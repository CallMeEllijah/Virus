class EndScene extends cc.Scene{
    constructor(score){
        super();
        this.score = score;
    }
    onEnter() {
        super.onEnter();
        let gameOverLayer = new GameOverLayer(this.score);
        this.addChild(gameOverLayer);

        this.allChildren = this.getChildren();

        let sliceLayout = new NineSliceLayout();
        sliceLayout.createEndScreen(this.score);
        sliceLayout.createUserNameBox();

        this.addChild(sliceLayout);
    }

}