class TitleScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
        
        let titleLayer = new TitleLayer();
        this.addChild(titleLayer)

        this.allChildren = this.getChildren();

        let startButton = new NineSliceLayout();
        startButton.createStartScreen();

        this.addChild(startButton);
    }
}