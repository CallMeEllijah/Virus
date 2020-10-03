class GameScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
        
        let gameLayer = new GameLayerES6();
        this.addChild(gameLayer);

        let landscapeUI = new LandscapeLayout();
        let portraitUI = new PortraitLayout();
        let popup = new NineSliceLayout();
        popup.createPauseButton();

        this.allChildren = this.getChildren();

        this.addChild(landscapeUI);
        this.addChild(portraitUI);
        this.addChild(popup);
    }
}