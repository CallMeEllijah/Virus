class EndScene extends cc.Scene{
    constructor(score){
        super();
        this.score = score;
    }
    onEnter() {
        super.onEnter();

        let gameOverLayer = new GameOverLayer(this.score);
        this.addChild(gameOverLayer);

        this.allChildren = this.getChildren();

        let sliceLayout = new NineSliceLayout();
        sliceLayout.createEndScreen(this.score);
        sliceLayout.createUserNameBox(this.score);

        this.addChild(sliceLayout);
        cc.log(this);

    }

    addToLeaderboard(name, score){
        var request = new XMLHttpRequest();
        cc.log(name);
        cc.log(score);
        request.open('POST', 'http://localhost:8080/api/leaderboard');
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(JSON.stringify({
            "name": name,
            "score": score
        }));
    }

}