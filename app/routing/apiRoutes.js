var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body
        console.log('Find Me!');
        console.log(newFriend);
            res.json(friends);
        for (var i=0; i<friends.length;i++) {
            var sumOfDif = 0
            for (var j=0; j<friends[i].scores.length; j++) {
                var dif = Math.abs(newFriend.scores[j] - friends[i].scores[j])
                sumOfDif += dif;
            }
            // push into new array and compare the difference between them.
            // find best match
        };
        
    });
}