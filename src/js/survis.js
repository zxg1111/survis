window.surVisVersion = '0.1.0';

$(document).ready(function () {
  page.init();
  page.update(true);

  selectors.toggleSelector('keywords', 'type:surrogate');
  selectors.toggleSelector('keywords', 'type:view-planning');
  selectors.toggleSelector('keywords', 'type:route');
  selectors.toggleSelector('keywords', 'type:energy');

  selectors.readQueryFromUrl();
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';