const isEnabled = () => typeof carrotquest === `object` && window.carrotquestId;

exports.onInitialClientRender = () => {
  if (isEnabled) {
    carrotquest.connect(window.carrotquestId);
  }
};
