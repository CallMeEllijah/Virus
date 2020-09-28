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

    createStartScreen(){//create start button in title layer
        let popup = new ccui.RelativeBox();
        popup.setAnchorPoint(cc.p(.5,.5));
        popup.setPositionType(ccui.Widget.POSITION_PERCENT);
        popup.setPositionPercent(cc.p(.5,.5));
        popup.setSizeType(ccui.Widget.SIZE_PERCENT);
        popup.setSizePercent(cc.p(.8,.8));

        this.addChild(popup);

        let startButton = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng);

        startButton.setScale9Enabled(true);
        startButton.setCapInsets(cc.rect(20,20,0,20));
        startButton.setContentSize(cc.size(100, 50));
        startButton.setTitleFontSize(26);
        startButton.setTitleFontName("Pixel");
        startButton.setTitleText("Start");

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

    createEndScreen(){//create exit and restart buttons in end layer
        let popup = new ccui.RelativeBox();
        popup.setAnchorPoint(cc.p(.5,.5));
        popup.setPositionType(ccui.Widget.POSITION_PERCENT);
        popup.setPositionPercent(cc.p(.5,.5));
        popup.setSizeType(ccui.Widget.SIZE_PERCENT);
        popup.setSizePercent(cc.p(.5,.8));

        this.addChild(popup);

        let restartButton = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng);

        restartButton.setScale9Enabled(true);
        restartButton.setCapInsets(cc.rect(20,20,0,20));
        restartButton.setContentSize(cc.size(150, 50));
        restartButton.setTitleFontSize(26);
        restartButton.setTitleFontName("Pixel");
        restartButton.setTitleText("Restart");

        let layoutParameterRestart = new ccui.RelativeLayoutParameter();
        layoutParameterRestart.setAlign(ccui.RelativeLayoutParameter.PARENT_RIGHT_BOTTOM);
        layoutParameterRestart.setMargin(0,0,0,0);
        restartButton.setLayoutParameter(layoutParameterRestart);

        restartButton.addClickEventListener(this.restartClick.bind(this));

        let exitButton = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng);

        exitButton.setScale9Enabled(true);
        exitButton.setCapInsets(cc.rect(20,20,0,20));
        exitButton.setContentSize(cc.size(150, 50));
        exitButton.setTitleFontSize(26);
        exitButton.setTitleFontName("Pixel");
        exitButton.setTitleText("Exit");

        let layoutParameterExit = new ccui.RelativeLayoutParameter();
        layoutParameterExit.setAlign(ccui.RelativeLayoutParameter.PARENT_LEFT_BOTTOM);
        layoutParameterExit.setMargin(0,0,0,0);
        exitButton.setLayoutParameter(layoutParameterExit);

        exitButton.addClickEventListener(this.exitClick.bind(this));
        
        popup.addChild(restartButton);
        popup.addChild(exitButton);
    }

    createPauseButton(){//create pause button in game layer
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
        button1.setContentSize(cc.size(50, 50));

        button1.setTitleFontSize(26);
        button1.setTitleFontName("Pixel");
        button1.setTitleText("||");

        let layoutParameter1 = new ccui.RelativeLayoutParameter();
        layoutParameter1.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_RIGHT);
        layoutParameter1.setMargin(0,0,0,20);
        button1.setLayoutParameter(layoutParameter1);

        button1.addClickEventListener(this.pauseClick.bind(this));
        popUp1.addChild(button1);
    }

    createPopup(){//create pause popup
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

    createButtons(){//create buttons in pause popup
        let popUp = this.popUp;
        let closeButton = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng);

        closeButton.setScale9Enabled(true);
        closeButton.setCapInsets(cc.rect(20,20,0,20));
        closeButton.setContentSize(cc.size(150, 100));

        closeButton.setTitleFontSize(26);
        closeButton.setTitleFontName("Pixel");
        closeButton.setTitleText("Close");

        let layoutParameterClose = new ccui.RelativeLayoutParameter();
        layoutParameterClose.setAlign(ccui.RelativeLayoutParameter.PARENT_BOTTOM_CENTER_HORIZONTAL);
        layoutParameterClose.setMargin(20,20,0,20);
        closeButton.setLayoutParameter(layoutParameterClose);

        closeButton.addClickEventListener(this.closeClick.bind(this));

        let restartButton = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng)

        restartButton.setScale9Enabled(true);
        restartButton.setCapInsets(cc.rect(20,20,0,20));
        restartButton.setContentSize(cc.size(150, 100));

        restartButton.setTitleFontSize(26);
        restartButton.setTitleFontName("Pixel");
        restartButton.setTitleText("Restart");

        let layoutParameterRestart = new ccui.RelativeLayoutParameter();
        layoutParameterRestart.setAlign(ccui.RelativeLayoutParameter.PARENT_LEFT_BOTTOM);
        layoutParameterRestart.setMargin(20,20,0,20);
        restartButton.setLayoutParameter(layoutParameterRestart);

        restartButton.addClickEventListener(this.restartClick.bind(this));

        let exitButton = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng)

        exitButton.setScale9Enabled(true);
        exitButton.setCapInsets(cc.rect(20,20,0,20));
        exitButton.setContentSize(cc.size(150, 100));

        exitButton.setTitleFontSize(26);
        exitButton.setTitleFontName("Pixel");
        exitButton.setTitleText("Exit");

        let layoutParameterExit = new ccui.RelativeLayoutParameter();
        layoutParameterExit.setAlign(ccui.RelativeLayoutParameter.PARENT_RIGHT_BOTTOM);
        layoutParameterExit.setMargin(20,20,0,20);
        exitButton.setLayoutParameter(layoutParameterExit);

        exitButton.addClickEventListener(this.exitClick.bind(this));

        popUp.addChild(restartButton);
        popUp.addChild(closeButton);
        popUp.addChild(exitButton);
    }

    closeClick(){//close pause popup
        let scaleTo = new cc.ScaleTo(.2, 0);
        let callFunc = new cc.CallFunc(this.onFinish, this);
        scaleTo = new cc.EaseBackIn(scaleTo)
        this.popUp.runAction(new cc.sequence(scaleTo, callFunc));
    }

    restartClick(){//restart game
        cc.director.runScene(new GameScene());
    }

    exitClick(){//return to main menu
        cc.director.runScene(new TitleScene());
    }

    pauseClick(){//pauses game using unscheduleUpdate
        if(!this.isPaused){
            this.pauseScreen();
            this.getParent().allChildren[0].pauseGame();
        }
    }

    pauseScreen(){//calls popup and button creations
            this.createPopup();
            this.createButtons();
            this.isPaused = true;
    }

    onFinish(){//resume game and close popup
        this.getParent().allChildren[0].contGame();
        this.getParent().removeChild(this.popUp);
        this.isPaused = false;
    }

    startButtonClick(){//for start button in title layer
        this.getParent().allChildren[0].toGameScene();
    }
}