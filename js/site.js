/* rblez.com: secciones, aparición al hacer scroll y contribuciones de GitHub en vivo (sin librerías) */
(function () {
  var RB = window.RB || {};
  var IO = 'IntersectionObserver' in window;

  /* Indicador de secciones */
  var secs = [].slice.call(document.querySelectorAll('.sec'));
  var links = [].slice.call(document.querySelectorAll('.ind a'));
  var cur = document.getElementById('cur'), pos = document.getElementById('pos');
  function setActive(i) {
    links.forEach(function (a, j) { if (i === j) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    if (cur && links[i]) cur.textContent = links[i].getAttribute('aria-label');
    if (pos) pos.textContent = ('0' + (i + 1)).slice(-2);
  }
  setActive(0);
  if (IO) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) setActive(secs.indexOf(e.target)); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    secs.forEach(function (s) { so.observe(s); });
  }

  /* Aparición: una sola vez, con un pequeño escalonado */
  var items = [].slice.call(document.querySelectorAll('.rv, .card'));
  if (IO) {
    var ro = new IntersectionObserver(function (es) {
      var k = 0;
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.style.setProperty('--d', (k++ * 0.06) + 's');
        e.target.classList.add('on');
        ro.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    items.forEach(function (el) { ro.observe(el); });
  } else items.forEach(function (el) { el.classList.add('on'); });

  /* Contribuciones de GitHub en vivo */
  var cal = document.getElementById('cal');
  if (!cal) return;
  function fmt(n) { return new Intl.NumberFormat(RB.loc).format(n); }
  function fmtDate(s) { return new Date(s + 'T12:00:00').toLocaleDateString(RB.loc, { day: 'numeric', month: 'short', year: 'numeric' }); }
  function set(id, v) { var el = document.getElementById(id); if (el) el.textContent = v; }
  function draw(data) {
    var days = data.contributions || [];
    if (!days.length) throw new Error('vacío');
    var html = '', best = 0, total = 0, streak = 0;
    for (var p = new Date(days[0].date + 'T12:00:00').getDay(); p > 0; p--) html += '<i class="pad"></i>';
    days.forEach(function (d) {
      html += '<i data-l="' + d.level + '" title="' + RB.cal.replace('{n}', fmt(d.count)).replace('{d}', fmtDate(d.date)) + '"></i>';
      if (d.count > best) best = d.count;
      total += d.count;
    });
    for (var k = days.length - 1; k >= 0; k--) {
      if (days[k].count > 0) streak++;
      else if (k === days.length - 1) continue;
      else break;
    }
    cal.innerHTML = html;
    var tot = data.total && data.total.lastYear != null ? data.total.lastYear : total;
    set('gh-total', fmt(tot));
    set('gh-today', fmt(days[days.length - 1].count));
    set('gh-streak', fmt(streak));
    set('gh-best', fmt(best));
    set('gh-upd', RB.upd.replace('{t}', new Date().toLocaleTimeString(RB.loc, { hour: '2-digit', minute: '2-digit' })));
    cal.parentNode.scrollLeft = cal.parentNode.scrollWidth;
  }
  function load() {
    fetch('https://github-contributions-api.jogruber.de/v4/rblez?y=last', { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(draw)
      .catch(function () { set('gh-upd', RB.err); });
  }
  /* Se pide solo cuando la sección está cerca, y luego cada 5 min si la pestaña está visible */
  var started = false;
  function start() { if (started) return; started = true; load(); setInterval(function () { if (!document.hidden) load(); }, 300000); }
  if (IO) {
    var go = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { start(); go.disconnect(); } }, { rootMargin: '600px 0px' });
    go.observe(cal);
  } else start();
})();
