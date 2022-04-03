// Function to control the condition of counter in the tweet composure.textarea.
$(document).ready(function() {
  $(".new-tweet").on( "input", "textarea" , function(event) {
    //get the value of 'this', that mean, the text that user enter in a textarea
    $text = $(this).val();
    //get the length of the text and subtract value from 140.
    $charsLeft = 140 - $text.length;
    // Alert with a red color if text character exceeds 140.
    if($charsLeft < 0) {
      $(".counter").addClass("error");
    } else {
      $(".counter").removeClass("error");
    }
    $(".counter").text($charsLeft);
  });
});

