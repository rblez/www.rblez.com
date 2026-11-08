/* rblez.com: secciones con GSAP, vistas en vivo y contribuciones de GitHub */
(function () {
  var RB = window.RB || {};
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Indicador de secciones ---------- */
  var secs = [].slice.call(document.querySelectorAll('.sec'));
  var links = [].slice.call(document.querySelectorAll('.ind a'));
  var cur = document.getElementById('cur'), pos = document.getElementById('pos');
  function setActive(i) {
    links.forEach(function (a, j) { if (i === j) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    if (cur && links[i]) cur.textContent = links[i].getAttribute('aria-label');
    if (pos) pos.textContent = ('0' + (i + 1)).slice(-2);
  }
  setActive(0);

  function initMotion() {
    var g = window.gsap, ST = window.ScrollTrigger;
    if (!g || !ST) return fallbackObserver();
    g.registerPlugin(ST);
    secs.forEach(function (s, i) {
      ST.create({ trigger: s, start: 'top 55%', end: 'bottom 55%', onToggle: function (self) { if (self.isActive) setActive(i); } });
      if (reduce) return;
      var items = s.querySelectorAll('.rv, .card');
      g.set(items, { autoAlpha: 0, y: 28 });
      ST.batch(items, {
        start: 'top 88%',
        onEnter: function (b) { g.to(b, { autoAlpha: 1, y: 0, duration: .8, ease: 'power3.out', stagger: .07, overwrite: true }); },
        onLeaveBack: function (b) { g.to(b, { autoAlpha: 0, y: 28, duration: .4, ease: 'power2.in', stagger: .03, overwrite: true }); }
      });
      var inn = s.querySelector('.in');
      g.fromTo(inn, { scale: .985 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: s, start: 'top bottom', end: 'top 30%', scrub: true } });
    });
    if (!reduce) {
      g.fromTo('.ind', { autoAlpha: 0, x: -10 }, { autoAlpha: 1, x: 0, duration: .8, delay: .2, ease: 'power3.out' });
    }
  }
  function fallbackObserver() {
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) setActive(secs.indexOf(e.target)); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    secs.forEach(function (s) { io.observe(s); });
  }

  /* ---------- Vistas en vivo según dispositivo ---------- */
  var devs = [].slice.call(document.querySelectorAll('.dev[data-src]'));
  function vw() { return window.matchMedia('(max-width: 640px)').matches ? { w: 390, h: 844 } : { w: 1280, h: 800 }; }
  function fit(dev) {
    var f = dev.querySelector('iframe'), v = vw();
    var r = dev.clientWidth / v.w;
    f.style.width = v.w + 'px';
    f.style.height = Math.max(v.h, dev.clientHeight / r) + 'px';
    f.style.transform = 'scale(' + r + ')';
  }
  function load(dev) {
    var f = dev.querySelector('iframe');
    if (f.getAttribute('src')) return;
    fit(dev);
    f.addEventListener('load', function () { dev.classList.add('ready'); });
    f.setAttribute('src', dev.dataset.src);
  }
  if ('IntersectionObserver' in window) {
    var lio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { load(e.target); lio.unobserve(e.target); } });
    }, { rootMargin: '300px 0px' });
    devs.forEach(function (d) { lio.observe(d); });
  } else devs.forEach(load);
  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { devs.forEach(function (d) { if (d.querySelector('iframe').getAttribute('src')) fit(d); }); }, 120);
  });

  /* ---------- Contribuciones de GitHub en vivo ---------- */
  var cal = document.getElementById('cal');
  function fmt(n) { return new Intl.NumberFormat(RB.loc).format(n); }
  function fmtDate(s) { return new Date(s + 'T12:00:00').toLocaleDateString(RB.loc, { day: 'numeric', month: 'short', year: 'numeric' }); }
  function draw(data) {
    var days = data.contributions || [];
    if (!days.length) throw new Error('vacío');
    var frag = document.createDocumentFragment();
    var first = new Date(days[0].date + 'T12:00:00').getDay();
    for (var p = 0; p < first; p++) { var e = document.createElement('i'); e.className = 'pad'; frag.appendChild(e); }
    var best = 0, streak = 0, total = 0;
    days.forEach(function (d) {
      var i = document.createElement('i');
      i.setAttribute('data-l', d.level);
      i.title = RB.cal.replace('{n}', fmt(d.count)).replace('{d}', fmtDate(d.date));
      frag.appendChild(i);
      if (d.count > best) best = d.count;
      total += d.count;
    });
    for (var k = days.length - 1; k >= 0; k--) {
      if (days[k].count > 0) streak++;
      else if (k === days.length - 1) continue; // hoy aún sin actividad no rompe la racha
      else break;
    }
    cal.innerHTML = '';
    cal.appendChild(frag);
    var tot = data.total && (data.total.lastYear != null ? data.total.lastYear : null);
    document.getElementById('gh-total').textContent = fmt(tot != null ? tot : total);
    document.getElementById('gh-today').textContent = fmt(days[days.length - 1].count);
    document.getElementById('gh-streak').textContent = fmt(streak);
    document.getElementById('gh-best').textContent = fmt(best);
    document.getElementById('gh-upd').textContent = RB.upd.replace('{t}', new Date().toLocaleTimeString(RB.loc, { hour: '2-digit', minute: '2-digit' }));
    var wrap = cal.parentNode; wrap.scrollLeft = wrap.scrollWidth;
    if (window.gsap && !reduce) window.gsap.from(cal.children, { autoAlpha: 0, scale: .4, duration: .4, ease: 'power2.out', stagger: { each: .0018, from: 'end' } });
  }
  function loadGh() {
    fetch('https://github-contributions-api.jogruber.de/v4/rblez?y=last', { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(draw)
      .catch(function () { document.getElementById('gh-upd').textContent = RB.err; });
  }
  if (cal) {
    loadGh();
    setInterval(function () { if (!document.hidden) loadGh(); }, 5 * 60 * 1000);
  }

  initMotion();
})();
