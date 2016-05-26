
function loadData() {

  $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
  });

  $('.projectBlock').load("modalContent.html", function() {
    console.log("load html was performed");
    function reload_js(src) {
        // $('script[src="' + src + '"]').remove();
        $('<script>').attr('src', src).appendTo('body');
    }
    reload_js('p5sketch/sketch.js');
    
    // $.getScript("p5sketch/sketch.js", function(data, textStatus, jqxhr) {
    //   // console.log(data);
    //   // console.log(textStatus);
    //   console.log(jqxhr.status);
    //   console.log("load sketch was performed");
    // });
  });


}


$(".projectBlock").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", loadData);
