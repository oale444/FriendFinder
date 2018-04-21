var bodyParser = require('body-parser');
var path = require('path');
// LOAD DATA
// ===============================================================================
var friendsTable = require('../data/friends.js');

// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get('/api/friends', function (request, result) {
        result.json(friendsTable);
    });

    app.post("/api/friends", function (request, result) {
        var you = request.body;
        var newFriend = -1;
        var newFriendScore = 100;
        var currentFriendScore = 0;
        // Loop thru all friends in the friends table to identify the friend have the lowest score difference and then return friend so modal opens showing the friend.
        for (i = 0; i < friendsTable.length; i++) {

            if (you.gender != friendsTable[i].gender) {
                 {

                    currentFriendScore += Math.abs(friendsTable[i].scores[i] - you.scores[i]);
                }
                if (currentFriendScore <= newFriendScore) {
                    newFriend = i;
                    newFriendScore = currentFriendScore;
                }
                currentFriendScore = 0;
            }
        }
        friendsTable.push(you);
        newFriendDetails = friendsTable[newFriend];
        result.json(newFriendDetails);

    });
};