let friends = require("../data/friends.js")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });


    function minIndexArr(Arr) {
        return Arr.indexOf(Math.min.apply(Math, Arr));
    }

    app.post("/api/friends", function (req, res) {

        let userScores = req.body.scores;
	    console.log(userScores)
        let scores = [];

        for (let i = 0; i < friends.length; i++) {
            let lowestScoreDiff = 0;
            let highestScoreDiff = 40;
            for (let j = 0; j < userScores.length; j++) {
                lowestScoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j])));
            }
            scores.push(lowestScoreDiff)
        }
        console.log(scores)
        let minIndexArrValue = minIndexArr(scores)
        let userData = friends[minIndexArrValue]
        console.log(minIndexArrValue)
        friends.push(req.body);
        res.json(userData);

    });

}
