(function () {
  // ── 工具函数 ────────────────────────────────────────────

  function rootPath() {
    var meta = document.querySelector('meta[name="wiki-depth"]');
    var depth = meta ? parseInt(meta.getAttribute("content"), 10) : 0;
    if (depth === 0) return ".";
    return "../".repeat(depth).slice(0, -1);
  }

  var ROOT = rootPath();
  var FALLBACK = ROOT + "/assets/img/unknown.png";

  function imgSrc(icon) {
    if (!icon) return FALLBACK;
    return ROOT + "/assets/img/" + icon;
  }

  function skinImgSrc(icon) {
    if (!icon) return FALLBACK;
    return ROOT + "/assets/img/skins/" + icon;
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function onerr() {
    return "onerror=\"this.onerror=null;this.src='" + FALLBACK + "'\"";
  }

  function setPageClasses(pageType, type) {
    if (!document.body) return;
    if (pageType) document.body.classList.add(pageType);
    if (type) document.body.classList.add("type-" + type);
  }

  function badge(text, cls) {
    if (!text) return "";
    return (
      '<span class="ui-badge ' + (cls || "") + '">' + esc(text) + "</span>"
    );
  }

  function dataMeta(type) {
    var META = {
      items: {
        label: "道具",
        eyebrow: "Items Archive",
        subtitle: "绾缘相关装备、背包、功能物件与专属配方部件。",
        search: "搜索道具名称、用途或说明…",
        theme: "items",
      },
      food: {
        label: "食物",
        eyebrow: "Cuisine Compendium",
        subtitle: "查看绾缘偏好的料理、专属甜点与数值信息。",
        search: "搜索食物名称、效果或说明…",
        theme: "food",
      },
      plants: {
        label: "植物",
        eyebrow: "Garden Almanac",
        subtitle: "整理植物成长信息、掉落物与花园相关资料。",
        search: "搜索植物名称、特性或说明…",
        theme: "plants",
      },
      materials: {
        label: "其他",
        eyebrow: "Field Notes",
        subtitle: "汇总材料、掉落物与其他补充图鉴条目。",
        search: "搜索名称、来源或说明…",
        theme: "materials",
      },
    };
    return (
      META[type] || {
        label: "",
        eyebrow: "Archive",
        subtitle: "",
        search: "搜索名称或说明…",
        theme: "items",
      }
    );
  }

  // ── 导航栏 ────────────────────────────────────────────

  var NAV_LINKS = [
    { label: "道具", type: "items", href: ROOT + "/items/index.html" },
    { label: "食物", type: "food", href: ROOT + "/food/index.html" },
    { label: "植物", type: "plants", href: ROOT + "/plants/index.html" },
    { label: "岛屿", type: "islands", href: ROOT + "/islands/index.html" },
    { label: "其他", type: "materials", href: ROOT + "/materials/index.html" },
  ];

  function renderNav(activeType) {
    var nav = document.getElementById("main-nav");
    if (!nav) return;

    var linksHtml = "";
    for (var i = 0; i < NAV_LINKS.length; i++) {
      var link = NAV_LINKS[i];
      var cls = link.type === activeType ? ' class="active"' : "";
      linksHtml +=
        "<a" + cls + ' href="' + link.href + '">' + esc(link.label) + "</a>";
    }

    nav.innerHTML =
      '<div class="nav-inner">' +
      '<a class="nav-brand" href="' +
      ROOT +
      '/index.html">' +
      '<span class="nav-brand-mark">✦</span>' +
      '<span class="nav-brand-copy">' +
      '<span class="nav-brand-title">花仙子 Wiki</span>' +
      '<span class="nav-brand-subtitle">Yuyuan Character Archive</span>' +
      "</span>" +
      "</a>" +
      '<div class="nav-links">' +
      linksHtml +
      "</div>" +
      "</div>";
  }

  // ── 鼠标梦幻特效 ───────────────────────────────────────

  function initCursorTrail() {
    if (!document.body) return;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
      return;

    var layer = document.createElement("div");
    layer.className = "cursor-trail-layer";
    document.body.appendChild(layer);

    var symbols = ["✦", "❄", "✧"];
    var lastTime = 0;
    var lastX = 0;
    var lastY = 0;
    var minDistance = 18;
    var interval = 36;
    var maxParticles = 22;

    // -- [喵喵喵]: 轻量鼠标梦幻特效，限制粒子频率和数量避免影响站点性能 (2026-03-30)
    document.addEventListener(
      "pointermove",
      function (event) {
        var now = Date.now();
        var dx = event.clientX - lastX;
        var dy = event.clientY - lastY;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (now - lastTime < interval || distance < minDistance) return;

        lastTime = now;
        lastX = event.clientX;
        lastY = event.clientY;

        var particle = document.createElement("span");
        var size = 12 + Math.random() * 10;
        var driftX = -20 + Math.random() * 40;
        var driftY = -26 - Math.random() * 22;
        particle.className = "cursor-trail-particle";
        particle.textContent =
          symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = event.clientX + "px";
        particle.style.top = event.clientY + "px";
        particle.style.fontSize = size + "px";
        particle.style.setProperty("--drift-x", driftX + "px");
        particle.style.setProperty("--drift-y", driftY + "px");
        particle.style.setProperty(
          "--particle-rotate",
          -18 + Math.random() * 36 + "deg"
        );
        particle.style.animationDuration = 0.85 + Math.random() * 0.45 + "s";

        if (particle.textContent === "❄") {
          particle.classList.add("particle-snow");
        } else if (particle.textContent === "✧") {
          particle.classList.add("particle-soft");
        }

        layer.appendChild(particle);
        if (layer.childElementCount > maxParticles) {
          layer.removeChild(layer.firstElementChild);
        }

        window.setTimeout(function () {
          if (particle.parentNode) particle.parentNode.removeChild(particle);
        }, 1500);
      },
      { passive: true }
    );
  }

  // ── 页面氛围飘落特效 ───────────────────────────────────

  function initAmbientFall() {
    if (!document.body) return;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    var petalPalettes = [
      {
        a: "rgba(255, 105, 139, 0.96)",
        b: "rgba(255, 198, 103, 0.72)",
        c: "rgba(255, 238, 201, 0.82)",
        glow: "rgba(255, 105, 139, 0.3)",
      },
      {
        a: "rgba(255, 140, 188, 0.94)",
        b: "rgba(187, 134, 255, 0.68)",
        c: "rgba(255, 218, 235, 0.82)",
        glow: "rgba(187, 134, 255, 0.28)",
      },
      {
        a: "rgba(255, 180, 86, 0.94)",
        b: "rgba(255, 118, 91, 0.72)",
        c: "rgba(255, 243, 191, 0.86)",
        glow: "rgba(255, 180, 86, 0.3)",
      },
      {
        a: "rgba(255, 118, 173, 0.95)",
        b: "rgba(255, 183, 214, 0.76)",
        c: "rgba(255, 245, 248, 0.88)",
        glow: "rgba(255, 118, 173, 0.3)",
      },
      {
        a: "rgba(242, 91, 113, 0.92)",
        b: "rgba(255, 219, 143, 0.78)",
        c: "rgba(255, 249, 227, 0.82)",
        glow: "rgba(242, 91, 113, 0.28)",
      },
    ];
    var leafPalettes = [
      {
        a: "rgba(132, 198, 118, 0.86)",
        b: "rgba(62, 137, 92, 0.66)",
        c: "rgba(223, 255, 210, 0.72)",
        glow: "rgba(89, 160, 97, 0.22)",
      },
      {
        a: "rgba(166, 208, 107, 0.84)",
        b: "rgba(82, 143, 94, 0.62)",
        c: "rgba(244, 255, 211, 0.72)",
        glow: "rgba(166, 208, 107, 0.22)",
      },
    ];
    var snowPalettes = [
      {
        a: "rgba(248, 253, 255, 0.98)",
        b: "rgba(191, 232, 255, 0.86)",
        c: "rgba(255, 255, 255, 0.9)",
        glow: "rgba(142, 205, 244, 0.38)",
      },
      {
        a: "rgba(232, 246, 255, 0.96)",
        b: "rgba(255, 255, 255, 0.9)",
        c: "rgba(188, 225, 255, 0.8)",
        glow: "rgba(188, 225, 255, 0.34)",
      },
    ];
    var moonPalettes = [
      {
        a: "rgba(255, 238, 186, 0.96)",
        b: "rgba(190, 211, 255, 0.72)",
        c: "rgba(255, 255, 255, 0.86)",
        glow: "rgba(241, 189, 98, 0.34)",
      },
      {
        a: "rgba(226, 216, 255, 0.92)",
        b: "rgba(255, 226, 166, 0.76)",
        c: "rgba(255, 255, 255, 0.88)",
        glow: "rgba(185, 161, 223, 0.3)",
      },
    ];

    var themes = [
      {
        name: "peach",
        className: "ambient-theme-peach",
        count: 52,
        shapes: [
          "petal-a",
          "petal-b",
          "petal-c",
          "petal-d",
          "petal-e",
          "petal-long",
          "petal-round",
        ],
      },
      {
        name: "flower",
        className: "ambient-theme-flower",
        count: 64,
        shapes: [
          "petal-a",
          "petal-b",
          "petal-c",
          "petal-d",
          "petal-e",
          "petal-long",
          "petal-round",
          "blossom",
          "leaf",
        ],
      },
      {
        name: "snow",
        className: "ambient-theme-snow",
        count: 50,
        shapes: ["snow", "snow", "snow", "dot"],
        snowSymbols: ["❄", "✻", "✧"],
      },
      {
        name: "moon",
        className: "ambient-theme-moon",
        count: 40,
        shapes: ["star", "dot", "petal-b", "petal-e", "blossom"],
        starSymbols: ["✦", "✧", "✶"],
      },
    ];

    function randomFrom(list) {
      return list[Math.floor(Math.random() * list.length)];
    }

    function isPetal(shape) {
      return shape.indexOf("petal") === 0 || shape === "blossom";
    }

    function getPalette(shape, theme) {
      if (shape === "leaf") return randomFrom(leafPalettes);
      if (shape === "snow") return randomFrom(snowPalettes);
      if (shape === "star" || shape === "dot" || theme.name === "moon") {
        return randomFrom(moonPalettes);
      }
      return randomFrom(petalPalettes);
    }

    // -- [喵喵喵]: 为首页花瓣增加远中近层级和多段风摆参数，让飘落更自然 (2026-05-01)
    function getDepth() {
      var roll = Math.random();
      if (roll < 0.46) {
        return {
          name: "far",
          size: 0.66,
          duration: 1.32,
          opacity: 0.66,
          blur: 0.7,
          drift: 0.74,
          scaleStart: 0.58,
          scaleEnd: 0.74,
        };
      }
      if (roll < 0.88) {
        return {
          name: "mid",
          size: 0.92,
          duration: 1,
          opacity: 0.88,
          blur: 0.16,
          drift: 1,
          scaleStart: 0.78,
          scaleEnd: 0.88,
        };
      }
      return {
        name: "near",
        size: 1.18,
        duration: 0.82,
        opacity: 1,
        blur: 0,
        drift: 1.24,
        scaleStart: 0.96,
        scaleEnd: 1.04,
      };
    }

    function getSize(shape, depth) {
      var base;
      if (shape === "snow") base = 18 + Math.random() * 16;
      else if (shape === "star" || shape === "dot") base = 13 + Math.random() * 13;
      else if (shape === "leaf") base = 13 + Math.random() * 16;
      else base = 16 + Math.random() * 22;
      return base * depth.size;
    }

    function getTheme() {
      if (document.body.classList.contains("page-home")) {
        return Math.random() < 0.66 ? themes[0] : themes[1];
      }
      return randomFrom(themes);
    }

    function getCount(theme) {
      var count = theme.name === "flower" ? 54 : theme.count;
      if (window.innerWidth < 560) return Math.round(count * 0.52);
      if (window.innerWidth < 820) return Math.round(count * 0.66);
      if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
        return Math.round(count * 0.72);
      }
      return count;
    }

    function randomSigned(max) {
      return -max + Math.random() * max * 2;
    }

    function randomAngle(max) {
      return randomSigned(max) + "deg";
    }

    var theme = getTheme();
    var layer = document.createElement("div");
    layer.className = "ambient-fall-layer " + theme.className;
    layer.setAttribute("aria-hidden", "true");
    document.body.setAttribute("data-fall-theme", theme.name);

    for (var i = 0, count = getCount(theme); i < count; i++) {
      var shape = randomFrom(theme.shapes);
      var piece = document.createElement("span");
      var depth = getDepth();
      var duration = (10 + Math.random() * 12) * depth.duration;
      var delay = -Math.random() * duration;
      var driftLimit = (118 + Math.random() * 56) * depth.drift;
      var drift1 = randomSigned(driftLimit * 0.42);
      var drift2 = drift1 + randomSigned(driftLimit * 0.46);
      var drift3 = drift2 + randomSigned(driftLimit * 0.5);
      var drift = drift3 + randomSigned(driftLimit * 0.48);
      var size = getSize(shape, depth);
      var palette = getPalette(shape, theme);
      var baseOpacity = isPetal(shape)
        ? 0.54 + Math.random() * 0.34
        : shape === "snow"
        ? 0.62 + Math.random() * 0.28
        : 0.42 + Math.random() * 0.36;
      var opacity = Math.min(0.92, baseOpacity * depth.opacity);
      var rotateStart = -110 + Math.random() * 220;
      var rotate1 = rotateStart + 62 + Math.random() * 104;
      var rotate2 = rotate1 + 74 + Math.random() * 118;
      var rotate3 = rotate2 + 82 + Math.random() * 126;
      var rotateEnd = rotate3 + 94 + Math.random() * 150;

      piece.className = "ambient-fall-piece ambient-fall-" + shape;
      if (shape === "snow") {
        piece.textContent = randomFrom(theme.snowSymbols || ["❄"]);
      } else if (shape === "star") {
        piece.textContent = randomFrom(theme.starSymbols || ["✦", "✧"]);
      }

      piece.style.left = Math.random() * 100 + "vw";
      piece.style.color = palette.a;
      piece.style.setProperty("--fall-size", size + "px");
      piece.style.setProperty("--fall-duration", duration + "s");
      piece.style.setProperty("--fall-delay", delay + "s");
      piece.style.setProperty("--fall-drift", drift + "px");
      piece.style.setProperty("--fall-drift-1", drift1 + "px");
      piece.style.setProperty("--fall-drift-2", drift2 + "px");
      piece.style.setProperty("--fall-drift-3", drift3 + "px");
      piece.style.setProperty("--fall-color-a", palette.a);
      piece.style.setProperty("--fall-color-b", palette.b);
      piece.style.setProperty("--fall-color-c", palette.c);
      piece.style.setProperty("--fall-glow", palette.glow);
      piece.style.setProperty("--fall-blur", depth.blur + "px");
      piece.style.setProperty(
        "--petal-vein-opacity",
        (0.2 + Math.random() * 0.28).toFixed(2)
      );
      piece.style.setProperty(
        "--petal-edge-opacity",
        (0.18 + Math.random() * 0.3).toFixed(2)
      );
      piece.style.setProperty("--petal-light-x", 28 + Math.random() * 44 + "%");
      piece.style.setProperty("--petal-light-y", 12 + Math.random() * 26 + "%");
      piece.style.setProperty(
        "--fall-saturation",
        (1.02 + Math.random() * 0.24).toFixed(2)
      );
      piece.style.setProperty("--fall-rotate-start", rotateStart + "deg");
      piece.style.setProperty("--fall-rotate-1", rotate1 + "deg");
      piece.style.setProperty("--fall-rotate-2", rotate2 + "deg");
      piece.style.setProperty("--fall-rotate-3", rotate3 + "deg");
      piece.style.setProperty("--fall-rotate-end", rotateEnd + "deg");
      piece.style.setProperty("--fall-flip-start", randomAngle(18));
      piece.style.setProperty("--fall-flip-1", randomAngle(54));
      piece.style.setProperty("--fall-flip-2", randomAngle(68));
      piece.style.setProperty("--fall-flip-3", randomAngle(56));
      piece.style.setProperty("--fall-flip-end", randomAngle(32));
      piece.style.setProperty("--fall-tilt-start", randomAngle(18));
      piece.style.setProperty("--fall-tilt-1", randomAngle(44));
      piece.style.setProperty("--fall-tilt-2", randomAngle(58));
      piece.style.setProperty("--fall-tilt-3", randomAngle(46));
      piece.style.setProperty("--fall-tilt-end", randomAngle(28));
      piece.style.setProperty("--fall-scale-start", depth.scaleStart + Math.random() * 0.08);
      piece.style.setProperty("--fall-scale-1", depth.scaleStart + 0.12 + Math.random() * 0.08);
      piece.style.setProperty("--fall-scale-2", 0.92 + Math.random() * 0.12);
      piece.style.setProperty("--fall-scale-3", 0.86 + Math.random() * 0.12);
      piece.style.setProperty("--fall-scale-end", depth.scaleEnd + Math.random() * 0.08);
      piece.style.setProperty("--fall-opacity", opacity.toFixed(2));

      layer.appendChild(piece);
    }

    document.body.appendChild(layer);
  }

  function initShootingStars() {
    if (!document.body) return;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    var palettes = [
      {
        core: "rgba(255, 246, 194, 0.98)",
        trail: "rgba(255, 194, 96, 0.78)",
        haze: "rgba(255, 226, 132, 0.42)",
        accent: "rgba(255, 132, 204, 0.46)",
        shadow: "rgba(54, 31, 80, 0.1)",
        shadowCore: "rgba(39, 27, 66, 0.14)",
      },
      {
        core: "rgba(238, 245, 255, 0.98)",
        trail: "rgba(116, 188, 255, 0.78)",
        haze: "rgba(133, 218, 255, 0.38)",
        accent: "rgba(255, 142, 226, 0.42)",
        shadow: "rgba(28, 36, 78, 0.1)",
        shadowCore: "rgba(25, 30, 64, 0.14)",
      },
      {
        core: "rgba(255, 232, 246, 0.98)",
        trail: "rgba(255, 126, 196, 0.76)",
        haze: "rgba(255, 160, 218, 0.36)",
        accent: "rgba(154, 202, 255, 0.44)",
        shadow: "rgba(78, 31, 72, 0.1)",
        shadowCore: "rgba(56, 24, 58, 0.14)",
      },
    ];

    function randomFrom(list) {
      return list[Math.floor(Math.random() * list.length)];
    }

    var layer = document.createElement("div");
    layer.className = "shooting-star-layer";
    layer.setAttribute("aria-hidden", "true");

    for (var i = 0; i < 7; i++) {
      var star = document.createElement("span");
      var palette = randomFrom(palettes);
      var duration = 10 + Math.random() * 8;
      var delay = -Math.random() * duration;
      var travelX = 74 + Math.random() * 42;
      var travelY = 22 + Math.random() * 28;
      var trailWidth = 190 + Math.random() * 180;
      var shadowWidth = trailWidth + 54 + Math.random() * 74;
      var shadowOpacity = 0.66 + Math.random() * 0.14;

      star.className = "shooting-star";
      star.style.left = -22 + Math.random() * 52 + "vw";
      star.style.top = 4 + Math.random() * 50 + "vh";
      star.style.setProperty("--shoot-width", trailWidth + "px");
      star.style.setProperty("--shoot-shadow-width", shadowWidth + "px");
      star.style.setProperty("--shoot-shadow-height", 12 + Math.random() * 6 + "px");
      star.style.setProperty("--shoot-shadow-opacity", shadowOpacity.toFixed(2));
      star.style.setProperty(
        "--shoot-shadow-opacity-soft",
        (shadowOpacity * 0.76).toFixed(2)
      );
      star.style.setProperty("--shoot-duration", duration + "s");
      star.style.setProperty("--shoot-delay", delay + "s");
      star.style.setProperty("--shoot-angle", 13 + Math.random() * 10 + "deg");
      star.style.setProperty("--shoot-travel-x", travelX + "vw");
      star.style.setProperty("--shoot-travel-y", travelY + "vh");
      star.style.setProperty("--shoot-core", palette.core);
      star.style.setProperty("--shoot-trail", palette.trail);
      star.style.setProperty("--shoot-haze", palette.haze);
      star.style.setProperty("--shoot-accent", palette.accent);
      star.style.setProperty("--shoot-shadow", palette.shadow);
      star.style.setProperty("--shoot-shadow-core", palette.shadowCore);
      layer.appendChild(star);
    }

    document.body.appendChild(layer);
  }

  // ── 列表页 ────────────────────────────────────────────

  function initListPage(data, type) {
    setPageClasses("page-list", type);
    renderNav(type);

    var container = document.getElementById("list-container");
    if (!container) return;

    var meta = dataMeta(type);

    container.innerHTML =
      '<section class="page-shell page-shell-list">' +
      '<div class="page-banner page-banner-' +
      esc(meta.theme) +
      '">' +
      '<div class="page-banner-copy">' +
      '<div class="page-eyebrow">' +
      esc(meta.eyebrow) +
      "</div>" +
      '<h1 class="page-title">' +
      esc(meta.label) +
      "</h1>" +
      '<p class="page-subtitle">' +
      esc(meta.subtitle) +
      "</p>" +
      "</div>" +
      '<label class="search-panel">' +
      '<span class="search-label">搜索图鉴</span>' +
      '<input class="search-box" id="search-input" type="text" placeholder="' +
      esc(meta.search) +
      '">' +
      '<span class="search-result-count" id="result-count"></span>' +
      "</label>" +
      "</div>" +
      '<div class="item-grid" id="item-list"></div>' +
      "</section>";

    function renderList(keyword) {
      var itemList = document.getElementById("item-list");
      var resultCount = document.getElementById("result-count");
      var kw = keyword ? keyword.toLowerCase() : "";
      var filtered = [];

      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var name = item.name ? String(item.name).toLowerCase() : "";
        var desc = item.desc ? String(item.desc).toLowerCase() : "";
        var obtain = item.obtain ? String(item.obtain).toLowerCase() : "";
        var usage = item.usage ? String(item.usage).toLowerCase() : "";
        if (
          !kw ||
          name.indexOf(kw) !== -1 ||
          desc.indexOf(kw) !== -1 ||
          obtain.indexOf(kw) !== -1 ||
          usage.indexOf(kw) !== -1
        ) {
          filtered.push(item);
        }
      }

      if (resultCount) {
        resultCount.textContent = kw
          ? "找到 " + filtered.length + " 项结果"
          : "共 " + filtered.length + " 项内容";
      }

      if (filtered.length === 0) {
        itemList.innerHTML =
          '<div class="list-empty">' +
          "<strong>没有找到匹配内容</strong>" +
          "<p>试试更短的关键词，或者切换到别的分类继续查看。</p>" +
          "</div>";
        return;
      }

      var html = "";
      for (var j = 0; j < filtered.length; j++) {
        var item = filtered[j];
        var encodedId = encodeURIComponent(item.id);
        var badges = "";

        if (item.category) {
          badges += badge(item.category, "ui-badge-soft");
        }

        if (item.skins && item.skins.length > 0) {
          badges += badge("皮肤 " + item.skins.length, "ui-badge-accent");
        }

        if (!badges) {
          badges = badge(meta.label, "ui-badge");
        }

        html +=
          '<a class="item-card" href="detail.html?id=' +
          encodedId +
          '">' +
          '<div class="item-card-media">' +
          '<img class="row-icon" src="' +
          imgSrc(item.icon) +
          '" alt="" ' +
          onerr() +
          ">" +
          "</div>" +
          '<div class="item-card-body">' +
          '<div class="item-card-top">' +
          '<div class="row-name">' +
          esc(item.name || "") +
          "</div>" +
          '<span class="row-arrow">查看</span>' +
          "</div>" +
          '<p class="row-desc">' +
          esc(item.desc || "暂无描述。") +
          "</p>" +
          '<div class="item-meta">' +
          badges +
          "</div>" +
          "</div>" +
          "</a>";
      }

      itemList.innerHTML = html;
    }

    renderList("");

    var searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        renderList(this.value.trim());
      });
    }
  }

  // ── 详情页 ────────────────────────────────────────────

  function detailCard(label, value) {
    if (value !== 0 && !value) return "";
    return (
      '<div class="detail-card">' +
      '<div class="section-label">' +
      esc(label) +
      "</div>" +
      '<div class="section-value">' +
      esc(value) +
      "</div>" +
      "</div>"
    );
  }

  function initDetailPage(data, type) {
    setPageClasses("page-detail", type);
    renderNav(type);

    var container = document.getElementById("detail-container");
    if (!container) return;

    var meta = dataMeta(type);

    function renderError() {
      container.innerHTML =
        '<section class="page-shell page-shell-detail">' +
        '<div class="detail-error">' +
        "<strong>内容不存在或 ID 无效</strong>" +
        "<p>请返回上一页重新选择，或确认链接参数是否正确。</p>" +
        '<a href="index.html">← 返回列表</a>' +
        "</div>" +
        "</section>";
    }

    var id = getParam("id");
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

    var detailCards = "";
    detailCards += detailCard("获取方式", item.obtain);
    detailCards += detailCard("用途", item.usage);
    detailCards += detailCard("配方", item.recipe);

    if (type === "plants") {
      detailCards += detailCard("生长时间", item.grow_time);
      detailCards += detailCard("掉落物", item.drop);
    }

    var html =
      '<section class="page-shell page-shell-detail">' +
      '<div class="detail-back-wrap">' +
      '<a class="detail-back" href="index.html">← 返回' +
      esc(meta.label) +
      "</a>" +
      "</div>" +
      '<div class="detail-header">' +
      '<div class="detail-icon-wrap">' +
      '<img class="detail-icon" src="' +
      imgSrc(item.icon) +
      '" alt="" ' +
      onerr() +
      ">" +
      "</div>" +
      '<div class="detail-title">' +
      '<div class="page-eyebrow">' +
      esc(meta.eyebrow) +
      "</div>" +
      "<h1>" +
      esc(item.name || "") +
      "</h1>" +
      '<div class="detail-meta">' +
      '<span class="detail-category">' +
      esc(item.category || meta.label) +
      "</span>" +
      badge(meta.label, "ui-badge-soft") +
      "</div>" +
      '<p class="detail-summary">' +
      esc(item.desc || "暂无描述。") +
      "</p>" +
      "</div>" +
      "</div>" +
      '<div class="detail-content">';

    if (detailCards) {
      html += '<div class="detail-grid">' + detailCards + "</div>";
    }

    if (type === "food") {
      html +=
        '<section class="detail-section-card">' +
        '<div class="section-label">属性</div>' +
        '<div class="stats-grid">' +
        '<div class="stat-item"><span class="stat-label">饥饿</span><span class="stat-value">' +
        esc(item.hunger) +
        "</span></div>" +
        '<div class="stat-item"><span class="stat-label">生命</span><span class="stat-value">' +
        esc(item.health) +
        "</span></div>" +
        '<div class="stat-item"><span class="stat-label">精神</span><span class="stat-value">' +
        esc(item.sanity) +
        "</span></div>" +
        '<div class="stat-item"><span class="stat-label">腐烂</span><span class="stat-value">' +
        esc(item.perish) +
        "</span></div>" +
        "</div>" +
        "</section>";
    }

    if (item.skins && item.skins.length > 0) {
      var skinsHtml = "";
      for (var j = 0; j < item.skins.length; j++) {
        var skin = item.skins[j];
        var paidTag = skin.paid
          ? '<span class="skin-tag skin-tag-paid">付费</span>'
          : '<span class="skin-tag skin-tag-free">免费</span>';

        skinsHtml +=
          '<div class="skin-item">' +
          '<div class="skin-icon-wrap">' +
          '<img class="skin-icon" src="' +
          skinImgSrc(skin.icon) +
          '" alt="" ' +
          onerr() +
          ">" +
          "</div>" +
          '<div class="skin-info">' +
          '<div class="skin-name-row">' +
          '<div class="skin-name">' +
          esc(skin.name || "") +
          "</div>" +
          paidTag +
          "</div>" +
          '<div class="skin-desc">' +
          esc(skin.desc || "皮肤外观展示。") +
          "</div>" +
          "</div>" +
          "</div>";
      }

      html +=
        '<section class="detail-section-card">' +
        '<div class="section-label">皮肤</div>' +
        '<div class="skin-list">' +
        skinsHtml +
        "</div>" +
        "</section>";
    }

    html += "</div>" + "</section>";

    container.innerHTML = html;
  }

  // ── 对外暴露 ──────────────────────────────────────────

  window.initListPage = initListPage;
  window.initDetailPage = initDetailPage;

  var defaultActiveType = document.body ? document.body.getAttribute("data-nav-type") || "" : "";
  renderNav(defaultActiveType);
  initCursorTrail();
  initAmbientFall();
  initShootingStars();
})();
