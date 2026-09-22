// Glover Park — history timeline
// Clicking a year swaps which panel of neighborhood history is shown.
(function () {
  var stops = document.querySelectorAll(".timeline__stop");
  var panels = document.querySelectorAll(".timeline__panel");

  stops.forEach(function (stop) {
    stop.addEventListener("click", function () {
      var target = stop.getAttribute("data-panel");

      stops.forEach(function (s) {
        s.classList.toggle("is-active", s === stop);
      });

      panels.forEach(function (panel) {
        panel.classList.toggle(
          "is-active",
          panel.getAttribute("data-panel") === target
        );
      });
    });
  });
})();
