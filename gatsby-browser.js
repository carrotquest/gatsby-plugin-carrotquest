"use strict";

var isEnabled = function isEnabled() {
  return typeof carrotquest === "object" && window.carrotquestId;
};

exports.onInitialClientRender = function () {
  if (isEnabled) {
    carrotquest.connect(window.carrotquestId);
  }
};