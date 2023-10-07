$(function() {

  $("#age").bind("mousewheel", function(event, delta) {
      if (delta > 0) {
          this.value = parseInt(this.value) + 1;
      } else {
          if (parseInt(this.value) > 0) {
              this.value = parseInt(this.value) - 1;
          }
      }
      return false;
   });

});


$(document).ready(function() {
  $('#btn').click(function() {
    const ageValue = parseInt($('#age').val());
    let textMessage = '';

    if (ageValue === 20) {
      textMessage = "7 Years by Lukas Graham <br><br>Once, I was twenty years old, my story got told Before the morning Sun, when life was lonely<br>Once, I was twenty years old (Lukas Graham!)";
    } else if (ageValue === 21) {
      textMessage = 'You selected the age 21';
    } else {
      textMessage = 'No specific content for this age.';
    }

    // Set the text and activate the text message container
    $('#text-message').html(textMessage);
    $('#text-message-container').addClass('active');
  });
});
