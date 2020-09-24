class TitleScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
        
        let titleLayer = new TitleLayer();
        this.addChild(titleLayer)

        this.allChildren = this.getChildren();

        this.startButton = new NineSliceLayout();
        this.startButton.createStartScreen();

        this.addChild(this.startButton);
    }
}