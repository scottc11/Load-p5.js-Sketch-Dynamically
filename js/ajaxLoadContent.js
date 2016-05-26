
function loadData() {

  $('.projectBlock').load("modalContent.html", function() {
    console.log("load html was performed");
    $.getScript("p5sketch/sketch.js", function(data, textStatus, jqxhr) {
      console.log(data);
      console.log(textStatus);
      console.log(jqxhr.status);
      console.log("load sketch was performed");
    });
  });


}

$(".projectBlock").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", loadData);
