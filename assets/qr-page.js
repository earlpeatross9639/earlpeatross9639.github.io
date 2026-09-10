/* Standalone QR generator page logic. Reuses the QR engine from script.js
   (window.SiteQR / window.renderQrSvg). No external requests. */
(function () {
  "use strict";
  var QR = window.SiteQR;
  var form = document.getElementById("qr-form");
  var textInput = document.getElementById("qr-text");
  var eclInput = document.getElementById("qr-ecl");
  var sizeInput = document.getElementById("qr-size");
  var container = document.getElementById("qr-code");

  // Pre-fill from the site config if available.
  if (window.CONFIG && window.CONFIG.qrUrl) { /* CONFIG is not global; ignore */ }

  var lastText = textInput.value;
  var lastEcl = eclInput.value;

  function generate() {
    lastText = textInput.value.trim() || "https://YOUR-DOMAIN-HERE.com";
    lastEcl = eclInput.value;
    window.renderQrSvg(container, lastText, { ecl: lastEcl, border: 4 });
  }

  function border() { return 4; }

  function downloadBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  function downloadPng() {
    var qr;
    try { qr = QR.encodeText(lastText, lastEcl); }
    catch (e) { alert("Text is too long for a QR code."); return; }
    var b = border();
    var modules = qr.size;
    var dim = modules + b * 2;
    var target = Math.max(128, Math.min(4096, parseInt(sizeInput.value, 10) || 1024));
    var scale = Math.max(1, Math.floor(target / dim));
    var px = dim * scale;

    var canvas = document.createElement("canvas");
    canvas.width = px; canvas.height = px;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, px, px);
    ctx.fillStyle = "#0a0e14";
    for (var y = 0; y < modules; y++) {
      for (var x = 0; x < modules; x++) {
        if (qr.getModule(x, y)) {
          ctx.fillRect((x + b) * scale, (y + b) * scale, scale, scale);
        }
      }
    }
    canvas.toBlob(function (blob) {
      downloadBlob(blob, "qr-code.png");
    }, "image/png");
  }

  function downloadSvg() {
    var svg = container.querySelector("svg");
    if (!svg) return;
    var data = '<?xml version="1.0" encoding="UTF-8"?>\n' + svg.outerHTML;
    downloadBlob(new Blob([data], { type: "image/svg+xml" }), "qr-code.svg");
  }

  form.addEventListener("submit", function (e) { e.preventDefault(); generate(); });
  document.getElementById("download-png").addEventListener("click", downloadPng);
  document.getElementById("download-svg").addEventListener("click", downloadSvg);
  document.getElementById("print-qr").addEventListener("click", function () { window.print(); });

  generate();
})();
