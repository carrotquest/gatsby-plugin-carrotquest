/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
// You can delete this file if you're not using it

import React from "react";

exports.onRenderBody = ({ setHeadComponents }, { carrotquestId, mobileDelay = 0, desktopDelay = 0 }) => {
  if (!carrotquestId) {
    console.log("You have not provided carrotquestId, gatsby-plugin-carrotquestquest will not take effect.");
    return null;
  }

  const delay = `if (document.documentElement.clientWidth < 700) { setTimeout(init, ${mobileDelay}); } else { setTimeout(init, ${desktopDelay}); }`;

  const scriptInnerHTML =
    `window.carrotquestId = "${carrotquestId}";` +
    `if (typeof carrotquest === "undefined") {  function Build(name, args) {    return function () {      window.carrotquestasync.push(name, arguments);    };  }  window.carrotquest = {};  window.carrotquestasync = [];  carrotquest.settings = {};  var m = [    "connect",    "track",    "identify",    "auth",    "open",    "onReady",    "addCallback",    "removeCallback",    "trackMessageInteraction",  ];  for (var i = 0; i < m.length; i++) carrotquest[m[i]] = Build(m[i]);}` +
    `function init() {  var s = document.createElement("script");  s.type = "text/javascript";  s.async = true;  s.src = "//cdn.carrotquest.io/api.min.js";  var x = document.getElementsByTagName("head")[0];  x.appendChild(s);}` +
    delay;

  return setHeadComponents([<script key="gatsby-plugin-carrotquestquest" dangerouslySetInnerHTML={{ __html: scriptInnerHTML }} />]);
};
