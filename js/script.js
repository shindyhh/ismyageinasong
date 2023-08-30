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
      textMessage = 'You selected the age 20';
    } else {
      textMessage = 'No specific content for this age.';
    }

    // Set the text and activate the text message container
    $('#text-message').text(textMessage);
    $('#text-message-container').addClass('active');
  });
});
