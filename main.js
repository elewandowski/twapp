var Twitter = require('twitter-node-client').Twitter;
const {twitter_config} = require('./data/twitter_config')

//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var twitter = new Twitter(twitter_config);

//Example calls

const tweet = {
    status: 'hello worldz'
}

twitter.postTweet(tweet, error, success)


// twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);

// twitter.getMentionsTimeline({ count: '10'}, error, success)

// twitter.getHomeTimeline({ count: '10'}, error, success)

// twitter.getReTweetsOfMe({ count: '10'}, error, success)

// twitter.getTweet({ id: '1111111111'}, error, success)


// //
// // Get 10 tweets containing the hashtag haiku
// //

// twitter.getSearch({'q':'#haiku','count': 10}, error, success)

// //
// // Get 10 popular tweets with a positive attitude about a movie that is not scary 
// //

// twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success)