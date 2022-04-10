
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
    <p>${timeago.format(tweetData.created_at)}</p>
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
  $('#tweets-container').empty()

  // loops through tweets from newer to older
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('#tweets-container').prepend($tweet);
  }
}

  // Ajax Get request
  const loadTweets = function() {
    $.ajax("/tweets/", { method: "Get" })
      .then(function(res) {
        renderTweets(res);
      })
  };

$(document).ready( () => {
  loadTweets();
  //event listener on submit button
  $("#tweet-form").submit( function(event) {

    //prevent to change the page
    event.preventDefault();

    //get data from the form and serialize
    $textarea = $(this).closest("form").find("#tweet-text"); 
    const $data = $textarea.serialize();
    $text = $textarea.val().trim(); //retrive tweet text for counter checks
    $counter = $(this).closest("form").find(".counter");
    $message = $(this).closest("form").find("#message");
    //if conditions create control of input text and correspoding error message
    if($text === "" || $text === null) {
      $message.slideUp();
      setTimeout(() => {
        $message.text("Your message is empty!").toggle(true);
      }, 1100);
      setTimeout(() => {
        $message.slideDown();
      }, 1500);
    } 
    else if ($text.length > 140) {
      $message.slideUp();
      setTimeout(() => {
        $message.text("Message should not be more than 140 character!").toggle(false);
      }, 1200);
      setTimeout(() => {
        $message.slideDown();
      }, 1500);
    } else {
      //Ajax post request
      $.ajax("/tweets/", { method: 'POST', data: $data })
      .then(function (res) {
        loadTweets();
      });
      $message.text("").toggle(false);
      $counter.text("140");
      $textarea.val("").focus();
    }
  });
});