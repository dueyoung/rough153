/* 사이트 동작 코드 — 내용 수정은 data.js 에서 하세요. */
(function () {
  const $ = (s) => document.querySelector(s);

  // ----- 사이트 정보 채우기 -----
  document.documentElement.style.setProperty('--accent', SITE.accent);
  document.title = SITE.name + ' — Motion Portfolio';
  document.querySelectorAll('[data-site]').forEach((el) => { el.textContent = SITE[el.dataset.site] || ''; });
  document.querySelectorAll('[data-site-html]').forEach((el) => { el.innerHTML = SITE[el.dataset.siteHtml] || ''; });
  $('#year').textContent = new Date().getFullYear();
  $('#mail').href = 'mailto:' + SITE.email;
  $('#mail2').href = 'mailto:' + SITE.email;
  $('#mail2').textContent = SITE.email;
  $('#vimeoLink').href = SITE.vimeo;
  $('#instaLink').href = SITE.instagram;

  // ----- 필터 & 그리드 -----
  const cats = ['All', ...new Set(PROJECTS.map((p) => p.cat).filter(Boolean))];
  let filter = 'All';
  let shown = SITE.pageSize || 12;

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function renderFilters() {
    $('#filters').innerHTML = cats.length > 2
      ? cats.map((c) => `<button class="chip${c === filter ? ' on' : ''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('')
      : '';
  }

  function renderGrid() {
    const list = PROJECTS.filter((p) => filter === 'All' || p.cat === filter);
    $('#grid').innerHTML = list.slice(0, shown).map((p, i) => `
      <button class="thumb" data-idx="${PROJECTS.indexOf(p)}" style="animation-delay:${(i % 12) * 60}ms" aria-label="${esc(p.title)} 영상 보기">
        <div class="frame">
          ${p.thumb ? `<img src="${esc(p.thumb)}" alt="" loading="lazy">` : `<div class="noimg">NO THUMBNAIL</div>`}
          <div class="play"><svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg></div>
        </div>
        <div class="caption"><strong>${esc(p.title)}</strong><span>${esc([p.cat, p.year].filter(Boolean).join(' · '))}</span></div>
      </button>`).join('');
    $('#more').hidden = list.length <= shown;
  }

  $('#filters').addEventListener('click', (e) => {
    const b = e.target.closest('.chip');
    if (!b) return;
    filter = b.dataset.cat;
    shown = SITE.pageSize || 12;
    renderFilters();
    renderGrid();
  });

  $('#more').addEventListener('click', () => {
    shown += SITE.pageSize || 12;
    renderGrid();
  });

  // ----- Vimeo 플레이어 -----
  const dlg = $('#player');
  // 숫자 ID, 전체 주소, '링크가 있는 사람' 주소(vimeo.com/123456/abcdef 또는 ?h=abcdef) 모두 지원
  const parseVimeo = (v) => {
    const s = String(v);
    const id = s.match(/(\d{6,})/)?.[1] || '';
    const hash = s.match(/\d{6,}\/([0-9a-f]{6,})/i)?.[1] || s.match(/[?&]h=([0-9a-f]+)/i)?.[1] || '';
    return { id, hash };
  };

  $('#grid').addEventListener('click', (e) => {
    const t = e.target.closest('.thumb');
    if (!t) return;
    const p = PROJECTS[+t.dataset.idx];
    const { id, hash } = parseVimeo(p.vimeo);
    const h = hash ? `h=${hash}&` : '';
    $('#video').innerHTML = `<iframe src="https://player.vimeo.com/video/${id}?${h}autoplay=1&title=0&byline=0&portrait=0&dnt=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${esc(p.title)}"></iframe>`;
    $('#pTitle').textContent = p.title;
    $('#pMeta').textContent = [p.cat, p.year].filter(Boolean).join(' · ');
    $('#pLink').href = 'https://vimeo.com/' + id + (hash ? '/' + hash : '');
    dlg.showModal();
    document.body.style.overflow = 'hidden';
  });

  function closePlayer() { dlg.close(); }
  dlg.addEventListener('close', () => { $('#video').innerHTML = ''; document.body.style.overflow = ''; });
  $('#close').addEventListener('click', closePlayer);
  dlg.addEventListener('click', (e) => { if (e.target === dlg) closePlayer(); }); // 바깥 클릭 시 닫기

  renderFilters();
  renderGrid();
})();
