class GameOverLayer extends cc.LayerColor{
    constructor(score){
        super(cc.color(0,0,0,0),900,900);
        var size = this.getContentSize();

        var gameOverLabel = new cc.LabelTTF("Game Over!", 'Pixel', 75);
        gameOverLabel.setFontFillColor(cc.color(255, 255, 0, 30));
        gameOverLabel.x = size.width / 2;
        gameOverLabel.y = size.height / 2 + 200;
        this.addChild(gameOverLabel);

        var score_label = new cc.LabelTTF("Score: " + score, 'Pixel',75);
        score_label.setFontFillColor(cc.color(0, 255, 255, 30));
        score_label.x = size.width / 2;
        score_label.y = size.height / 2 ;
        this.addChild(score_label);

        this.addComponent(new GameLayerResizer());
    }
}