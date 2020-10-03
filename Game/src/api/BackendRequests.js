let axios = require('axios');

this.namePost;
this.scorePost = 0;

axios.get("http://localhost:8080/api/leaderboard").then(function(response){
    console.log(response.data);
})
.catch(function(error){
    console.log(error);
})

axios.post("http://localhost:8080/api/leaderboard", {
    name: namePost,
    score: scorePost
})
.then(function(response){
    console.log(response.data);
})
.catch(function(error){
    console.log(error);
});