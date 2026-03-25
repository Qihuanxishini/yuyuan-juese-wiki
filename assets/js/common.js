(function () {
  // ── 工具函数 ────────────────────────────────────────────

  function rootPath() {
    var meta = document.querySelector('meta[name="wiki-depth"]');
    var depth = meta ? parseInt(meta.getAttribute('content'), 10) : 0;
    if (depth === 0) return '.';
    return '../'.repeat(depth).slice(0, -1);
  }

  var ROOT = rootPath();
  var FALLBACK = ROOT + '/assets/img/unknown.png';

  function imgSrc(icon) {
    if (!icon) return FALLBACK;
    return ROOT + '/assets/img/' + icon;
  }

  function skinImgSrc(icon) {
    if (!icon) return FALLBACK;
    return ROOT + '/assets/img/skins/' + icon;
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function onerr() {
    return 'onerror="this.onerror=null;this.src=\'' + FALLBACK + '\'"';
  }

  // ── 导航栏 ────────────────────────────────────────────

  var NAV_LINKS = [
    { label: '道具', type: 'items',     href: ROOT + '/items/index.html'     },
    { label: '食物', type: 'food',      href: ROOT + '/food/index.html'      },
    { label: '植物', type: 'plants',    href: ROOT + '/plants/index.html'    },
    { label: '其他', type: 'materials', href: ROOT + '/materials/index.html' }
  ];

  function renderNav(activeType) {
    var nav = document.getElementById('main-nav');
    if (!nav) return;

    var linksHtml = '';
    for (var i = 0; i < NAV_LINKS.length; i++) {
      var link = NAV_LINKS[i];
      var cls = link.type === activeType ? ' class="active"' : '';
      linksHtml += '<a' + cls + ' href="' + link.href + '">' + esc(link.label) + '</a>';
    }

    nav.innerHTML =
      '<div class="nav-inner">' +
        '<a class="nav-brand" href="' + ROOT + '/index.html">花仙子 Wiki</a>' +
        '<div class="nav-links">' + linksHtml + '</div>' +
      '</div>';
  }

  // ── 列表页 ────────────────────────────────────────────

  function initListPage(data, type) {
    var LABEL = { items: '道具', food: '食物', plants: '植物', materials: '其他' };
    renderNav(type);

    var container = document.getElementById('list-container');
    if (!container) return;

    container.innerHTML =
      '<div class="list-header">' +
        '<h2>' + esc(LABEL[type] || '') + '</h2>' +
        '<input class="search-box" id="search-input" type="text" placeholder="搜索名称或说明\u2026">' +
      '</div>' +
      '<div class="item-list" id="item-list"></div>';

    function renderList(keyword) {
      var itemList = document.getElementById('item-list');
      var kw = keyword ? keyword.toLowerCase() : '';

      var filtered = [];
      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if (!kw ||
            (item.name && item.name.toLowerCase().indexOf(kw) !== -1) ||
            (item.desc && item.desc.toLowerCase().indexOf(kw) !== -1)) {
          filtered.push(item);
        }
      }

      if (filtered.length === 0) {
        itemList.innerHTML = '<div class="list-empty">没有找到匹配内容</div>';
        return;
      }

      var html = '';
      for (var j = 0; j < filtered.length; j++) {
        var fi = filtered[j];
        var encodedId = encodeURIComponent(fi.id);
        var skinTag = '';
        html +=
          '<div class="item-row" onclick="location.href=\'detail.html?id=' + encodedId + '\'">' +
            '<img class="row-icon" src="' + imgSrc(fi.icon) + '" alt="" ' + onerr() + '>' +
            '<span class="row-name">' + esc(fi.name || '') + '</span>' +
            '<span class="row-desc">' + esc(fi.desc || '') + '</span>' +
            skinTag +
            '<span class="row-arrow">\u203a</span>' +
          '</div>';
      }
      itemList.innerHTML = html;
    }

    renderList('');

    var searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        renderList(this.value.trim());
      });
    }
  }

  // ── 详情页 ────────────────────────────────────────────

  function initDetailPage(data, type) {
    renderNav(type);

    var container = document.getElementById('detail-container');
    if (!container) return;

    function renderError() {
      container.innerHTML =
        '<div class="detail-error">' +
          '<p>内容不存在或 ID 无效。</p>' +
          '<a href="index.html">\u2190 返回列表</a>' +
        '</div>';
    }

    var id = getParam('id');
    if (id === null) { renderError(); return; }

    var item = null;
    for (var i = 0; i < data.length; i++) {
      if (String(data[i].id) === String(id)) { item = data[i]; break; }
    }
    if (!item) { renderError(); return; }

    function section(label, value) {
      if (value !== 0 && !value) return '';
      return (
        '<div class="detail-section">' +
          '<div class="section-label">' + esc(label) + '</div>' +
          '<div class="section-value">' + esc(value) + '</div>' +
        '</div>'
      );
    }

    var html =
      '<a class="detail-back" href="index.html">\u2190 返回列表</a>' +
      '<div class="detail-header">' +
        '<img class="detail-icon" src="' + imgSrc(item.icon) + '" ' + onerr() + '>' +
        '<div class="detail-title">' +
          '<h1>' + esc(item.name || '') + '</h1>' +
          '<span class="detail-category">' + esc(item.category || '') + '</span>' +
        '</div>' +
      '</div>';

    html += section('简介', item.desc);
    html += section('获取方式', item.obtain);
    html += section('用途', item.usage);
    html += section('配方', item.recipe);

    if (type === 'food') {
      html +=
        '<div class="detail-section">' +
          '<div class="section-label">属性</div>' +
          '<div class="stats-grid">' +
            '<div class="stat-item"><span class="stat-label">饥饿</span><span class="stat-value">' + esc(item.hunger) + '</span></div>' +
            '<div class="stat-item"><span class="stat-label">生命</span><span class="stat-value">' + esc(item.health) + '</span></div>' +
            '<div class="stat-item"><span class="stat-label">精神</span><span class="stat-value">' + esc(item.sanity) + '</span></div>' +
            '<div class="stat-item"><span class="stat-label">腐烂</span><span class="stat-value">' + esc(item.perish) + '</span></div>' +
          '</div>' +
        '</div>';
    }

    if (type === 'plants') {
      html += section('生长时间', item.grow_time);
      html += section('掉落物', item.drop);
    }

    if (item.skins && item.skins.length > 0) {
      var skinsHtml = '';
      for (var j = 0; j < item.skins.length; j++) {
        var skin = item.skins[j];
        var paidTag = skin.paid
          ? '<span class="skin-tag skin-tag-paid">付费</span>'
          : '<span class="skin-tag skin-tag-free">免</span>';
        skinsHtml +=
          '<div class="skin-item">' +
            '<img class="skin-icon" src="' + skinImgSrc(skin.icon) + '" ' + onerr() + '>' +
            '<div class="skin-info">' +
              '<div class="skin-name">' + esc(skin.name || '') + paidTag + '</div>' +
            '</div>' +
          '</div>';
      }
      html +=
        '<div class="detail-section">' +
          '<div class="section-label">皮肤</div>' +
          '<div class="skin-list">' + skinsHtml + '</div>' +
        '</div>';
    }

    container.innerHTML = html;
  }

  // ── 对外暴露 ──────────────────────────────────────────

  window.initListPage   = initListPage;
  window.initDetailPage = initDetailPage;

  // 兜底：首页无 initListPage/initDetailPage 调用，直接触发导航渲染
  renderNav('');

}());
