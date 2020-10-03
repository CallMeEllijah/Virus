const BASE_URL = "http://localhost:8080/api/leaderboard/"
class UserApi {


    static async CreateUser(new_user, score){
        return BackendRequest.Post(`${BASE_URL}`, { user: new_user, score: score })
        // .then((resp) => {
        //     // console.log(resp);
        //     return resp.body.user;
        // }) 
    }

    static async PatchUser(id, changes){
        return BackendRequest.Patch(`${BASE_URL}${id}`, { user: changes }) 
    }

    static async UpdateUser(id, updates){
        return BackendRequest.Put(`${BASE_URL}${id}`, { user: updates })
        .then((resp) => {
           // console.log(resp);
            return resp.body.user;
        })
    }

    static async GetUser(id){
        return BackendRequest.Get(`${BASE_URL}`)
        .then((resp) => {
            //console.log(resp);
            return resp.body.user;
        })
    }

    static async DeleteUser(id){
        return BackendRequest.Delete(`${BASE_URL}${id}`)
    }

}