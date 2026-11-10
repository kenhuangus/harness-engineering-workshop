/* Harness workshop — EN / 中文 UI strings only. Slide content stays in English. */
(function (global) {
  const KEY = "harness-workshop-lang";
  const STR = {
    en: {
      "meta.title": "Harness Engineering — 3-Hour Hands-On Workshop",
      "meta.desc": "A 3-hour hands-on workshop from Harness Engineering: Design Patterns for Securing Long-Horizon Multi-Agent AI Systems, by Ken Huang. Ten runnable labs, no cloud account, no paid model API.",
      "ui.fullscreen": "Full Screen", "ui.exitFull": "Exit Full",
      "ui.fsEnter": "Enter Fullscreen (F)", "ui.fsExit": "Exit Fullscreen (F)",
      "ui.fsToggle": "Toggle Fullscreen (F)", "ui.launch": "Lab Guide ↗",
      "ui.prev": "‹ Prev", "ui.next": "Next ›",
      "ui.prevAria": "Previous slide", "ui.nextAria": "Next slide",
      "ui.goto": "Go to slide", "ui.lang": "Language"
    },
    zh: {
      "meta.title": "Harness Engineering — 3 小时动手工作坊",
      "meta.desc": "基于《Harness Engineering》的 3 小时动手工作坊，作者 Ken Huang。10 个可运行实验，无需云账号，无需付费模型 API。",
      "ui.fullscreen": "全屏", "ui.exitFull": "退出全屏",
      "ui.fsEnter": "进入全屏 (F)", "ui.fsExit": "退出全屏 (F)",
      "ui.fsToggle": "切换全屏 (F)", "ui.launch": "实验指南 ↗",
      "ui.prev": "‹ 上一页", "ui.next": "下一页 ›",
      "ui.prevAria": "上一页", "ui.nextAria": "下一页",
      "ui.goto": "转到第", "ui.lang": "语言"
    }
  };
  function lang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q && STR[q]) return q;
    return localStorage.getItem(KEY) || "en";
  }
  function t(key) { return (STR[lang()] || STR.en)[key]; }
  function apply() {
    const L = STR[lang()] || STR.en;
    document.documentElement.lang = lang() === "zh" ? "zh-CN" : "en";
    document.body.classList.toggle("is-zh", lang() === "zh");
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if (L[k] !== undefined) el.textContent = L[k];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const k = el.getAttribute("data-i18n-aria");
      if (L[k] !== undefined) el.setAttribute("aria-label", L[k]);
    });
    document.querySelectorAll(".lang__btn").forEach(b =>
      b.classList.toggle("is-on", b.dataset.lang === lang()));
    document.dispatchEvent(new Event("maestro:lang"));
  }
  global.MAESTRO_I18N = { t, apply };
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang__btn").forEach(b =>
      b.addEventListener("click", () => {
        localStorage.setItem(KEY, b.dataset.lang); apply();
      }));
    apply();
  });
})(window);
