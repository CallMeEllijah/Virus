class TitleLayer extends cc.Layer{
    constructor(){
        super(cc.color(0,0,0,0),400,400);

        let size = this.getContentSize();
        let titleLabel = new cc.LabelTTF("Invaderz", 'Pixel', 72);
        titleLabel.setFontFillColor(cc.color(255, 0, 0, 30));
        titleLabel.x = size.width / 2 ;
        titleLabel.y = size.height / 2 + 200;
        this.addChild(titleLabel);
        
        let instructionlabel = new cc.LabelTTF("Match 3 to eliminate invaderz", 'Pixel', 20);
        instructionlabel.setFontFillColor(cc.color(255, 255, 0, 30));
        instructionlabel.x = size.width / 2 ;
        instructionlabel.y = size.height / 2 + 50;
        this.addChild(instructionlabel);
        let instructionlabel2 = new cc.LabelTTF("No possible moves?", 'Pixel', 20);
        instructionlabel2.setFontFillColor(cc.color(0, 255, 0, 30));
        instructionlabel2.x = size.width / 2 ;
        instructionlabel2.y = size.height / 2;
        this.addChild(instructionlabel2);
        let instructionlabel3 = new cc.LabelTTF("don't worry, line them up for a combo", 'Pixel', 20);
        instructionlabel3.setFontFillColor(cc.color(255, 0, 255, 30));
        instructionlabel3.x = size.width / 2 ;
        instructionlabel3.y = size.height / 2 - 50;
        this.addChild(instructionlabel3);
        let instructionlabel4 = new cc.LabelTTF("itz all about speed!", 'Pixel', 20);
        instructionlabel4.setFontFillColor(cc.color(0, 255, 255, 30));
        instructionlabel4.x = size.width / 2 ;
        instructionlabel4.y = size.height / 2 - 100;
        this.addChild(instructionlabel4);

        // let startLabel = new cc.LabelTTF("press any key to start", 'Pixel', 30);
        // startLabel.x = size.width / 2;
        // startLabel.y = size.height / 2 - 200;
        // this.addChild(startLabel);

        // let toMainScene = new ToMainScene();
        // this.addComponent(toMainScene);
        this.addComponent(new GameLayerResizer());
    }

    toGameScene(){
        cc.director.runScene(new GameScene());
    }
}