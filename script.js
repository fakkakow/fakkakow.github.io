const celebrate = () => {
  // Hide the game UI
  $('#game-container').fadeOut(300, function () {
    // Inject the emoji and show the result container
    $('#result').html('<div class="emoji" style="bottom: 1px;right: 0px;">😍</div>').fadeIn();
  });
};

$('#options-yes').on('click', celebrate);
$('#options-no').on('click', celebrate);
