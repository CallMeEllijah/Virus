class NineSliceLayout extends ccui.Layout{
    constructor(){
        super();
        this.setContentSize(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());

        //this.createPopup();
        //this.createButton();
        //this.createPauseButton();
        
        this.isPaused = false;
    }

    createStartScreen(){
        let popup = new ccui.RelativeBox();
        popup.setAnchorPoint(cc.p(.5,.5));
        popup.setPositionType(ccui.Widget.POSITION_PERCENT);
        popup.setPositionPercent(cc.p(.5,.5));
        popup.setSizeType(ccui.Widget.SIZE_PERCENT);
        popup.setSizePercent(cc.p(.5,.5));

        this.addChild(popup);

        let logoPng = new ccui.ImageView(res.titleLogoPng, ccui.Widget.LOCAL_TEXTURE)
        logoPng.setScale9Enabled(true);
        logoPng.setCapInsets(cc.rect(20,20,20,20))
        logoPng.setContentSize(cc.size(500,500))
        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.CENTER_IN_PARENT);
        layoutParameter.setMargin(0,0,0,0);
        logoPng.setLayoutParameter(layoutParameter)
        popup.addChild(logoPng)

        let startButton = new ccui.Button(res.buttonStartPng, res.buttonStartSelectedPng);

        startButton.setScale9Enabled(true);
        startButton.setCapInsets(cc.rect(20,20,0,20));
        startButton.setContentSize(cc.size(100, 50));

        // startButton.setTitleFontSize(36);
        // startButton.setTitleFontName("Pixel");
        // startButton.setTitleText("Start");

        let layoutParameter1 = new ccui.RelativeLayoutParameter();
        layoutParameter1.setAlign(ccui.RelativeLayoutParameter.PARENT_BOTTOM_CENTER_HORIZONTAL);
        layoutParameter1.setMargin(0,0,0,0);
        startButton.setLayoutParameter(layoutParameter1);

        startButton.addClickEventListener(this.startButtonClick.bind(this));
        popup.addChild(startButton);
    }

    createPauseButton(){
        let popUp1 = new ccui.RelativeBox();
        this.popUp1 = popUp1;
        popUp1.setAnchorPoint(cc.p(0,0));
        popUp1.setPositionType(ccui.Widget.POSITION_PERCENT);
        popUp1.setPositionPercent(cc.p(.5,.5));
        popUp1.setSizeType(ccui.Widget.SIZE_PERCENT);
        popUp1.setSizePercent(cc.p(.5,.5));

        // popUp1.setBackGroundImageScale9Enabled(true);
        // popUp1.setBackGroundImage(res.button9slicePng, ccui.Widget.LOCAL_TEXTURE);
        // popUp1.setBackGroundImageCapInsets(cc.rect(20,20,20,20))

        this.addChild(popUp1);

        let button1 = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng);

        button1.setScale9Enabled(true);
        button1.setCapInsets(cc.rect(20,20,0,20));
        button1.setContentSize(cc.size(100, 100));

        button1.setTitleFontSize(26);
        button1.setTitleFontName("Pixel");
        button1.setTitleText("||");

        let layoutParameter1 = new ccui.RelativeLayoutParameter();
        layoutParameter1.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_RIGHT);
        layoutParameter1.setMargin(0,0,0,20);
        button1.setLayoutParameter(layoutParameter1);

        button1.addClickEventListener(this.onClick1.bind(this));
        popUp1.addChild(button1);
    }

    createPopup(){
        let popUp = new ccui.RelativeBox();
        this.popUp = popUp;
        popUp.setAnchorPoint(cc.p(.5,.5));
        popUp.setPositionType(ccui.Widget.POSITION_PERCENT);
        popUp.setPositionPercent(cc.p(.5,.5));
        popUp.setSizeType(ccui.Widget.SIZE_PERCENT);
        popUp.setSizePercent(cc.p(.8,.8));

        popUp.setBackGroundImageScale9Enabled(true);
        popUp.setBackGroundImage(res.popupBase, ccui.Widget.LOCAL_TEXTURE);
        popUp.setBackGroundImageCapInsets(cc.rect(0,0,0,0))

        let text = new ccui.Text("Paused", "Pixel", 72);

        let layoutParameterText = new ccui.RelativeLayoutParameter();
        layoutParameterText.setAlign(ccui.RelativeLayoutParameter.CENTER_IN_PARENT);
        text.setLayoutParameter(layoutParameterText);

        this.addChild(popUp);
        popUp.addChild(text);
    }

    createButton(){
        let popUp = this.popUp;
        let button = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng);

        button.setScale9Enabled(true);
        button.setCapInsets(cc.rect(20,20,0,20));
        button.setContentSize(cc.size(150, 100));

        button.setTitleFontSize(26);
        button.setTitleFontName("Snow Dream");
        button.setTitleText("Close");

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_BOTTOM_CENTER_HORIZONTAL);
        layoutParameter.setMargin(20,20,0,20);
        button.setLayoutParameter(layoutParameter);

        button.addClickEventListener(this.onClick.bind(this));
        popUp.addChild(button);
    }

    onClick(){
        let scaleTo = new cc.ScaleTo(.2, 0);
        let callFunc = new cc.CallFunc(this.onFinish, this);
        scaleTo = new cc.EaseBackIn(scaleTo)
        this.popUp.runAction(new cc.sequence(scaleTo, callFunc));
    }

    onClick1(){
        // let scaleTo = new cc.ScaleTo(.2, 0);
        // let callFunc = new cc.CallFunc(this.onFinish, this);
        // scaleTo = new cc.EaseBackIn(scaleTo)
        // this.popUp.runAction(new cc.sequence(scaleTo, callFunc));
        // let callFunc = new cc.CallFunc(this.pauseScreen, this);
        // let scaleTo = new cc.ScaleTo(.2, 0);
        // scaleTo = new cc.EaseBackIn(scaleTo);
        // this.popUp1.runAction(new cc.sequence(scaleTo, callFunc));

        //this.pauseScreen();
        //let callFunc = new cc.CallFunc(this.getParent().pauseGame())
        if(!this.isPaused){
            this.pauseScreen();
            this.getParent().allChildren[0].pauseGame();
        }
    }

    pauseScreen(){
            this.createPopup();
            this.createButton();
            this.isPaused = true;
    }

    onFinish(){
        this.getParent().allChildren[0].contGame();
        this.getParent().removeChild(this.popUp);
        this.isPaused = false;
    }

    startButtonClick(){
        this.getParent().allChildren[0].toGameScene();
    }
}