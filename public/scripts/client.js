/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const createTweetElement = function(tweetData) {
  //create the structure of tweet to be included in the html (using previous html article)
const $tweet = (`
<article class="tweet-component">
  <div class="image-username-refkey">
    <div class="image-username">
      <img src="${tweetData.user.avatars}" alt=""> 
      <span>${tweetData.user.name}</span>
    </div>
    <div>
      ${tweetData.user.handle}
    </div>
  </div>
  <div class="tweet-content">
    <p>${tweetData.content.text}</p>
  </div>
  <div class="time-reactions">
    <p>${new Date(tweetData.created_at)}</p>
    <div class="icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </div>
</article>`
);
  //return the structure to append to html
  return $tweet;
}



const renderTweets = (tweets) => {

  //clear the container before to read all tweets
  $("#tweets-container").empty();

  // loops through tweets from newer to older
  for (let tweet of tweets) {

    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet);

    // takes return value and appends it to the tweets container
    $('#tweets-container').prepend($tweet);
  }

}

$(document).ready( () => {
  renderTweets(data);
});