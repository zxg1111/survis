window.surVisVersion = '0.1.0';

$(document).ready(function () {
  page.init();
  page.update(true);

  selectors.toggleSelector('keywords', 'type:surrogate');
  selectors.toggleSelector('keywords', 'type:tsp');
  selectors.toggleSelector('keywords', 'type:energy');
  selectors.toggleSelector('keywords', 'type:nsga-ii');

  selectors.readQueryFromUrl();
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';