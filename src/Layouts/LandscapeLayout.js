class LandscapeLayout extends ccui.RelativeBox{
    constructor(){
        super(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.addComponent(new EnableOnLandscape());
    }

    onEnter(){
        super.onEnter();
        this.numScore = this.getParent().allChildren[0].getScore();
        this.score = new ccui.Text("Score: " + this.numScore, "Pixel", 36);

        let layoutParameterScore = new ccui.RelativeLayoutParameter();
        layoutParameterScore.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_LEFT);
        this.score.setLayoutParameter(layoutParameterScore);

        this.numTime = this.getParent().allChildren[0].getTime();
        this.time = new ccui.Text("Time: " + this.numTime.toFixed(2), "Pixel", 50);

        let layouParameterTime = new ccui.RelativeLayoutParameter();
        layouParameterTime.setAlign(ccui.RelativeLayoutParameter.PARENT_BOTTOM_CENTER_HORIZONTAL);
        this.time.setLayoutParameter(layouParameterTime);

        this.addChild(this.score);
        this.addChild(this.time);
    }

    update(){
        super.update();
        this.numScore = this.getParent().allChildren[0].getScore();
        this.score.setString("Score: " + this.numScore);

        this.numTime = this.getParent().allChildren[0].getTime();
        this.time.setString("Time: " + this.numTime.toFixed(2));
    }
}