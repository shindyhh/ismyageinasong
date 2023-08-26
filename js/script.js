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
  // Add click event handler to the OK button
  $('#btn').click(function() {
    // Get the value from the age input
    const ageValue = parseInt($('#age').val());

    // Set the content based on the selected age
    let popupContent = '';
    if (ageValue === 20) {
      popupContent = 'You selected the age 20';
    } else {
      popupContent = 'No specific content for this age.';
    }
    // Display the modal pop-up with the content
    $('#popup-content').text(popupContent);
    $('#popup').css('display', 'block');

    // Close the modal when the close button is clicked
    $('.close').click(function() {
      $('#popup').css('display', 'none');
    });
  });
});
