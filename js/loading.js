(function () {
  "use strict";

  var overlay = document.getElementById("loading-overlay");
  if (!overlay) return;

  var mark = document.getElementById("loading-mark");
  var mode = overlay.getAttribute("data-mode") || "reveal"; // "reveal" | "redirect"
  var target = overlay.getAttribute("data-target") || "index.html";

  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var FADE_IN_MS = prefersReduced ? 1 : 1600; // logo: 0% -> 100% opacity
  var HOLD_MS = prefersReduced ? 0 : 380; // brief pause at 100%
  var FADE_OUT_MS = prefersReduced ? 1 : 650; // overlay dissolve

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  var start = null;

  function step(timestamp) {
    if (start === null) start = timestamp;
    var elapsed = timestamp - start;
    var t = Math.min(elapsed / FADE_IN_MS, 1);
    var eased = easeOutCubic(t);
    var percent = eased * 100;

    // Literal 0% -> 100% transparency drive on the logo mark
    mark.style.opacity = String(percent / 100);
    overlay.style.setProperty("--progress", percent.toFixed(1));

    if (t < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.setTimeout(finish, HOLD_MS);
    }
  }

  function finish() {
    overlay.style.transition = "opacity " + FADE_OUT_MS + "ms ease";
    overlay.style.opacity = "0";

    window.setTimeout(function () {
      if (mode === "redirect") {
        window.location.href = target;
      } else {
        overlay.style.display = "none";
        document.body.classList.add("content-revealed");
      }
    }, FADE_OUT_MS);
  }

  if (mark) {
    mark.style.opacity = "0";
    window.requestAnimationFrame(step);
  } else if (mode === "redirect") {
    window.setTimeout(finish, 400);
  } else {
    document.body.classList.add("content-revealed");
  }
})();
