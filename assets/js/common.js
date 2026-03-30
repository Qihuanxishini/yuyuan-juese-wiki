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

  function setPageClasses(pageType, type) {
    if (!document.body) return;
    if (pageType) document.body.classList.add(pageType);
    if (type) document.body.classList.add('type-' + type);
  }

  function badge(text, cls) {
    if (!text) return '';
    return '<span class="ui-badge ' + (cls || '') + '">' + esc(text) + '</span>';
  }

  function dataMeta(type) {
    var META = {
      items: {
        label: '道具',
        eyebrow: 'Items Archive',
        subtitle: '绾缘相关装备、背包、功能物件与专属配方部件。',
        search: '搜索道具名称、用途或说明…',
        theme: 'items'
      },
      food: {
        label: '食物',
        eyebrow: 'Cuisine Compendium',
        subtitle: '查看绾缘偏好的料理、专属甜点与数值信息。',
        search: '搜索食物名称、效果或说明…',
        theme: 'food'
      },
      plants: {
        label: '植物',
        eyebrow: 'Garden Almanac',
        subtitle: '整理植物成长信息、掉落物与花园相关资料。',
        search: '搜索植物名称、特性或说明…',
        theme: 'plants'
      },
      materials: {
        label: '其他',
        eyebrow: 'Field Notes',
        subtitle: '汇总材料、掉落物与其他补充图鉴条目。',
        search: '搜索名称、来源或说明…',
        theme: 'materials'
      }
    };
    return META[type] || {
      label: '',
      eyebrow: 'Archive',
      subtitle: '',
      search: '搜索名称或说明…',
      theme: 'items'
    };
  }

  // ── 导航栏 ────────────────────────────────────────────

  var NAV_LINKS = [
    { label: '道具', type: 'items', href: ROOT + '/items/index.html' },
    { label: '食物', type: 'food', href: ROOT + '/food/index.html' },
    { label: '植物', type: 'plants', href: ROOT + '/plants/index.html' },
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
        '<a class="nav-brand" href="' + ROOT + '/index.html">' +
          '<span class="nav-brand-mark">✦</span>' +
          '<span class="nav-brand-copy">' +
            '<span class="nav-brand-title">花仙子 Wiki</span>' +
            '<span class="nav-brand-subtitle">Yuyuan Character Archive</span>' +
          '</span>' +
        '</a>' +
        '<div class="nav-links">' + linksHtml + '</div>' +
      '</div>';
  }

  // ── 列表页 ────────────────────────────────────────────

  function initListPage(data, type) {
    setPageClasses('page-list', type);
    renderNav(type);

    var container = document.getElementById('list-container');
    if (!container) return;

    var meta = dataMeta(type);

    container.innerHTML =
      '<section class="page-shell page-shell-list">' +
        '<div class="page-banner page-banner-' + esc(meta.theme) + '">' +
          '<div class="page-banner-copy">' +
            '<div class="page-eyebrow">' + esc(meta.eyebrow) + '</div>' +
            '<h1 class="page-title">' + esc(meta.label) + '</h1>' +
            '<p class="page-subtitle">' + esc(meta.subtitle) + '</p>' +
          '</div>' +
          '<label class="search-panel">' +
            '<span class="search-label">搜索图鉴</span>' +
            '<input class="search-box" id="search-input" type="text" placeholder="' + esc(meta.search) + '">' +
            '<span class="search-result-count" id="result-count"></span>' +
          '</label>' +
        '</div>' +
        '<div class="item-grid" id="item-list"></div>' +
      '</section>';

    function renderList(keyword) {
      var itemList = document.getElementById('item-list');
      var resultCount = document.getElementById('result-count');
      var kw = keyword ? keyword.toLowerCase() : '';
      var filtered = [];

      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var name = item.name ? String(item.name).toLowerCase() : '';
        var desc = item.desc ? String(item.desc).toLowerCase() : '';
        var obtain = item.obtain ? String(item.obtain).toLowerCase() : '';
        var usage = item.usage ? String(item.usage).toLowerCase() : '';
        if (!kw || name.indexOf(kw) !== -1 || desc.indexOf(kw) !== -1 || obtain.indexOf(kw) !== -1 || usage.indexOf(kw) !== -1) {
          filtered.push(item);
        }
      }

      if (resultCount) {
        resultCount.textContent = kw ? ('找到 ' + filtered.length + ' 项结果') : ('共 ' + filtered.length + ' 项内容');
      }

      if (filtered.length === 0) {
        itemList.innerHTML =
          '<div class="list-empty">' +
            '<strong>没有找到匹配内容</strong>' +
            '<p>试试更短的关键词，或者切换到别的分类继续查看。</p>' +
          '</div>';
        return;
      }

      var html = '';
      for (var j = 0; j < filtered.length; j++) {
        var item = filtered[j];
        var encodedId = encodeURIComponent(item.id);
        var badges = '';

        if (item.category) {
          badges += badge(item.category, 'ui-badge-soft');
        }

        if (item.skins && item.skins.length > 0) {
          badges += badge('皮肤 ' + item.skins.length, 'ui-badge-accent');
        }

        if (!badges) {
          badges = badge(meta.label, 'ui-badge');
        }

        html +=
          '<a class="item-card" href="detail.html?id=' + encodedId + '">' +
            '<div class="item-card-media">' +
              '<img class="row-icon" src="' + imgSrc(item.icon) + '" alt="" ' + onerr() + '>' +
            '</div>' +
            '<div class="item-card-body">' +
              '<div class="item-card-top">' +
                '<div class="row-name">' + esc(item.name || '') + '</div>' +
                '<span class="row-arrow">查看</span>' +
              '</div>' +
              '<p class="row-desc">' + esc(item.desc || '暂无描述。') + '</p>' +
              '<div class="item-meta">' + badges + '</div>' +
            '</div>' +
          '</a>';
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

  function detailCard(label, value) {
    if (value !== 0 && !value) return '';
    return (
      '<div class="detail-card">' +
        '<div class="section-label">' + esc(label) + '</div>' +
        '<div class="section-value">' + esc(value) + '</div>' +
      '</div>'
    );
  }

  function initDetailPage(data, type) {
    setPageClasses('page-detail', type);
    renderNav(type);

    var container = document.getElementById('detail-container');
    if (!container) return;

    var meta = dataMeta(type);

    function renderError() {
      container.innerHTML =
        '<section class="page-shell page-shell-detail">' +
          '<div class="detail-error">' +
            '<strong>内容不存在或 ID 无效</strong>' +
            '<p>请返回上一页重新选择，或确认链接参数是否正确。</p>' +
            '<a href="index.html">← 返回列表</a>' +
          '</div>' +
        '</section>';
    }

    var id = getParam('id');
    if (id === null) {
      renderError();
      return;
    }

    var item = null;
    for (var i = 0; i < data.length; i++) {
      if (String(data[i].id) === String(id)) {
        item = data[i];
        break;
      }
    }

    if (!item) {
      renderError();
      return;
    }

    var detailCards = '';
    detailCards += detailCard('获取方式', item.obtain);
    detailCards += detailCard('用途', item.usage);
    detailCards += detailCard('配方', item.recipe);

    if (type === 'plants') {
      detailCards += detailCard('生长时间', item.grow_time);
      detailCards += detailCard('掉落物', item.drop);
    }

    var html =
      '<section class="page-shell page-shell-detail">' +
        '<div class="detail-back-wrap">' +
          '<a class="detail-back" href="index.html">← 返回' + esc(meta.label) + '</a>' +
        '</div>' +
        '<div class="detail-header">' +
          '<div class="detail-icon-wrap">' +
            '<img class="detail-icon" src="' + imgSrc(item.icon) + '" alt="" ' + onerr() + '>' +
          '</div>' +
          '<div class="detail-title">' +
            '<div class="page-eyebrow">' + esc(meta.eyebrow) + '</div>' +
            '<h1>' + esc(item.name || '') + '</h1>' +
            '<div class="detail-meta">' +
              '<span class="detail-category">' + esc(item.category || meta.label) + '</span>' +
              badge(meta.label, 'ui-badge-soft') +
            '</div>' +
            '<p class="detail-summary">' + esc(item.desc || '暂无描述。') + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="detail-content">';

    if (detailCards) {
      html += '<div class="detail-grid">' + detailCards + '</div>';
    }

    if (type === 'food') {
      html +=
        '<section class="detail-section-card">' +
          '<div class="section-label">属性</div>' +
          '<div class="stats-grid">' +
            '<div class="stat-item"><span class="stat-label">饥饿</span><span class="stat-value">' + esc(item.hunger) + '</span></div>' +
            '<div class="stat-item"><span class="stat-label">生命</span><span class="stat-value">' + esc(item.health) + '</span></div>' +
            '<div class="stat-item"><span class="stat-label">精神</span><span class="stat-value">' + esc(item.sanity) + '</span></div>' +
            '<div class="stat-item"><span class="stat-label">腐烂</span><span class="stat-value">' + esc(item.perish) + '</span></div>' +
          '</div>' +
        '</section>';
    }

    if (item.skins && item.skins.length > 0) {
      var skinsHtml = '';
      for (var j = 0; j < item.skins.length; j++) {
        var skin = item.skins[j];
        var paidTag = skin.paid
          ? '<span class="skin-tag skin-tag-paid">付费</span>'
          : '<span class="skin-tag skin-tag-free">免费</span>';

        skinsHtml +=
          '<div class="skin-item">' +
            '<div class="skin-icon-wrap">' +
              '<img class="skin-icon" src="' + skinImgSrc(skin.icon) + '" alt="" ' + onerr() + '>' +
            '</div>' +
            '<div class="skin-info">' +
              '<div class="skin-name-row">' +
                '<div class="skin-name">' + esc(skin.name || '') + '</div>' +
                paidTag +
              '</div>' +
              '<div class="skin-desc">' + esc(skin.desc || '皮肤外观展示。') + '</div>' +
            '</div>' +
          '</div>';
      }

      html +=
        '<section class="detail-section-card">' +
          '<div class="section-label">皮肤</div>' +
          '<div class="skin-list">' + skinsHtml + '</div>' +
        '</section>';
    }

    html +=
        '</div>' +
      '</section>';

    container.innerHTML = html;
  }

  // ── 对外暴露 ──────────────────────────────────────────

  window.initListPage = initListPage;
  window.initDetailPage = initDetailPage;

  // 兜底：首页无 initListPage/initDetailPage 调用，直接触发导航渲染
  renderNav('');
}());