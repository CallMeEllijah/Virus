class UserApi{
    static async postScore(name, score){
        BackendRequests.namePost = name;
        BackendRequests.scorePost = score;

        BackendRequests.Post();
    }

    static getScores(){
        
    }
}