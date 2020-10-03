class PortraitLayout extends ccui.RelativeBox{
    constructor(){
        super(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.addComponent(new EnableOnPortrait());
    }

    onEnter(){
        super.onEnter();
        this.num = this.getParent().allChildren[0].getScore();
        this.score = new ccui.Text("Score: " + this.num, "Pixel", 36);

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_CENTER_HORIZONTAL);
        this.score.setLayoutParameter(layoutParameter);

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
        this.num = this.getParent().allChildren[0].getScore();
        this.score.setString("Score: " + this.num);

        this.numTime = this.getParent().allChildren[0].getTime();
        this.time.setString("Time: " + this.numTime.toFixed(2));
    }
}