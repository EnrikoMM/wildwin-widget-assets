/* WildWin search overlay (hosted). Built by sellers/search-overlay/build.js
   from kit/kit.js, components/search/body.html, brand.css and
   search-overlay.js. Do not edit: edit the sources and rebuild. */
(function () {
"use strict";
var OVERLAY_CSS = ".wws { position: fixed; inset: 0; z-index: 2147483000; display: flex; justify-content: center; align-items: flex-start; padding: 24px; background: rgba(3, 8, 28, .8); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); color: #CBCCDC; font: 400 14px/1.3 Roboto, Arial, sans-serif; text-align: left; -webkit-font-smoothing: antialiased; }\n.wws[hidden], .wws [hidden] { display: none !important; }\n.wws *, .wws *::before { box-sizing: border-box; }\n.wws h2, .wws h3, .wws p, .wws ul, .wws dl, .wws dd { margin: 0; padding: 0; }\n.wws img { max-width: none; }\n.wws button { font-family: inherit; }\n.wws :focus { outline: none; }\n.wws :focus-visible { outline: 2px solid #fff; outline-offset: 2px; }\n.wws-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }\nhtml.wws-lock, html.wws-lock body { overflow: hidden !important; }\n.wws-panel { position: relative; display: flex; flex-direction: column; width: 100%; max-width: 1112px; max-height: 100%; overflow: hidden; border: 1px solid #202241; border-radius: 16px; background: #0E0F25; box-shadow: 0 30px 80px -20px rgba(0, 0, 0, .85); animation: wws-in .22s cubic-bezier(.16, 1, .3, 1); }\n@keyframes wws-in { from { opacity: 0; transform: translateY(-10px); } }\n.wws-bar { display: flex; align-items: center; gap: 8px; padding: 12px 12px 12px 16px; border-bottom: 1px solid #202241; background: #171831; }\n.wws-mag { flex: none; width: 24px; height: 24px; color: #02F098; }\n.wws-q { flex: 1; min-width: 0; height: 44px; padding: 0 4px; border: 0; background: transparent; color: #fff; font: 400 18px/22px Roboto, Arial, sans-serif; -webkit-appearance: none; appearance: none; }\n.wws-q::placeholder { color: #878BBE; }\n.wws .wws-q:focus-visible { outline: none; }\n.wws-bar:focus-within { box-shadow: inset 0 -2px 0 #02F098; }\n.wws-q::-webkit-search-cancel-button { display: none; }\n.wws-btn { position: relative; flex: none; display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-width: 44px; height: 40px; padding: 0 16px; border: 1px solid transparent; border-radius: 40px; background: #202241; color: #fff; font: 700 14px/16px Roboto, Arial, sans-serif; white-space: nowrap; text-decoration: none; cursor: pointer; transition: background-color .15s, border-color .15s, color .15s; }\n.wws-btn::before { content: \"\"; position: absolute; inset: -2px 0; }\n.wws-btn:hover { background: #2B2E5A; }\n.wws-btn[aria-pressed=\"true\"], .wws-go { background: #02F098; color: #03081C; }\n.wws-btn[aria-pressed=\"true\"]:hover, .wws-go:hover { background: #35F3AD; }\n.wws-line { background: transparent; border-color: #202241; color: #CBCCDC; font-weight: 400; }\n.wws-line:hover { background: #171831; border-color: #454987; }\n.wws-line[aria-pressed=\"true\"] { border-color: #02F098; }\n.wws-ghost { background: transparent; color: #878BBE; }\n.wws-ghost:hover { background: #202241; color: #fff; }\n.wws-btn:disabled, .wws-btn[aria-disabled=\"true\"] { opacity: .45; cursor: default; }\n.wws-x { width: 44px; height: 44px; padding: 0; }\n.wws-x svg { width: 20px; height: 20px; }\n.wws-btn svg { width: 16px; height: 16px; }\n.wws-body { flex: 1; min-height: 0; overflow: auto; padding: 16px 16px 24px; overscroll-behavior: contain; }\n.wws-row { display: flex; gap: 8px; margin: 0 -16px 12px; padding: 2px 16px; overflow-x: auto; scrollbar-width: none; }\n.wws-row::-webkit-scrollbar { display: none; }\n.wws-row:empty { display: none; }\n.wws-tools { align-items: center; }\n.wws-sep { flex: none; width: 1px; height: 24px; margin: 0 4px; background: #202241; }\n.wws-mechs { display: contents; }\n.wws-sep:has(+ .wws-mechs:empty) { display: none; }\n.wws-pick { margin-bottom: 16px; padding: 12px; border: 1px solid #202241; border-radius: 16px; background: #171831; }\n.wws-pq { display: block; width: 100%; max-width: 100%; min-width: 0; margin: 0; height: 44px; padding: 0 14px; border: 1px solid #202241; border-radius: 4px; background: #0E0F25; color: #fff; font: 400 14px Roboto, Arial, sans-serif; }\n.wws-pq::placeholder { color: #878BBE; }\n.wws input.wws-pq, .wws input.wws-q { box-sizing: border-box; -webkit-appearance: none; appearance: none; }\n.wws .wws-pq:focus-visible { outline: none; border-color: #02F098; }\n.wws-plist { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 2px 8px; max-height: 288px; margin: 8px 0 !important; overflow: auto; list-style: none; }\n.wws-plist label { display: flex; align-items: center; gap: 10px; min-height: 44px; padding: 0 10px; border-radius: 8px; color: #CBCCDC; cursor: pointer; }\n.wws-plist label:hover { background: #202241; color: #fff; }\n.wws-plist input { flex: none; width: 18px; height: 18px; margin: 0; accent-color: #02F098; }\n.wws-plist img { width: 56px; height: 20px; object-fit: contain; object-position: left center; }\n.wws-pfoot { display: flex; justify-content: flex-end; gap: 8px; }\n.wws-recent { margin-bottom: 16px; }\n.wws-h { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 8px; }\n.wws-h3 { color: #fff; font: 700 16px/20px Roboto, Arial, sans-serif; }\n.wws-hint { margin: -4px 0 12px !important; color: #878BBE; font-size: 13px; }\n.wws-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 4px 0 12px; }\n.wws-count { min-width: 0; color: #fff; font: 700 20px/24px Roboto, Arial, sans-serif; }\n.wws-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(126px, 1fr)); gap: 16px 8px; }\n.wws-tile { position: relative; min-width: 0; }\n.wws-card { display: block; border-radius: 16px; color: inherit; text-decoration: none; }\n.wws-art { position: relative; display: block; aspect-ratio: 126 / 148; overflow: hidden; border-radius: 16px; background: #171831; }\n.wws-art img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .25s cubic-bezier(.16, 1, .3, 1); }\n.wws-card:hover img { transform: scale(1.04); }\n.wws-badges { position: absolute; top: 6px; left: 6px; right: 34px; display: flex; flex-direction: column; align-items: flex-start; gap: 4px; }\n.wws-badge { max-width: 100%; padding: 3px 7px; overflow: hidden; border-radius: 16px; background: rgba(3, 8, 28, .82); color: #fff; font: 700 10px/12px Roboto, Arial, sans-serif; white-space: nowrap; text-overflow: ellipsis; }\n.wws-geo { position: absolute; inset: 0; display: flex; align-items: flex-end; padding: 10px; background: linear-gradient(180deg, rgba(3, 8, 28, .3), rgba(3, 8, 28, .92) 70%); color: #fff; font: 700 12px/14px Roboto, Arial, sans-serif; }\n.wws-name { display: block; margin-top: 6px; overflow: hidden; color: #fff; font: 700 13px/16px Roboto, Arial, sans-serif; white-space: nowrap; text-overflow: ellipsis; }\n.wws-prov { display: block; overflow: hidden; color: #878BBE; font-size: 12px; line-height: 15px; white-space: nowrap; text-overflow: ellipsis; }\n.wws-info { position: absolute; top: 0; right: 0; display: grid; place-items: center; width: 44px; height: 44px; padding: 0; border: 0; background: none; cursor: pointer; }\n.wws-info span { display: grid; place-items: center; width: 24px; height: 24px; border-radius: 50%; background: rgba(3, 8, 28, .82); color: #fff; font: italic 700 14px/1 Georgia, serif; transition: background-color .15s, color .15s; }\n.wws-info:hover span { background: #02F098; color: #03081C; }\n.wws-sk .wws-art { animation: wws-pulse 1s ease-in-out infinite alternate; }\n@keyframes wws-pulse { to { background: #202241; } }\n.wws-more { display: flex; margin: 24px auto 0; }\n.wws-msg { padding: 28px 16px 20px; text-align: center; }\n.wws-msg b { display: block; margin-bottom: 6px; color: #fff; font-size: 18px; }\n.wws-msg .wws-btn { margin-top: 14px; }\n.wws-sug { margin-top: 8px; }\n.wws-fine { margin-top: 24px !important; color: #878BBE; font-size: 12px; text-align: center; }\n.wws-fine a, .wws-ppnote a { color: #CBCCDC; }\n.wws-pp { position: absolute; inset: 0; z-index: 5; display: flex; justify-content: flex-end; background: rgba(3, 8, 28, .6); }\n.wws-sheet { width: 400px; max-width: 100%; height: 100%; padding: 20px; overflow: auto; border-left: 1px solid #202241; background: #171831; animation: wws-side .25s cubic-bezier(.16, 1, .3, 1); }\n@keyframes wws-side { from { transform: translateX(24px); opacity: 0; } }\n@keyframes wws-up { from { transform: translateY(24px); opacity: 0; } }\n.wws-pptop { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }\n.wws-kicker { color: #878BBE; font: 400 12px/14px Roboto, Arial, sans-serif; }\n.wws-pphero { display: flex; gap: 16px; align-items: flex-start; }\n.wws-ppimg { flex: none; width: 108px; aspect-ratio: 126 / 148; border-radius: 16px; background: #202241; object-fit: cover; }\n.wws-ppname { color: #fff; font: 700 20px/24px Roboto, Arial, sans-serif; overflow-wrap: anywhere; }\n.wws-ppprov { margin-top: 4px !important; color: #878BBE; }\n.wws-ppgeo { margin-top: 10px !important; padding: 6px 10px; border-radius: 16px; background: rgba(238, 38, 68, .15); color: #FF8597; font-weight: 700; font-size: 12px; display: inline-block; }\n.wws-pplabels { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }\n.wws-pplabels .wws-badge { background: #202241; }\n.wws-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 18px 0 0 !important; }\n.wws-fact { padding: 10px 12px; border-radius: 12px; background: #202241; }\n.wws-fact dt { color: #878BBE; font-size: 12px; line-height: 15px; }\n.wws-fact dd { margin-top: 2px !important; color: #fff; font: 700 18px/22px Roboto, Arial, sans-serif; }\n.wws-ppmsg { margin-top: 18px !important; color: #878BBE; }\n.wws-ppcta { display: flex; gap: 8px; margin-top: 20px; }\n.wws-ppcta .wws-btn { flex: 1; height: 44px; }\n.wws-ppnote { margin-top: 14px !important; color: #878BBE; font-size: 12px; line-height: 16px; }\n@media (max-width: 640px) {\n.wws { padding: 0; }\n.wws-panel { max-width: none; height: 100%; border: 0; border-radius: 0; }\n.wws-bar { padding: max(6px, env(safe-area-inset-top)) 6px 6px 14px; }\n.wws-q { font-size: 16px; }\n.wws-body { padding-bottom: max(24px, env(safe-area-inset-bottom)); }\n.wws-count { font-size: 16px; line-height: 20px; }\n.wws-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px 8px; }\n.wws-pp { align-items: flex-end; }\n.wws-sheet { width: 100%; height: auto; max-height: 90%; border-left: 0; border-top: 1px solid #202241; border-radius: 16px 16px 0 0; animation-name: wws-up; padding-bottom: max(20px, env(safe-area-inset-bottom)); }\n}\n@media (prefers-reduced-motion: reduce) {\n.wws, .wws * { animation: none !important; transition: none !important; }\n}\n.wws, .wws-q, .wws-btn, .wws-pq, .wws-h3, .wws-count, .wws-name, .wws-badge, .wws-geo, .wws-kicker, .wws-ppname, .wws-fact dd { font-family: Roboto, 'Helvetica Neue', Arial, sans-serif; }\n.wws-panel { background: #171831; border-color: #202241; }\n.wws-bar { background: #171831; border-bottom-color: #202241; }\n.wws-bar:focus-within { box-shadow: inset 0 -3px 0 #02F098; }\n.wws-pick { background: #03081C; border-color: #202241; }\n.wws-pq { background: #171831; border-radius: 12px; }\n.wws-art, .wws-ppimg { background: #202241; }\n.wws-sk .wws-art { background: #202241; }\n@keyframes wws-pulse { to { background: #2B2E5A; } }\n.wws-sheet { background: #03081C; }\n.wws-btn { border-radius: 999px; transition: background-color .15s ease, border-color .15s ease, color .15s ease, transform .14s ease; }\n.wws-btn:active { transform: scale(.98); }\n.wws-btn[aria-pressed=\"true\"], .wws-go { background: #02F098; border-color: #02F098; color: #03081C; }\n.wws-btn[aria-pressed=\"true\"]:hover, .wws-go:hover { background: #35F3AD; border-color: #35F3AD; }\n.wws-line:hover { background: #1B1C3A; border-color: rgba(2, 240, 152, .45); color: #fff; }\n.wws-line[aria-pressed=\"true\"]:hover { color: #03081C; }\n.wws-ghost { color: #CBCCDC; }\n.wws :focus-visible { outline: 3px solid #02F098; outline-offset: -3px; }\n.wws .wws-btn[aria-pressed=\"true\"]:focus-visible, .wws .wws-go:focus-visible { outline-color: #03081C; outline-offset: -5px; }\n.wws .wws-pq:focus-visible { outline: none; border-color: #02F098; box-shadow: inset 0 0 0 2px #02F098; }\n@media (prefers-reduced-motion: reduce) { .wws-btn:active { transform: none; } }\n@media (forced-colors: active) { .wws-btn[aria-pressed=\"true\"] { outline: 2px solid Highlight; outline-offset: -2px; } }";
var OVERLAY_HTML = "<div class=\"wws\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"wws-title\" hidden><div class=\"wws-panel\"><h2 class=\"wws-sr\" id=\"wws-title\">Search games</h2><p class=\"wws-sr wws-live\" role=\"status\"></p><div class=\"wws-bar\"><svg class=\"wws-mag\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"/><path d=\"m15.5 15.5 5 5\"/></svg><input class=\"wws-q\" type=\"search\" placeholder=\"Search games or providers\" aria-label=\"Search games or providers\" aria-describedby=\"wws-hint\" autocomplete=\"off\" autocapitalize=\"off\" spellcheck=\"false\" enterkeyhint=\"search\" maxlength=\"60\"><button class=\"wws-btn wws-ghost wws-clear\" type=\"button\" hidden>Clear</button><button class=\"wws-btn wws-ghost wws-x\" type=\"button\" aria-label=\"Close search\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6 6 18\"/></svg></button></div><div class=\"wws-body\"><nav class=\"wws-row wws-tabs\" aria-label=\"Categories\"></nav><div class=\"wws-row wws-tools\"><button class=\"wws-btn wws-line wws-pbtn\" type=\"button\" aria-expanded=\"false\">Providers: <b class=\"wws-pval\">All</b> <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\"/></svg></button><span class=\"wws-sep\" aria-hidden=\"true\"></span><span class=\"wws-mechs\"></span></div><div class=\"wws-pick\" role=\"group\" aria-label=\"Providers\" hidden><input class=\"wws-pq\" type=\"search\" placeholder=\"Find a provider\" aria-label=\"Find a provider\" autocomplete=\"off\"><ul class=\"wws-plist\"></ul><div class=\"wws-pfoot\"><button class=\"wws-btn wws-ghost wws-pclear\" type=\"button\">Clear all</button><button class=\"wws-btn wws-go wws-pdone\" type=\"button\">Done</button></div></div><div class=\"wws-recent\" hidden><div class=\"wws-h\"><h3 class=\"wws-h3\">Recent searches</h3><button class=\"wws-btn wws-ghost wws-rclear\" type=\"button\">Clear</button></div><div class=\"wws-row wws-rlist\"></div></div><div class=\"wws-head\"><h3 class=\"wws-count\"></h3><button class=\"wws-btn wws-line wws-lucky\" type=\"button\" title=\"Opens a random game from the results shown\">Surprise me</button></div><p class=\"wws-hint\" id=\"wws-hint\" hidden>Type at least 3 characters to search.</p><div class=\"wws-msg wws-err\" hidden><b>Games can't be loaded right now.</b><span>Check your connection and try again.</span><br><button class=\"wws-btn wws-go wws-retry\" type=\"button\">Try again</button></div><div class=\"wws-msg wws-none\" hidden><b class=\"wws-msgt\"></b><span>Check the spelling, or try one of these.</span></div><div class=\"wws-grid\" role=\"list\"></div><button class=\"wws-btn wws-more\" type=\"button\" hidden>Load more</button><div class=\"wws-sug\" hidden><div class=\"wws-h\"><h3 class=\"wws-h3 wws-sugt\">Trending</h3></div><div class=\"wws-grid wws-suggrid\" role=\"list\"></div></div><p class=\"wws-fine\">18+ only. Game availability depends on your country. <a href=\"/responsiblegambling\" data-path=\"/responsiblegambling\">Play responsibly</a></p></div><div class=\"wws-pp\" hidden><section class=\"wws-sheet\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"wws-ppname\"><div class=\"wws-pptop\"><span class=\"wws-kicker\">Game passport</span><button class=\"wws-btn wws-ghost wws-x wws-ppx\" type=\"button\" aria-label=\"Close game info\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6 6 18\"/></svg></button></div><div class=\"wws-pphero\"><img class=\"wws-ppimg\" alt=\"\" width=\"108\" height=\"127\"><div><h3 class=\"wws-ppname\" id=\"wws-ppname\"></h3><p class=\"wws-ppprov\"></p><p class=\"wws-ppgeo\" hidden>Not available in your region</p><div class=\"wws-pplabels\"></div></div></div><dl class=\"wws-facts\"></dl><p class=\"wws-ppmsg wws-ppwait\">Loading details…</p><p class=\"wws-ppmsg wws-pperr\" hidden>More details aren't available right now.</p><div class=\"wws-ppcta\"><a class=\"wws-btn wws-go wws-play\" href=\"/\">Play</a><a class=\"wws-btn wws-line wws-demo\" href=\"/\" hidden>Try demo</a></div><p class=\"wws-ppnote\">Figures come from WildWin's game data; anything not available is left out. 18+ only. <a href=\"/responsiblegambling\" data-path=\"/responsiblegambling\">Play responsibly</a></p></section></div></div></div>";
/*
 * ww-kit: shared helpers for WildWin CMS blocks.
 * build.sh puts this file in front of every component, so each block stays a
 * single paste. The first block on a page defines window.__wwKit; later blocks
 * reuse it, so the session id and init data are fetched once per page view.
 *
 * Runs inside the platform wrapper (function (document, cms) {...}):
 * `document` is the block's shadow root, `window.document` is the real page.
 */
var wwKit = (function () {
  "use strict";
  var KIT_VERSION = 2;
  var existing = window.__wwKit;
  if (existing && existing.version >= KIT_VERSION) { return existing; }

  var page = window.document;
  var LOCALE_PREFIX = /^\/([a-z]{2}(?:-[a-z]{2})?)(?=\/|$)/i;
  var QUIET_KEY = "ww-quiet";
  var sidPromise = null;
  var initPromise = null;
  var decoder = null;

  function el(tag, className, text) {
    var node = page.createElement(tag);
    if (className) { node.className = className; }
    if (text != null && text !== "") { node.textContent = text; }
    return node;
  }

  var TIMEOUT_MS = 15000;

  /* fetch with a time limit, so a hung request never leaves a block stuck. */
  function timedFetch(url, opts) {
    if (!window.AbortController) { return fetch(url, opts); }
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, TIMEOUT_MS);
    opts = opts || {};
    opts.signal = ctrl.signal;
    return fetch(url, opts).then(function (r) { clearTimeout(timer); return r; },
      function (e) { clearTimeout(timer); throw e; });
  }

  /* Forget the session id and init data (after login, logout or a 401/403),
     so the next call reads fresh ones. */
  function resetSession() {
    sidPromise = null;
    initPromise = null;
  }

  /* The site removes the session id from the page after start-up, so it is
     read from the server-rendered HTML once and shared by every block. */
  function headers() {
    if (!sidPromise) {
      sidPromise = new Promise(function (resolve) {
        var init = page.getElementById("init");
        var sid = init && init.getAttribute("data-sid");
        if (sid) { resolve(sid); return; }
        timedFetch("/", { credentials: "same-origin" })
          .then(function (r) { return r.text(); })
          .then(function (html) {
            var m = /data-sid="([^"]+)"/.exec(html);
            resolve(m ? m[1] : "");
          })
          .catch(function () { resolve(""); });
      }).then(function (sid) {
        var h = { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest" };
        if (sid) { h["X-Sid"] = sid; } else { sidPromise = null; }
        return h;
      });
    }
    return sidPromise;
  }

  /* Calls a platform endpoint (same origin). Resolves with `data` when the
     response wraps it, rejects on HTTP errors and on {"error": ...}. */
  function request(path, body, method, retried) {
    return headers().then(function (h) {
      var opts = { method: method || (body ? "POST" : "GET"), credentials: "same-origin", headers: h };
      if (body) { opts.body = JSON.stringify(body); }
      return timedFetch("/jsapi/" + path, opts);
    }).then(function (r) {
      /* A stale session id (the player logged in or out): read a new one once. */
      if ((r.status === 401 || r.status === 403) && !retried) {
        resetSession();
        return request(path, body, method, true);
      }
      if (!r.ok) { throw new Error("HTTP " + r.status + " " + path); }
      return r.json();
    });
  }

  function api(path, body, method) {
    return request(path, body, method, false).then(function (json) {
      if (json && json.error) { throw new Error(json.error); }
      return json && json.data !== undefined ? json.data : json;
    });
  }

  function initData() {
    if (!initPromise) {
      /* The endpoint answers {data: {init_data: {...}}}; keep only the inner object. */
      initPromise = api("init_data").then(function (d) {
        return d && d.init_data ? d.init_data : d;
      }).catch(function (e) { initPromise = null; throw e; });
    }
    return initPromise;
  }

  function locale() {
    var m = window.location.pathname.match(LOCALE_PREFIX);
    return m ? m[1].toLowerCase() : "";
  }

  function localize(path) {
    if (typeof path !== "string" || path.charAt(0) !== "/" || path.charAt(1) === "/") { return path; }
    var loc = locale();
    if (!loc || LOCALE_PREFIX.test(path) || path.indexOf("/game/") === 0) { return path; }
    return "/" + loc + (path === "/" ? "" : path);
  }

  /* Client-side navigation through the site's router; full load as fallback. */
  function navigate(path) {
    try {
      var state = window.history.state || {};
      var idx = typeof state.idx === "number" ? state.idx + 1 : undefined;
      window.history.pushState({ usr: null, key: Math.random().toString(36).slice(2, 10), idx: idx }, "", localize(path));
      window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
    } catch (e) {
      window.location.assign(localize(path));
    }
  }

  /* Links built by a block keep their raw path in data-ww-path; plain left
     clicks go through the router, other clicks keep browser behaviour. */
  function link(className, path, label) {
    var a = el("a", className);
    a.setAttribute("data-ww-path", path);
    a.href = localize(path);
    a.draggable = false;
    if (label) { a.setAttribute("aria-label", label); }
    return a;
  }

  function routeLinks(root) {
    root.addEventListener("click", function (event) {
      var a = event.target.closest ? event.target.closest("a[data-ww-path]") : null;
      if (!a || event.defaultPrevented) { return; }
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) { return; }
      event.preventDefault();
      navigate(a.getAttribute("data-ww-path"));
    });
  }

  function refreshLinks(root) {
    var links = root.querySelectorAll("a[data-ww-path]");
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute("href", localize(links[i].getAttribute("data-ww-path")));
    }
  }

  /* Game labels arrive HTML-escaped ("Hold&amp;win"); decode once. */
  function decode(text) {
    if (!text || String(text).indexOf("&") < 0) { return text || ""; }
    decoder = decoder || page.createElement("textarea");
    decoder.innerHTML = text;
    return decoder.value;
  }

  /* Game art lives on the external media host (init_data.external_media_url,
     e.g. launchgame2me.com), not on MEDIA_URL. Pass the host from mediaHost(). */
  function gameImage(game, host) {
    if (!game || !game.game_image) { return ""; }
    return (host || "") + "/media/pictures/290x342/" + game.game_image;
  }

  function mediaHost() {
    return initData().then(function (d) {
      return String((d && (d.external_media_url || d.MEDIA_URL)) || "").replace(/\/+$/, "");
    });
  }

  function gamePath(game) {
    return "/game/" + (game.seo_slug || game.slug || "");
  }

  /* Quiet mode: one switch, shared by all blocks, kept across reloads. */
  function readStore(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function writeStore(key, value) {
    try {
      if (value == null) { window.localStorage.removeItem(key); } else { window.localStorage.setItem(key, value); }
    } catch (e) { /* private mode: setting lasts for this page only */ }
  }
  var quietMemory = null;
  function isQuiet() {
    var v = readStore(QUIET_KEY);
    return v != null ? v === "1" : quietMemory === true;
  }
  function setQuiet(on) {
    quietMemory = !!on;
    writeStore(QUIET_KEY, on ? "1" : "0");
    window.dispatchEvent(new CustomEvent("ww:quiet", { detail: { quiet: !!on } }));
  }
  function onQuiet(fn) {
    window.addEventListener("ww:quiet", function (e) { fn(!!(e.detail && e.detail.quiet)); });
  }

  /* Another tab changed quiet mode: tell this tab's blocks too. The kit owns
     this listener so it works whether or not the quiet-switch block is here. */
  window.addEventListener("storage", function (e) {
    if (e.key !== QUIET_KEY) { return; }
    window.dispatchEvent(new CustomEvent("ww:quiet", { detail: { quiet: e.newValue === "1" } }));
  });

  function reducedMotion() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  /* Calls fn on every route change (pushState, replaceState, back/forward). */
  var routeFns = [];
  function onRoute(fn) {
    routeFns.push(fn);
    if (routeFns.length > 1) { return; }
    var last = window.location.pathname;
    setInterval(function () {
      if (window.location.pathname === last) { return; }
      last = window.location.pathname;
      routeFns.forEach(function (f) { try { f(last); } catch (e) { /* keep others running */ } });
    }, 400);
  }

  var kit = {
    version: KIT_VERSION,
    page: page,
    el: el,
    api: api,
    initData: initData,
    resetSession: resetSession,
    locale: locale,
    localize: localize,
    navigate: navigate,
    link: link,
    routeLinks: routeLinks,
    refreshLinks: refreshLinks,
    decode: decode,
    gameImage: gameImage,
    mediaHost: mediaHost,
    gamePath: gamePath,
    readStore: readStore,
    writeStore: writeStore,
    isQuiet: isQuiet,
    setQuiet: setQuiet,
    onQuiet: onQuiet,
    reducedMotion: reducedMotion,
    onRoute: onRoute
  };
  window.__wwKit = kit;
  return kit;
})();
/*
 * WildWin search overlay (hosted). The STEP-68 full-screen search with Game
 * Passport, as one script served from jsDelivr instead of a CMS paste:
 * category tabs, provider picker, mechanic chips, a WildWin game grid with
 * region status, recent searches and "Surprise me". Every tile has an "i"
 * button that opens the Game Passport (RTP, bets, best result) from the
 * platform's own game data. Missing figures are left out, never guessed.
 *
 * There is no launcher here: the STEP-75 lobby bar is the launcher. It loads
 * this file on idle and calls window.__wwSearch.openSearch().
 * The overlay CSS and markup come from components/search/body.html and are
 * embedded by build.js as OVERLAY_CSS / OVERLAY_HTML (plus brand.css).
 *
 * Opens with: window.__wwSearch.openSearch({q?, cat?}), a "ww:search-open"
 * CustomEvent on window (same detail), ⌘K / Ctrl+K, a #search=<words> link,
 * and (while TAKEOVER_NATIVE_SEARCH is true) the site's own search button and
 * the mobile tab-bar Search. Closes with Esc, ✕, a click on the backdrop, or
 * Back. Fires "ww:search-ready" on window once it is ready.
 */

/* ---------------------------------------------------------------- CONFIG */

var GLOBAL_KEY = "__wwSearch";
var API_VERSION = 1;

/* true: the site's search button and tab-bar Search open this overlay.
   false: nothing on the site is intercepted. */
var TAKEOVER_NATIVE_SEARCH = true;
var NATIVE_ENTRY = '[data-testid=search-button], a[href$="/search/casino"]';

/* The casino menu section and its categories (lobby-categories). */
var SECTION_ID = "6a799aea0a5b622f534bc28d";
var START_CATEGORY = "top";        /* shown when the overlay opens empty */
var SUGGEST_CATEGORY = "trending"; /* suggestion row when nothing matches */

var MIN_CHARS = 3;
var DEBOUNCE_MS = 300;
var RECENT_SAVE_MS = 1500;
var SEARCH_LIMIT = 500; /* one request per query gives an exact count up to 500 */
var PAGE = 60;          /* tiles shown per "Load more" */
var SUGGEST_COUNT = 8;
var RECENT_KEY = "wws-recent";
var RECENT_MAX = 5;

/* Operator labels never shown as badges (hype, not information). Compared
   lower-case with emoji and punctuation removed. */
var HIDE_LABELS = ["hot"];

/* Mechanic chips: [chip text, label text it matches]. A chip appears only
   when the loaded results contain that label. */
var MECHANICS = [
  ["Buy Feature", "buyfeature"],
  ["Hold & Win", "holdwin"],
  ["Megaways", "megaways"]
];

/* Text built by the script. Static texts (error, loading and empty-state
   messages too) live in body.html. */
var TEXT = {
  games: "{n} games",
  gamesMore: "{n}+ games",
  forQuery: " for “{q}”",
  fromProv: " from {p}",
  withMech: " · {m}",
  loading: "Loading games…",
  none: "No games match “{q}”.",
  noneFilter: "No games match these filters.",
  geo: "Not available in your region",
  provAll: "All",
  provN: "{n} selected",
  info: "Game info: {name}",
  rtp: "RTP",
  minBet: "Min bet",
  maxBet: "Max bet",
  best: "Best multiplier on WildWin"
};

/* ------------------------------------------------------------------ STATE */

/* Always the real page: this file is loaded by a <script src>, never run in
   a CMS Body shadow root. */
var page = window.document;
var el = wwKit.el;
var decode = wwKit.decode;
var S = null; /* private state; window.__wwSearch holds only the public API */

function fmt(text, map) {
  return text.replace(/\{(\w+)\}/g, function (m, k) { return map[k] != null ? map[k] : m; });
}
function norm(text) { return decode(text).toLowerCase().replace(/[^a-z0-9]/g, ""); }
function $(sel) { return S.ov.querySelector(sel); }
function show(node, on) { node.hidden = !on; }
function empty(node) { while (node.firstChild) { node.removeChild(node.firstChild); } }

/* ------------------------------------------------------------------- DATA */

/* Game art comes from the game CDN (wwKit.mediaHost). */
function setArt(img, g) {
  if (g.game_image) { img.src = wwKit.gameImage(g, S.media); } else { img.removeAttribute("src"); }
}

/* Categories from the platform, without the ones that hold no games. */
function loadCats() {
  if (!S.catsP) {
    S.catsP = wwKit.api("lobby-categories", { section_id: SECTION_ID }).then(function (d) {
      var items = ((d && d.items) || []).filter(function (c) { return c && c.category_name && !c.hidden && c.title; });
      return Promise.all(items.map(function (c) {
        return wwKit.api("v2/games/get_by_section", { section_id: SECTION_ID, category_name: c.category_name, offset: 0, limit: 1 })
          .then(function (r) { return r && r.items && r.items.length ? { name: c.category_name, title: c.title } : null; }, function () { return null; });
      }));
    }).then(function (list) { return list.filter(Boolean); }, function () { S.catsP = null; return []; });
  }
  return S.catsP;
}

function loadProviders() {
  if (!S.provP) {
    S.provP = wwKit.api("v2/games/filters", {}).then(function (d) {
      var f = ((d && d.items) || []).filter(function (x) { return x.slug === "providers"; })[0];
      return ((f && f.values) || []).filter(function (v) { return v && v.id && v.label; });
    }, function (e) { S.provP = null; throw e; });
  }
  return S.provP;
}

function media() {
  if (!S.mediaP) {
    S.mediaP = wwKit.mediaHost().catch(function () { S.mediaP = null; return ""; });
  }
  return S.mediaP;
}

function isSearch() { return S.q.length >= MIN_CHARS || S.provs.length > 0; }

/* Starts a new result list for the current query, category and providers. */
function refresh() {
  clearTimeout(S.timer);
  S.items = [];
  S.off = 0;
  S.cursor = null;
  S.complete = false;
  S.total = null;
  S.shown = PAGE;
  S.err = false;
  S.drawn = 0;
  S.mech = null;
  S.focusFrom = null;
  S.mode = isSearch() ? "search" : "cat";
  if (S.mode === "cat" && !S.cat) { S.cat = START_CATEGORY; }
  empty($(".wws-grid"));
  renderChrome();
  fetchMore();
}

function fetchMore() {
  var token = ++S.token;
  var call;
  S.busy = true;
  if (S.mode === "search") {
    var body = { value: S.q.length >= MIN_CHARS ? S.q : "", limit: SEARCH_LIMIT, filters: S.provs.length ? { providers: S.provs.slice() } : {} };
    if (S.cursor) { body.search_after = S.cursor; }
    call = wwKit.api("v2/games/global_search", body);
  } else {
    call = wwKit.api("v2/games/get_by_section", { section_id: SECTION_ID, category_name: S.cat, offset: S.off, limit: PAGE });
  }
  render();
  Promise.all([media(), call]).then(function (r) {
    if (token !== S.token) { return; }
    var d = r[1] || {};
    var list = (S.mode === "search" ? d.games : d.items) || [];
    S.media = r[0];
    S.off += list.length;
    S.items = S.items.concat(list.filter(function (g) { return g && (g.seo_slug || g.slug); }));
    if (S.mode === "search") {
      S.cursor = list.length >= SEARCH_LIMIT ? d.search_after : null;
      S.complete = !S.cursor;
    } else {
      S.total = typeof d.items_count === "number" ? d.items_count : null;
      S.complete = list.length < PAGE || (S.total != null && S.items.length >= S.total);
    }
    S.busy = false;
    render();
    if (S.q.length >= MIN_CHARS && S.items.length) {
      clearTimeout(S.saveTimer);
      S.saveTimer = setTimeout(function () { saveRecent(S.q); }, RECENT_SAVE_MS);
    }
  }, function () {
    if (token !== S.token) { return; }
    S.busy = false;
    S.err = true;
    render();
  });
}

function hasMech(g, key) {
  return (g.labels || []).some(function (l) { return norm(l).indexOf(key) >= 0; });
}
function view() {
  return S.mech ? S.items.filter(function (g) { return hasMech(g, S.mech[1]); }) : S.items;
}

/* --------------------------------------------------------------- RECENTS */

function recent() {
  try {
    var list = JSON.parse(wwKit.readStore(RECENT_KEY) || "[]");
    return Array.isArray(list) ? list.filter(function (q) { return typeof q === "string" && q; }).slice(0, RECENT_MAX) : [];
  } catch (e) { return []; }
}
function saveRecent(q) {
  q = (q || "").trim();
  if (q.length < MIN_CHARS) { return; }
  var list = recent().filter(function (x) { return x.toLowerCase() !== q.toLowerCase(); });
  wwKit.writeStore(RECENT_KEY, JSON.stringify([q].concat(list).slice(0, RECENT_MAX)));
}

/* ---------------------------------------------------------------- RENDER */

function tile(g) {
  var item = el("div", "wws-tile");
  var path = wwKit.gamePath(g);
  var name = decode(g.name || g.seo_slug);
  var prov = decode(g.display_operator || "");
  item.setAttribute("role", "listitem");
  item.wwsGame = g;

  var a = el("a", "wws-card");
  a.href = wwKit.localize(path);
  a.setAttribute("data-path", path);
  a.setAttribute("aria-label", name + (prov ? ", " + prov : "") + (g.geo_blocked ? ", " + TEXT.geo : ""));

  var art = el("span", "wws-art");
  var img = el("img");
  img.alt = "";
  img.width = 126;
  img.height = 148;
  img.loading = "lazy";
  img.decoding = "async";
  img.draggable = false;
  setArt(img, g);
  art.appendChild(img);

  var labels = badges(g).slice(0, 2);
  if (labels.length) {
    var b = el("span", "wws-badges");
    labels.forEach(function (l) { b.appendChild(el("span", "wws-badge", l)); });
    art.appendChild(b);
  }
  if (g.geo_blocked) { art.appendChild(el("span", "wws-geo", TEXT.geo)); }

  a.appendChild(art);
  a.appendChild(el("span", "wws-name", name));
  if (prov) { a.appendChild(el("span", "wws-prov", prov)); }
  item.appendChild(a);

  var info = el("button", "wws-info");
  info.type = "button";
  info.setAttribute("aria-label", fmt(TEXT.info, { name: name }));
  info.appendChild(el("span", "", "i"));
  item.appendChild(info);
  return item;
}

function badges(g) {
  return (g.labels || []).map(decode).filter(function (l) {
    return l && HIDE_LABELS.indexOf(norm(l)) < 0;
  });
}

function chip(text, cls, onClick) {
  var b = el("button", "wws-btn " + (cls || ""), text);
  b.type = "button";
  b.addEventListener("click", onClick);
  return b;
}

/* Rebuilds a chip row only when its content changes. If a chip in it had
   focus, focus goes back to the chip with the same text (or the input). */
function row(box, key, fill) {
  if (box.wwsKey === key) { return; }
  var a = deepActive();
  var was = box.contains(a) ? a.textContent : null;
  box.wwsKey = key;
  empty(box);
  fill();
  if (was != null) {
    var n = [].filter.call(box.children, function (b) { return b.textContent === was; })[0];
    (n || $(".wws-q")).focus();
  }
}

/* Updates aria-pressed in place, so a pressed chip keeps focus. */
function press(box, isOn) {
  [].forEach.call(box.children, function (b) { b.setAttribute("aria-pressed", isOn(b.wwsVal) ? "true" : "false"); });
}

/* Tabs, recent searches and the provider button. */
function renderChrome() {
  var tabs = $(".wws-tabs");
  var cats = S.cats || [];
  row(tabs, cats.map(function (c) { return c.name; }).join(), function () {
    cats.forEach(function (c) {
      var b = chip(c.title, "", function () {
        S.q = "";
        S.provs = [];
        S.cat = c.name;
        $(".wws-q").value = "";
        refresh();
      });
      b.wwsVal = c.name;
      tabs.appendChild(b);
    });
  });
  press(tabs, function (name) { return S.mode === "cat" && S.cat === name; });

  var list = recent();
  var rl = $(".wws-rlist");
  row(rl, list.join("\n"), function () {
    list.forEach(function (q) {
      rl.appendChild(chip(q, "wws-line", function () {
        /* the row hides once the query runs, so focus moves to the input */
        var had = deepActive() === this;
        setQuery(q, true);
        if (had) { $(".wws-q").focus(); }
      }));
    });
  });
  show($(".wws-recent"), list.length > 0 && S.q.length < MIN_CHARS && !S.provs.length);
  show($(".wws-clear"), S.q.length > 0);
  show($(".wws-hint"), S.q.length > 0 && S.q.length < MIN_CHARS);

  var pv = $(".wws-pval");
  if (!S.provs.length) { pv.textContent = TEXT.provAll; } else if (S.provs.length === 1) { pv.textContent = provName(S.provs[0]); } else { pv.textContent = fmt(TEXT.provN, { n: S.provs.length }); }
}

function provName(id) {
  var p = (S.provList || []).filter(function (x) { return x.id === id; })[0];
  return p ? p.label : id;
}

function headline(n, plus) {
  var t = fmt(plus ? TEXT.gamesMore : TEXT.games, { n: n.toLocaleString("en-US") });
  if (S.mode === "search") {
    if (S.q.length >= MIN_CHARS) { t += fmt(TEXT.forQuery, { q: S.q }); }
    if (S.provs.length === 1) { t += fmt(TEXT.fromProv, { p: provName(S.provs[0]) }); }
  } else {
    var c = (S.cats || []).filter(function (x) { return x.name === S.cat; })[0];
    if (c) { t = c.title + " · " + t; }
  }
  if (S.mech) { t += fmt(TEXT.withMech, { m: S.mech[0] }); }
  return t;
}

function render() {
  var v = view();
  var grid = $(".wws-grid");
  var count = $(".wws-count");
  var loading = S.busy && !S.items.length;

  /* Mechanic chips from the labels in the loaded results. */
  var mechs = $(".wws-mechs");
  var avail = MECHANICS.filter(function (m) {
    return S.mech === m || S.items.some(function (g) { return hasMech(g, m[1]); });
  });
  row(mechs, avail.join("|"), function () {
    avail.forEach(function (m) {
      var b = chip(m[0], "wws-line wws-mech", function () {
        S.mech = S.mech === m ? null : m;
        S.shown = PAGE;
        S.drawn = 0;
        empty(grid);
        render();
      });
      b.wwsVal = m;
      mechs.appendChild(b);
    });
  });
  press(mechs, function (m) { return S.mech === m; });

  /* Headline and live count. */
  if (S.err) {
    count.textContent = "";
  } else if (loading) {
    count.textContent = TEXT.loading;
  } else {
    var exact = S.mode === "cat" && !S.mech && S.total != null;
    count.textContent = headline(exact ? S.total : v.length, !exact && !S.complete);
  }

  /* Skeleton while the first page loads. */
  if (loading && !grid.firstChild) {
    for (var i = 0; i < 16; i++) {
      var sk = el("div", "wws-tile wws-sk");
      sk.setAttribute("aria-hidden", "true");
      sk.appendChild(el("span", "wws-art"));
      grid.appendChild(sk);
    }
  } else if (!loading && grid.querySelector(".wws-sk")) {
    empty(grid);
  }

  /* Tiles: new ones are appended so focus and scroll stay put. */
  var upto = Math.min(S.shown, v.length);
  if (!loading) {
    for (var k = S.drawn; k < upto; k++) { grid.appendChild(tile(v[k])); }
    S.drawn = Math.max(S.drawn, upto);
    /* after Load more, focus goes to the first new tile */
    var first = S.focusFrom != null && grid.children[S.focusFrom];
    if (first) { S.focusFrom = null; first.firstChild.focus(); }
  }

  var none = !S.err && !S.busy && S.complete && !v.length;
  show($(".wws-err"), S.err);
  show($(".wws-none"), none);
  if (none) { $(".wws-msgt").textContent = S.q.length >= MIN_CHARS ? fmt(TEXT.none, { q: S.q }) : TEXT.noneFilter; }
  suggest(none);

  /* One live region outside the parts that hide, so every state is heard. */
  var say = S.err ? $(".wws-err b").textContent : none ? $(".wws-msgt").textContent : loading ? "" : count.textContent;
  var live = $(".wws-live");
  if (live.textContent !== say) { live.textContent = say; }

  var more = $(".wws-more");
  show(more, !S.err && !loading && (upto < v.length || !S.complete));
  more.setAttribute("aria-disabled", S.busy ? "true" : "false");
  show($(".wws-head"), !S.err && !none);
  $(".wws-lucky").disabled = !lucky().length;
}

/* "Trending" suggestions when nothing matches (real category, real games). */
function suggest(on) {
  var box = $(".wws-sug");
  show(box, false);
  if (!on || !SUGGEST_CATEGORY) { return; }
  var g = $(".wws-suggrid");
  if (!S.sugP) {
    S.sugP = wwKit.api("v2/games/get_by_section", { section_id: SECTION_ID, category_name: SUGGEST_CATEGORY, offset: 0, limit: SUGGEST_COUNT })
      .then(function (d) { return (d && d.items) || []; }, function () { S.sugP = null; return []; });
  }
  Promise.all([media(), S.sugP]).then(function (r) {
    S.media = r[0];
    var c = (S.cats || []).filter(function (x) { return x.name === SUGGEST_CATEGORY; })[0];
    if (c) { $(".wws-sugt").textContent = c.title; }
    empty(g);
    r[1].slice(0, SUGGEST_COUNT).forEach(function (x) { g.appendChild(tile(x)); });
    show(box, r[1].length > 0 && !$(".wws-none").hidden);
  });
}

/* Surprise me: a random game among the tiles shown (region-blocked ones excluded). */
function lucky() {
  return view().slice(0, S.drawn).filter(function (g) { return !g.geo_blocked; });
}

/* ------------------------------------------------------------- PROVIDERS */

function renderProviders() {
  var ul = $(".wws-plist");
  var q = norm($(".wws-pq").value);
  empty(ul);
  (S.provList || []).forEach(function (p) {
    if (q && norm(p.label).indexOf(q) < 0) { return; }
    var li = el("li");
    var label = el("label");
    var box = el("input");
    box.type = "checkbox";
    box.checked = S.provs.indexOf(p.id) >= 0;
    box.addEventListener("change", function () {
      S.provs = box.checked ? S.provs.concat([p.id]) : S.provs.filter(function (x) { return x !== p.id; });
      clearTimeout(S.timer);
      S.timer = setTimeout(refresh, DEBOUNCE_MS);
      renderChrome();
    });
    label.appendChild(box);
    if (p.icon) {
      var img = el("img");
      img.alt = "";
      img.loading = "lazy";
      img.src = "/svg/wildwin/" + encodeURIComponent(p.icon) + "/878bbe/cbccdc";
      img.addEventListener("error", function () { img.remove(); });
      label.appendChild(img);
    }
    label.appendChild(el("span", "", p.label));
    li.appendChild(label);
    ul.appendChild(li);
  });
}

function togglePicker(open) {
  var pick = $(".wws-pick");
  show(pick, open);
  $(".wws-pbtn").setAttribute("aria-expanded", open ? "true" : "false");
  if (!open) { return; }
  loadProviders().then(function (list) {
    S.provList = list;
    renderProviders();
    $(".wws-pq").focus();
  }, function () { togglePicker(false); });
}

/* --------------------------------------------------------------- PASSPORT */

function passport(g, opener) {
  var slug = g.seo_slug || g.slug;
  var path = wwKit.gamePath(g);
  var facts = $(".wws-facts");
  var wait = $(".wws-ppwait");
  var fail = $(".wws-pperr");
  var tok = ++S.pp; /* each open has its own token, so a late reply can't add rows twice */
  S.ppOpener = opener;

  setArt($(".wws-ppimg"), g);
  $(".wws-ppname").textContent = decode(g.name || slug);
  $(".wws-ppprov").textContent = decode(g.display_operator || "");
  show($(".wws-ppgeo"), !!g.geo_blocked);
  var lab = $(".wws-pplabels");
  empty(lab);
  badges(g).forEach(function (l) { lab.appendChild(el("span", "wws-badge", l)); });

  var play = $(".wws-play");
  play.href = wwKit.localize(path);
  play.setAttribute("data-path", path);
  var demo = $(".wws-demo");
  demo.href = wwKit.localize(path + "?demo=1");
  demo.setAttribute("data-path", path + "?demo=1");
  show(demo, g.demo === true);

  empty(facts);
  show(wait, true);
  show(fail, false);
  show($(".wws-pp"), true);
  $(".wws-ppx").focus();

  if (!S.info[slug]) {
    S.info[slug] = wwKit.api("games/info/" + encodeURIComponent(slug), {})
      .catch(function (e) { delete S.info[slug]; throw e; });
  }
  S.info[slug].then(function (d) {
    if (S.pp !== tok) { return; }
    var gi = (d && d.game_info) || {};
    var best = gi.best_results && Number(gi.best_results.multiplier);
    function bet(v) { return Number(v) > 0 ? v + " " + (gi.currency || "") : ""; }
    var rows = [
      [TEXT.rtp, Number(gi.rtp) > 0 ? gi.rtp + "%" : ""],
      [TEXT.minBet, bet(gi.min_bet)],
      [TEXT.maxBet, bet(gi.max_bet)],
      [TEXT.best, best > 0 ? best.toLocaleString("en-US") + "×" : ""] /* hidden when 0 or missing */
    ].filter(function (r) { return r[1]; });
    rows.forEach(function (r) {
      var box = el("div", "wws-fact");
      box.appendChild(el("dt", "", r[0]));
      box.appendChild(el("dd", "", r[1].trim()));
      facts.appendChild(box);
    });
    show(wait, false);
    show(fail, !rows.length);
  }, function () {
    if (S.pp !== tok) { return; }
    show(wait, false);
    show(fail, true);
  });
}

function closePassport() {
  show($(".wws-pp"), false);
  S.pp++;
  if (S.ppOpener && S.ppOpener.isConnected) { S.ppOpener.focus(); }
}

/* --------------------------------------------------------- OPEN AND CLOSE */

function deepActive() {
  var a = page.activeElement;
  while (a && a.shadowRoot && a.shadowRoot.activeElement) { a = a.shadowRoot.activeElement; }
  return a;
}

function setQuery(q, now) {
  S.q = (q || "").trim();
  $(".wws-q").value = q || "";
  if (now) { refresh(); } else { renderChrome(); }
}

function open(opts) {
  opts = opts || {};
  if (!S.ov) { return; }
  if (!S.ov.isConnected) { page.body.appendChild(S.ov); }
  if (!S.open) {
    S.back = deepActive();
    S.open = true;
    show(S.ov, true);
    page.documentElement.classList.add("wws-lock");
    try {
      var st = history.state || {};
      history.pushState({ usr: st.usr === undefined ? null : st.usr, key: st.key, idx: st.idx, wws: 1 }, "");
    } catch (e) { /* history unavailable: Back simply leaves the page */ }
  }
  closePassport();
  togglePicker(false);
  if (opts.cat) {
    S.cat = opts.cat;
    S.provs = [];
    setQuery("", true);
  } else if (opts.q != null) {
    S.provs = [];
    setQuery(opts.q, true);
  } else if (!S.items || !S.items.length || S.err) {
    refresh();
  }
  loadCats().then(function (cats) {
    S.cats = cats;
    if (S.mode === "cat" && cats.length && !cats.some(function (c) { return c.name === S.cat; })) {
      S.cat = cats[0].name;
      refresh();
    } else {
      renderChrome();
    }
  });
  $(".wws-q").focus();
}

/* fromHistory: Back was pressed, so the history entry is already gone. */
function close(fromHistory) {
  if (!S.open) { return; }
  S.open = false;
  show(S.ov, false);
  page.documentElement.classList.remove("wws-lock");
  if (!fromHistory && history.state && history.state.wws) { history.back(); }
  if (S.back && S.back.isConnected && S.back.focus) { S.back.focus(); }
}

/* Leaves the overlay for a game page: our history entry becomes the game, so
   Back from the game returns to the page under the overlay. */
function go(path) {
  saveRecent(S.q);
  var st = history.state;
  S.back = null;
  close(true);
  if (st && st.wws) {
    history.replaceState({ usr: null, key: Math.random().toString(36).slice(2, 10), idx: st.idx }, "", wwKit.localize(path));
    window.dispatchEvent(new PopStateEvent("popstate", { state: history.state }));
  } else {
    wwKit.navigate(path);
  }
}

/* -------------------------------------------------------------- KEYBOARD */

function focusables(root) {
  return [].filter.call(root.querySelectorAll("a[href], button:not([disabled]), input"), function (n) {
    return n.offsetParent !== null || n === page.activeElement;
  });
}

function onKey(e) {
  var t = e.target;
  if (e.key === "Escape") {
    e.preventDefault();
    if (!$(".wws-pp").hidden) { closePassport(); } else if (!$(".wws-pick").hidden) { togglePicker(false); $(".wws-pbtn").focus(); } else { close(); }
    return;
  }
  if (e.key === "Tab") {
    var list = focusables($(".wws-pp").hidden ? $(".wws-panel") : $(".wws-sheet"));
    if (!list.length) { return; }
    var first = list[0];
    var last = list[list.length - 1];
    if (e.shiftKey && (t === first || list.indexOf(t) < 0)) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && (t === last || list.indexOf(t) < 0)) { e.preventDefault(); first.focus(); }
    return;
  }
  if (t === $(".wws-q")) {
    if (e.key === "Enter") { e.preventDefault(); S.q = t.value.trim(); refresh(); saveRecent(S.q); }
    if (e.key === "ArrowDown") { var c0 = $(".wws-grid .wws-card"); if (c0) { e.preventDefault(); c0.focus(); } }
    return;
  }
  /* Arrow keys move between tiles. */
  if (!t.classList || !t.classList.contains("wws-card") || !/^Arrow/.test(e.key)) { return; }
  var cards = [].slice.call(t.closest(".wws-grid").querySelectorAll(".wws-card"));
  var i = cards.indexOf(t);
  var top = cards[0].getBoundingClientRect().top;
  var cols = cards.filter(function (c) { return Math.abs(c.getBoundingClientRect().top - top) < 2; }).length || 1;
  var step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -cols, ArrowDown: cols }[e.key];
  var next = cards[i + step];
  e.preventDefault();
  if (next) { next.focus(); } else if (e.key === "ArrowUp" && i < cols) { $(".wws-q").focus(); }
}

/* ------------------------------------------------------------------ BUILD */

/* Puts the embedded overlay CSS in the page head and its markup at the end of
   the page body. OVERLAY_HTML is a static string from body.html (no user
   data); a <template> parses it without loading anything until it is used. */
function buildOverlay() {
  var style = page.getElementById("wws-style");
  if (!style) {
    style = el("style");
    style.id = "wws-style";
    page.head.appendChild(style);
  }
  style.textContent = OVERLAY_CSS;
  var tpl = page.createElement("template");
  tpl.innerHTML = OVERLAY_HTML;
  var ov = tpl.content.querySelector(".wws");
  if (!ov) { return null; }
  page.body.appendChild(ov);
  return ov;
}

function wire(ov) {
  var q = ov.querySelector(".wws-q");
  q.addEventListener("input", function () {
    S.q = q.value.trim();
    clearTimeout(S.timer);
    clearTimeout(S.saveTimer);
    renderChrome();
    /* 1-2 characters: keep the current view, the hint says why */
    if (S.q.length >= MIN_CHARS || S.mode === "search") { S.timer = setTimeout(refresh, DEBOUNCE_MS); }
  });
  ov.addEventListener("click", function (e) {
    var t = e.target;
    if (t === ov) { close(); return; }
    if (t.classList.contains("wws-pp")) { closePassport(); return; }
    var info = t.closest(".wws-info");
    if (info) { passport(info.parentNode.wwsGame, info); return; }
    var a = t.closest("a[data-path]");
    if (a && e.button === 0 && !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) {
      e.preventDefault();
      go(a.getAttribute("data-path"));
    }
  });
  function on(sel, fn) { ov.querySelector(sel).addEventListener("click", fn); }
  on(".wws-x", function () { close(); });
  on(".wws-ppx", closePassport);
  on(".wws-clear", function () { setQuery("", true); q.focus(); });
  on(".wws-retry", function () {
    q.focus(); /* the button hides while it retries */
    if (S.items.length) { S.err = false; fetchMore(); } else { refresh(); }
  });
  on(".wws-more", function () {
    if (S.busy) { return; }
    S.focusFrom = S.drawn;
    S.shown += PAGE;
    if (S.shown > view().length && !S.complete) { fetchMore(); } else { render(); }
  });
  on(".wws-rclear", function () { wwKit.writeStore(RECENT_KEY, null); renderChrome(); q.focus(); });
  on(".wws-pbtn", function () { togglePicker(ov.querySelector(".wws-pick").hidden); });
  on(".wws-pdone", function () { togglePicker(false); ov.querySelector(".wws-pbtn").focus(); });
  on(".wws-pclear", function () { S.provs = []; renderProviders(); refresh(); });
  on(".wws-lucky", function () {
    var list = lucky();
    if (list.length) { go(wwKit.gamePath(list[Math.floor(Math.random() * list.length)])); }
  });
  ov.querySelector(".wws-pq").addEventListener("input", renderProviders);
}

/* #search or #search=<words> opens the overlay, prefilled. */
function fromHash() {
  var m = /^#search(?:=(.*))?$/.exec(location.hash);
  if (!m || !S.ov) { return; }
  var words = "";
  try { words = decodeURIComponent((m[1] || "").replace(/\+/g, " ")); } catch (e) { words = m[1] || ""; }
  try { history.replaceState(history.state, "", location.pathname + location.search); } catch (e) { /* keep hash */ }
  open(words ? { q: words.slice(0, 60) } : {});
}

/* Listeners on window live for the whole visit; they are added once.
   Keys are caught on window while the overlay is open, so Esc and the focus
   trap work even if focus has fallen to the page. */
function listen() {
  window.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && !e.altKey && !e.shiftKey && (e.key === "k" || e.key === "K") && S.ov) {
      e.preventDefault();
      if (S.open) { close(); } else { open(); }
    } else if (S.open) {
      onKey(e);
    }
  }, true);
  window.addEventListener("click", function (e) {
    if (!TAKEOVER_NATIVE_SEARCH || !S.ov || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) { return; }
    var hit = e.target && e.target.closest ? e.target.closest(NATIVE_ENTRY) : null;
    if (!hit || S.ov.contains(hit)) { return; }
    try {
      open();
      e.preventDefault();
      e.stopPropagation();
    } catch (err) { /* on any error the site's own search takes the click */ }
  }, true);
  window.addEventListener("popstate", function () {
    if (S.open && !(history.state && history.state.wws)) { close(true); }
  });
  window.addEventListener("hashchange", fromHash);
  window.addEventListener("ww:search-open", function (e) { open(openOpts(e.detail)); });
}

/* ------------------------------------------------------------ PUBLIC API */

/* Only a string query (q) or category name (cat) is taken from callers. */
function openOpts(input) {
  var opts = {};
  if (input && typeof input.cat === "string" && input.cat) { opts.cat = input.cat.slice(0, 60); }
  else if (input && typeof input.q === "string") { opts.q = input.q.slice(0, 60); }
  return opts;
}

function publicApi() {
  return Object.freeze({
    version: API_VERSION,
    openSearch: function (input) { open(openOpts(input)); },
    closeSearch: function () { close(); },
    isOpen: function () { return !!(S && S.open); }
  });
}

/* The STEP-68 Body block got here first: it owns the overlay and ⌘K, so
   only an openSearch() is added, which opens it through its own ⌘K. */
function adoptLegacy(legacy) {
  if (typeof legacy.openSearch === "function" || Object.isFrozen(legacy)) { return; }
  legacy.openSearch = function () {
    if (legacy.open) { return; }
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, ctrlKey: true, bubbles: true }));
  };
}

function init() {
  var existing = window[GLOBAL_KEY];
  if (existing) { adoptLegacy(existing); return; } /* this file ran already */
  S = { q: "", cat: "", provs: [], items: [], info: {}, token: 0, pp: 0, drawn: 0, shown: PAGE, open: false };
  S.ov = buildOverlay();
  if (!S.ov) { return; }
  wire(S.ov);
  listen();
  window[GLOBAL_KEY] = publicApi();
  window.dispatchEvent(new CustomEvent("ww:search-ready", { detail: { version: API_VERSION } }));
  fromHash();
}

try {
  init();
} catch (error) {
  console.error("[wildwin-search] failed to start:", error);
}
})();
