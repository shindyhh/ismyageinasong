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
    const ageValue = $('#age').val();

    // Log the value to the console
    console.log('Selected age:', ageValue);
  });
});
