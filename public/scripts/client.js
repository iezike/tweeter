/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const createTweetElement = function(tweetData) {
  $dataCreated = new Date(tweetData.created_at);
  $dateToday = new Date();
  //create the structure of tweet to be included in the html
  const $tweet = (`<article class="tweet">Hello world</article>`);


  //return the structure to append to html
  return $tweet;
}


const $tweet = createTweetElement(tweetData);
// to add it to the page so we can make sure it's got all the right elements, classes, etc.
$('#tweets-container').append($tweet); 


const renderTweets = (tweets) => {

  //clear the container before to read all tweets
  $("#tweets-container").empty();

  // loops through tweets from newer to older
  for (let i in tweets) {

    // calls createTweetElement for each tweet
    $tweet = createTweetElement(tweets[i]);

    // takes return value and appends it to the tweets container
    $('#tweets-container').prepend($tweet);
  }

}