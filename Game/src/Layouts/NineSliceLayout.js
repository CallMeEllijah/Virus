var scores

class NineSliceLayout extends ccui.Layout{
    constructor(){
        super();
        // axios = require('axios');
        this.setContentSize(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        
        this.isPaused = false;
    }

    onEnter(){
        super.onEnter();
    }

    createStartScreen(){//create start button in title layer

        var request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:8080/api/leaderboard', true);

        request.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 400) {
                    var data = JSON.parse(this.responseText);
                    cc.log(data);

                    scores = new Array(data.length);

                    for (var i = 0; i < data.length; i++) { 
                        scores[i] = new Array(2); 
                    } 

                    for(var i = 0; i < data.length; i++){
                        scores[i][0] = data[i].name;
                        scores[i][1] = data[i].score;
                    }

                    scores.sort(function(a, b){
                        if (a[1] === b[1]) {
                            return 0;
                        }
                        else {
                            return (a[1] > b[1]) ? -1 : 1;
                        }
                    });
                    cc.log(scores[0]);
                    //showLeaderboard();
                } else {
                    cc.log("error");
                }
            }
        };
        request.send();
        request = null;

        let popup = new ccui.RelativeBox();
        popup.setAnchorPoint(cc.p(.5,.5));
        popup.setPositionType(ccui.Widget.POSITION_PERCENT);
        popup.setPositionPercent(cc.p(.5,.5));
        popup.setSizeType(ccui.Widget.SIZE_PERCENT);
        popup.setSizePercent(cc.p(.5,.8));

        this.addChild(popup);

        let startButton = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng);

        startButton.setScale9Enabled(true);
        startButton.setCapInsets(cc.rect(20,20,0,20));
        startButton.setContentSize(cc.size(100, 50));
        startButton.setTitleFontSize(26);
        startButton.setTitleFontName("Pixel");
        startButton.setTitleText("Start");

        let layoutParameter1 = new ccui.RelativeLayoutParameter();
        layoutParameter1.setAlign(ccui.RelativeLayoutParameter.PARENT_LEFT_BOTTOM);
        layoutParameter1.setMargin(0,0,0,0);
        startButton.setLayoutParameter(layoutParameter1);

        let leaderboardButton = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng);

        leaderboardButton.setScale9Enabled(true);
        leaderboardButton.setCapInsets(cc.rect(20,20,0,20));
        leaderboardButton.setContentSize(cc.size(200, 50));
        leaderboardButton.setTitleFontSize(26);
        leaderboardButton.setTitleFontName("Pixel");
        leaderboardButton.setTitleText("Leaderboard");

        let layoutParameterLeaderboard = new ccui.RelativeLayoutParameter();
        layoutParameterLeaderboard.setAlign(ccui.RelativeLayoutParameter.PARENT_RIGHT_BOTTOM);
        layoutParameterLeaderboard.setMargin(0,0,0,0);
        leaderboardButton.setLayoutParameter(layoutParameterLeaderboard);

        startButton.addClickEventListener(this.startButtonClick.bind(this));
        leaderboardButton.addClickEventListener(this.viewLeaderboardClick.bind(this));

        popup.addChild(startButton);
        popup.addChild(leaderboardButton);
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

    createUserNameBox(score){
        let popupUser = new ccui.RelativeBox();
        this.popupUser = popupUser;

        this.finalScore = score;
        cc.log(score);

        this.popupUser.setAnchorPoint(cc.p(.5,.5));
        this.popupUser.setPositionType(ccui.Widget.POSITION_PERCENT);
        this.popupUser.setPositionPercent(cc.p(.5,.5));
        this.popupUser.setSizeType(ccui.Widget.SIZE_PERCENT);
        this.popupUser.setSizePercent(cc.p(1,.8));

        this.popupUser.setBackGroundImageScale9Enabled(true);
        this.popupUser.setBackGroundImage(res.popupBase, ccui.Widget.LOCAL_TEXTURE);
        this.popupUser.setBackGroundImageCapInsets(cc.rect(0,0,0,0))

        let userHeader = new ccui.Text("Input name for leaderboard:", "Pixel", 30)
        let layoutParameterUserHeader = new ccui.RelativeLayoutParameter();
        layoutParameterUserHeader.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_CENTER_HORIZONTAL);
        layoutParameterUserHeader.setMargin(20,100,0,20);
        userHeader.setLayoutParameter(layoutParameterUserHeader);

        this.textField = new ccui.TextField();
        this.textField.setTouchEnabled(true);
        this.textField.setMaxLengthEnabled(true);
        this.textField.setMaxLength(3)
        this.textField.setFontName("Pixel")
        this.textField.setPlaceHolder("Name (3 characters)")
        this.textField.fontSize = 45;
        this.textField.setPlaceHolderColor(cc.color(255,255,255,255));
        this.textField.setTextColor(cc.color(255,255,255,255));

        let layoutParameterTextField = new ccui.RelativeLayoutParameter();
        layoutParameterTextField.setAlign(ccui.RelativeLayoutParameter.CENTER_IN_PARENT);
        layoutParameterTextField.setMargin(20,20,0,20);
        this.textField.setLayoutParameter(layoutParameterTextField);

        let confirmButton = new ccui.Button(res.button9slicePng, res.button9sliceSelectedPng);

        confirmButton.setScale9Enabled(true);
        confirmButton.setCapInsets(cc.rect(20,20,0,20));
        confirmButton.setContentSize(cc.size(150, 50));

        confirmButton.setTitleFontSize(26);
        confirmButton.setTitleFontName("Pixel");
        confirmButton.setTitleText("Confirm");

        let layoutParameterClose = new ccui.RelativeLayoutParameter();
        layoutParameterClose.setAlign(ccui.RelativeLayoutParameter.PARENT_BOTTOM_CENTER_HORIZONTAL);
        layoutParameterClose.setMargin(20,20,0,20);
        confirmButton.setLayoutParameter(layoutParameterClose);

        this.user = this.textField.string;
        confirmButton.addClickEventListener(this.confirmButtonClick.bind(this));


        this.popupUser.addChild(this.textField)
        this.popupUser.addChild(confirmButton)
        this.popupUser.addChild(userHeader);
        this.addChild(this.popupUser);
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

    closeLeaderboard(){//close leaderboard popup
        let scaleTo = new cc.ScaleTo(.2, 0);
        let callFunc = new cc.CallFunc(this.finish, this);
        scaleTo = new cc.EaseBackIn(scaleTo)
        this.popupLeaderboard.runAction(new cc.sequence(scaleTo, callFunc));
    }

    closeUserPopup(){
        let scaleTo = new cc.ScaleTo(.2, 0);
        let callFunc = new cc.CallFunc(this.finish, this);
        scaleTo = new cc.EaseBackIn(scaleTo)
        this.popupUser.runAction(new cc.sequence(scaleTo, callFunc));
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

    finish(){
        this.getParent().removeChild(this.popupLeaderboard);
    }

    startButtonClick(){//for start button in title layer
        this.getParent().allChildren[0].toGameScene();
    }

    viewLeaderboardClick(){
        //add here the showing of leaderboard through popup :(
        this.popupLeaderboard = new ccui.RelativeBox();
        this.popupLeaderboard.setAnchorPoint(cc.p(.5,.5));
        this.popupLeaderboard.setPositionType(ccui.Widget.POSITION_PERCENT);
        this.popupLeaderboard.setPositionPercent(cc.p(.5,.5));
        this.popupLeaderboard.setSizeType(ccui.Widget.SIZE_PERCENT);
        this.popupLeaderboard.setSizePercent(cc.p(.8,.8));
    
        this.popupLeaderboard.setBackGroundImageScale9Enabled(true);
        this.popupLeaderboard.setBackGroundImage(res.popupBase, ccui.Widget.LOCAL_TEXTURE);
        this.popupLeaderboard.setBackGroundImageCapInsets(cc.rect(0,0,0,0))
    
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
    
        closeButton.addClickEventListener(this.closeLeaderboard.bind(this));
    
        let leaderboardName = new ccui.Text("1. "+scores[0][0]+"\n"+"2. "+scores[1][0]+"\n"+"3. "+scores[2][0]+"\n"+"4. "+scores[3][0] + "\n"+"5. "+scores[4][0], "Pixel", 45);
    
        let layoutParameterText = new ccui.RelativeLayoutParameter();
        layoutParameterText.setAlign(ccui.RelativeLayoutParameter.PARENT_LEFT_CENTER_VERTICAL)
        layoutParameterText.setMargin(30,20,0,0)
        leaderboardName.setLayoutParameter(layoutParameterText)

        let leaderboardScore = new ccui.Text(scores[0][1]+"\n"+scores[1][1]+"\n"+scores[2][1]+"\n"+scores[3][1]+"\n"+scores[4][1], "Pixel", 45);

        let layoutParameterScore = new ccui.RelativeLayoutParameter();
        layoutParameterScore.setAlign(ccui.RelativeLayoutParameter.PARENT_RIGHT_CENTER_VERTICAL);
        layoutParameterScore.setMargin(0,0,60,0);
        leaderboardScore.setLayoutParameter(layoutParameterScore);

        let leaderboardNameHeader = new ccui.Text("Name", "Pixel", 45)
        let layoutParameterNameHeader = new ccui.RelativeLayoutParameter();
        layoutParameterNameHeader.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_LEFT);
        layoutParameterNameHeader.setMargin(60,90,0,0);
        leaderboardNameHeader.setLayoutParameter(layoutParameterNameHeader);

        let leaderboardScoreHeader = new ccui.Text("Score", "Pixel", 45)
        let layoutParameterScoreHeader = new ccui.RelativeLayoutParameter();
        layoutParameterScoreHeader.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_RIGHT);
        layoutParameterScoreHeader.setMargin(0,90,60,0);
        leaderboardScoreHeader.setLayoutParameter(layoutParameterScoreHeader);

        let leaderboardTitleHeader = new ccui.Text("LEADERBOARD", "Pixel", 45)
        let layoutParameterTitleHeader = new ccui.RelativeLayoutParameter();
        layoutParameterTitleHeader.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_CENTER_HORIZONTAL);
        layoutParameterTitleHeader.setMargin(0,30,0,0);
        leaderboardTitleHeader.setLayoutParameter(layoutParameterTitleHeader);
    
        this.popupLeaderboard.addChild(closeButton);
        this.popupLeaderboard.addChild(leaderboardName);
        this.popupLeaderboard.addChild(leaderboardScore);
        this.popupLeaderboard.addChild(leaderboardNameHeader);
        this.popupLeaderboard.addChild(leaderboardScoreHeader);
        this.popupLeaderboard.addChild(leaderboardTitleHeader);
        this.addChild(this.popupLeaderboard)
    }

    confirmButtonClick(){
        this.getParent().addToLeaderboard(this.textField.string, this.finalScore);
        this.closeUserPopup();
    }
}