
function expandModal() {
  $('.modal').fadeToggle(350);
  $('.projectBlock').addClass('translateModal');
  $('.projectBlock').addClass('expandModal');
}

function centerModal() {
  $('.projectBlock').addClass('translateModal');
}

function returnModal() {
  $('.projectBlock').removeClass('translateModal');
}

function shrinkModal() {
  $('.modal').fadeToggle(500);
  $('.projectBlock').removeClass('expandModal');
  $('.projectBlock').removeClass('translateModal');
}


$('.openButton').on('click', expandModal);
$('.closeButton').on('click', shrinkModal);

// waits for a transition to end to trigger second transition
// $(".projectBlock").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", modalCheck);
