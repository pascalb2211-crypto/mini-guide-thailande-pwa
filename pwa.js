/* ===================== MINI-GUIDE EN APPLI : installation + hors-ligne =====================
   - Enregistre le service worker (copie des pages pour fonctionner sans internet).
   - Après la saisie du mot de passe : téléchargement automatique des pages du guide
     pour une lecture sans internet (une seule fois, en ligne).
   - Bandeau « Installer » (Android / iPhone) sur la première page.
   Le mot de passe, lui, reste géré par gate.js (inchangé).
============================================================================================ */
(function(){
  'use strict';
  var me = document.currentScript || document.querySelector('script[src*="pwa.js"]');
  var NAME = (me && me.getAttribute('data-name')) || 'Mini-guide';
  var SLUG = (me && me.getAttribute('data-slug')) || 'guide';
  var WANTS_BANNER = !!(me && me.getAttribute('data-banner'));
  var UA = navigator.userAgent || '';
  var isIOS = /iphone|ipad|ipod/i.test(UA) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid = /android/i.test(UA);
  var isMobile = isIOS || isAndroid;
  var isStandalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  var deferred = null;

  function store(k, v){
    try{
      if(v === undefined) return localStorage.getItem(k);
      if(v === null) localStorage.removeItem(k); else localStorage.setItem(k, v);
    }catch(e){ return null; }
  }

  var css = [
    '.tmpwa-banner{position:fixed;left:12px;right:12px;bottom:max(12px,env(safe-area-inset-bottom));z-index:9500;max-width:520px;margin:0 auto;background:#1a1d24;border:1px solid #d35400;border-radius:16px;padding:14px 16px;display:flex;gap:12px;align-items:center;box-shadow:0 10px 30px rgba(0,0,0,.55);color:#fff;font-family:"Segoe UI",Arial,sans-serif}',
    '.tmpwa-banner img{width:44px;height:44px;border-radius:10px;flex:none}',
    '.tmpwa-banner p{margin:0;flex:1;font-size:14px;line-height:1.35;color:#dcd6d0}',
    '.tmpwa-banner strong{display:block;color:#f0955a;font-size:15px}',
    '.tmpwa-go{background:linear-gradient(135deg,#d35400,#f0955a);color:#fff;border:0;border-radius:24px;padding:10px 16px;font-weight:700;font-size:14px;cursor:pointer;flex:none}',
    '.tmpwa-x{background:none;border:0;color:#aaa;font-size:20px;cursor:pointer;padding:4px 6px;flex:none}',
    '.tmpwa-sheet{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.7);display:flex;align-items:flex-end;justify-content:center;font-family:"Segoe UI",Arial,sans-serif}',
    '.tmpwa-box{background:#1a1d24;border:1px solid #333;border-radius:20px 20px 0 0;padding:24px 22px max(24px,env(safe-area-inset-bottom));max-width:520px;width:100%;color:#fff}',
    '.tmpwa-box h3{margin:0 0 12px;color:#f0955a;font-size:20px}',
    '.tmpwa-box ol{margin:0 0 16px;padding-left:20px;line-height:1.7;color:#dcd6d0}',
    '.tmpwa-box .tmpwa-go{width:100%;padding:12px 24px;font-size:15px}',
    '.tmpwa-chip{position:fixed;top:max(10px,env(safe-area-inset-top));left:50%;transform:translateX(-50%);z-index:100001;max-width:92%;background:#1a1d24;border:1px solid #d35400;color:#fff;border-radius:999px;padding:9px 16px;font:600 13px/1.3 "Segoe UI",Arial,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.5);text-align:center}',
    '.tmpwa-chip.ok{border-color:#2e7d4f}'
  ].join('');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---------- service worker ---------- */
  var swReady = null;
  if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
      navigator.serviceWorker.register('service-worker.js').catch(function(e){ console.warn('Service worker non enregistré', e); });
    });
    swReady = navigator.serviceWorker.ready;
  }

  /* ---------- installation ---------- */
  window.addEventListener('beforeinstallprompt', function(e){
    e.preventDefault(); deferred = e;
    if(WANTS_BANNER && !locked()) showBanner();
  });
  window.addEventListener('appinstalled', function(){
    deferred = null; var b = document.querySelector('.tmpwa-banner'); if(b) b.remove();
  });

  function sheet(title, steps){
    var wrap = document.createElement('div'); wrap.className = 'tmpwa-sheet';
    var box = document.createElement('div'); box.className = 'tmpwa-box';
    var h = document.createElement('h3'); h.textContent = title; box.appendChild(h);
    var ol = document.createElement('ol');
    steps.forEach(function(t){ var li = document.createElement('li'); li.textContent = t; ol.appendChild(li); });
    box.appendChild(ol);
    var c = document.createElement('button'); c.type = 'button'; c.className = 'tmpwa-go'; c.textContent = 'J’ai compris';
    c.addEventListener('click', function(){ wrap.remove(); });
    wrap.addEventListener('click', function(ev){ if(ev.target === wrap) wrap.remove(); });
    box.appendChild(c); wrap.appendChild(box); document.body.appendChild(wrap);
  }

  function install(){
    if(deferred){
      var d = deferred; deferred = null; d.prompt();
      d.userChoice.then(function(){ var b = document.querySelector('.tmpwa-banner'); if(b) b.remove(); });
      return;
    }
    if(isIOS){
      sheet('Installer le mini-guide sur votre iPhone', [
        'Ouvrez cette page dans Safari.',
        'Touchez l’icône Partager (le carré avec une flèche vers le haut).',
        'Choisissez « Sur l’écran d’accueil », puis touchez « Ajouter ».'
      ]);
    } else {
      sheet('Installer le mini-guide sur votre téléphone', [
        'Ouvrez cette page dans Chrome.',
        'Touchez le menu ⋮ en haut à droite.',
        'Choisissez « Installer l’application » (ou « Ajouter à l’écran d’accueil »).'
      ]);
    }
  }

  function showBanner(){
    if(isStandalone || !isMobile || document.querySelector('.tmpwa-banner')) return;
    var off = parseInt(store('tmpwa_banner_off_' + SLUG) || '0', 10);
    if(off && Date.now() - off < 14 * 24 * 3600 * 1000) return;
    var bar = document.createElement('div'); bar.className = 'tmpwa-banner';
    var img = document.createElement('img'); img.src = 'icons/icon-192.png'; img.alt = '';
    var p = document.createElement('p');
    var s = document.createElement('strong'); s.textContent = 'Installez le mini-guide';
    p.appendChild(s); p.appendChild(document.createTextNode('Utilisable sans internet, depuis votre écran d’accueil.'));
    var go = document.createElement('button'); go.type = 'button'; go.className = 'tmpwa-go'; go.textContent = 'Installer';
    go.addEventListener('click', install);
    var x = document.createElement('button'); x.type = 'button'; x.className = 'tmpwa-x'; x.setAttribute('aria-label', 'Fermer'); x.textContent = '✕';
    x.addEventListener('click', function(){ store('tmpwa_banner_off_' + SLUG, String(Date.now())); bar.remove(); });
    [img, p, go, x].forEach(function(n){ bar.appendChild(n); });
    document.body.appendChild(bar);
  }

  /* ---------- téléchargement hors-ligne (après le mot de passe) ---------- */
  var chip = null;
  function say(text, ok, ms){
    if(!chip){ chip = document.createElement('div'); chip.className = 'tmpwa-chip'; document.body.appendChild(chip); }
    chip.className = 'tmpwa-chip' + (ok ? ' ok' : ''); chip.textContent = text;
    if(ms){ var c = chip; setTimeout(function(){ if(chip === c){ c.remove(); chip = null; } }, ms); }
  }

  function ask(msg, onProgress){
    return swReady.then(function(reg){
      return new Promise(function(resolve, reject){
        var sw = reg.active; if(!sw){ reject(new Error('indisponible')); return; }
        var ch = new MessageChannel();
        ch.port1.onmessage = function(e){
          var m = e.data || {};
          if(m.phase === 'progress' && onProgress) onProgress(m);
          else if(m.phase === 'status' || m.phase === 'done') resolve(m);
          else if(m.phase === 'error') reject(new Error(m.message || 'erreur'));
        };
        sw.postMessage(msg, [ch.port2]);
      });
    });
  }

  var started = false;
  function offlineSetup(){
    if(started || !swReady || isNetworkOff()) return;
    started = true;
    ask({ type: 'STATUS' }).then(function(s){
      if(s.have >= s.total) { return; }
      say('📥 Téléchargement du guide pour le hors-ligne…');
      return ask({ type: 'DOWNLOAD_ALL' }, function(m){
        say('📥 Téléchargement du guide… ' + Math.round(100 * m.done / Math.max(1, m.total)) + ' %');
      }).then(function(r){
        if(r.failed){
          say('Téléchargement incomplet (' + r.failed + ' page(s)). Touchez ici pour réessayer.', false);
          chip.style.cursor = 'pointer'; chip.onclick = function(){ started = false; offlineSetup(); };
        } else {
          say('✓ Guide disponible hors-ligne', true, 4000);
        }
      });
    }).catch(function(){ started = false; if(chip){ chip.remove(); chip = null; } });
  }
  function isNetworkOff(){ return navigator.onLine === false; }

  /* ---------- déverrouillage (gate.js affiche un écran « Accès protégé ») ---------- */
  function locked(){
    var g = document.getElementById('pwGate');          /* guide en une seule page (écran #pwGate masqué par la classe « hidden ») */
    if(g) return !g.classList.contains('hidden');
    return !!document.querySelector('[class*="Gate"]');
  }
  var done = false;
  function onUnlocked(){
    if(done) return; done = true;
    if(WANTS_BANNER){ if(isIOS) showBanner(); else if(deferred) showBanner(); }
    offlineSetup();
  }
  function watch(){
    if(!locked()){ onUnlocked(); return; }
    var mo = new MutationObserver(function(){ if(!locked()){ mo.disconnect(); onUnlocked(); } });
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  }
  window.addEventListener('online', function(){ if(done) offlineSetup(); });
  if(document.body) watch(); else document.addEventListener('DOMContentLoaded', watch);
})();

/* ===================== BARRE DE BOUTONS EN BAS (uniquement dans l'appli installée) =====================
   Dans le navigateur, rien ne change. Une fois le guide installé, une barre fixe en bas de l'écran
   donne un accès direct : couverture, page précédente / suivante, liste des pages (ou sommaire).
========================================================================================================= */
(function(){
  'use strict';
  var me = document.querySelector('script[src*="pwa.js"]');
  var MODE = me && me.getAttribute('data-nav');                 /* "pages" = une page HTML par page ; "spa" = guide en une seule page */
  if(!MODE) return;
  var standalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  if(!standalone || window.top !== window.self) return;
  var TOTAL = parseInt(me.getAttribute('data-total') || '0', 10);
  var FIRST = parseInt(me.getAttribute('data-first') || '1', 10);   /* 0 si le guide a une couverture page0 */

  function ready(fn){ if(document.body) fn(); else document.addEventListener('DOMContentLoaded', fn); }
  function locked(){
    var g = document.getElementById('pwGate');
    if(g) return !g.classList.contains('hidden');
    return !!document.querySelector('[class*="Gate"]');
  }
  var css = '#tmTab{position:fixed;left:0;right:0;bottom:0;z-index:1500;display:flex;background:#0d1117f2;border-top:1px solid #ffffff1f;padding:6px 4px max(8px,env(safe-area-inset-bottom));backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);font-family:"Segoe UI",Arial,sans-serif}' +
    '#tmTab button{flex:1;min-width:0;border:0;background:none;color:#cfd6dd;display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 2px;font:600 10.5px/1.1 "Segoe UI",Arial,sans-serif;cursor:pointer;-webkit-tap-highlight-color:transparent}' +
    '#tmTab button b{font-size:21px;line-height:1;font-weight:400}#tmTab button:active{background:#ffffff14;border-radius:10px}' +
    '#tmTab button.on{color:#f0955a}#tmTab button[disabled]{opacity:.35}' +
    '#tmTab .mid b{font:800 15px/1 "Segoe UI",Arial,sans-serif;color:#fff;margin-top:3px}' +
    '#tmSheet{position:fixed;inset:0;z-index:1600;background:#000a;display:none;align-items:flex-end;justify-content:center}#tmSheet.open{display:flex}' +
    '#tmSheet .box{width:100%;max-width:560px;max-height:78vh;overflow:auto;background:#161a21;color:#fff;border-radius:20px 20px 0 0;padding:16px 16px max(18px,env(safe-area-inset-bottom));font-family:"Segoe UI",Arial,sans-serif}' +
    '#tmSheet h3{margin:0 0 12px;font-size:16px}#tmSheet .grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}' +
    '#tmSheet .grid a,#tmSheet .grid button,#tmSheet .list button{border:1px solid #ffffff2a;background:#ffffff0d;color:#fff;border-radius:12px;padding:12px 0;text-align:center;text-decoration:none;font:700 15px "Segoe UI",Arial,sans-serif;cursor:pointer}' +
    '#tmSheet .grid .cur{background:#d35400;border-color:#d35400}#tmSheet .list{display:grid;gap:8px}#tmSheet .list button{text-align:left;padding:14px 16px;font-size:15px}' +
    'body.tmHasTab{padding-bottom:calc(84px + env(safe-area-inset-bottom)) !important}body.tmHasTab .navbar{display:none !important}body.tmHasTab .zoomBtn{bottom:92px}';

  function el(tag, attrs, html){ var e = document.createElement(tag); for(var k in attrs||{}) e.setAttribute(k, attrs[k]); if(html != null) e.innerHTML = html; return e; }
  function btn(icon, label, fn, cls){ var b = el('button', { type: 'button', 'class': cls || '' }, '<b>' + icon + '</b>' + label); b.addEventListener('click', fn); return b; }

  function build(){
    if(document.getElementById('tmTab')) return;
    var st = el('style', {}, css); document.head.appendChild(st);
    var bar = el('div', { id: 'tmTab', role: 'navigation', 'aria-label': 'Navigation du guide' });
    var sheet = el('div', { id: 'tmSheet' }); var box = el('div', { 'class': 'box' }); sheet.appendChild(box); document.body.appendChild(sheet);
    sheet.addEventListener('click', function(e){ if(e.target === sheet) sheet.classList.remove('open'); });
    function openSheet(title, node){ box.innerHTML = ''; box.appendChild(el('h3', {}, title)); box.appendChild(node); sheet.classList.add('open'); }

    if(MODE === 'pages'){
      var m = location.pathname.match(/page(\d+)(\.html)?$/); var cur = m ? parseInt(m[1], 10) : FIRST;
      var last = TOTAL || cur;
      function url(n){ return 'page' + n + '.html'; }
      var prev = btn('◀', 'Précédent', function(){ if(cur > FIRST) location.href = url(cur - 1); });
      var next = btn('▶', 'Suivant', function(){ if(cur < last) location.href = url(cur + 1); });
      if(cur <= FIRST) prev.disabled = true; if(cur >= last) next.disabled = true;
      var home = btn('🏠', FIRST === 0 ? 'Couverture' : 'Début', function(){ location.href = url(FIRST); });
      var mid = btn('', 'Page', function(){}, 'mid'); mid.querySelector('b').textContent = (cur === 0 ? 'Couv.' : cur + ' / ' + last);
      var list = btn('☰', 'Pages', function(){
        var g = el('div', { 'class': 'grid' });
        for(var n = FIRST; n <= last; n++){ g.appendChild(el('a', { href: url(n), 'class': n === cur ? 'cur' : '' }, n === 0 ? '🏠' : String(n))); }
        openSheet('Aller à une page', g);
      });
      [home, prev, mid, next, list].forEach(function(b){ bar.appendChild(b); });
    } else {                                                      /* guide en une seule page (fonctions déjà présentes dans index.html) */
      function call(f){ try{ f(); }catch(e){} }
      bar.appendChild(btn('📕', 'Couverture', function(){ call(function(){ tmCoverShow(); }); }));
      bar.appendChild(btn('◀', 'Précédent', function(){ call(function(){ go(page - 1); }); }));
      bar.appendChild(btn('☷', 'Sommaire', function(){ call(function(){ show('summary'); }); }));
      bar.appendChild(btn('▶', 'Suivant', function(){ call(function(){ go(page + 1); }); }));
      bar.appendChild(btn('⋯', 'Outils', function(){
        var l = el('div', { 'class': 'list' });
        [['🔗 Liens utiles', 'links'], ['☑️ Ma checklist', 'checklist'], ['💱 Euro ↔ Baht', 'convert'], ['⏱️ Compte à rebours', 'countdown'], ['❤️ Mes favoris', 'favorites']].forEach(function(x){
          var b = el('button', { type: 'button' }, x[0]); b.addEventListener('click', function(){ sheet.classList.remove('open'); call(function(){ show(x[1]); }); }); l.appendChild(b); });
        var fav = el('button', { type: 'button' }, '♡ Ajouter cette page aux favoris'); fav.addEventListener('click', function(){ sheet.classList.remove('open'); call(function(){ toggleFavorite(); }); }); l.appendChild(fav);
        openSheet('Outils', l);
      }));
    }
    document.body.appendChild(bar); document.body.classList.add('tmHasTab');
  }
  function sync(){ var bar = document.getElementById('tmTab'); if(bar) bar.style.display = locked() ? 'none' : 'flex'; }
  ready(function(){
    build(); sync();
    new MutationObserver(sync).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  });
})();
