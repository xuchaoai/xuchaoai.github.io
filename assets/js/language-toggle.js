(function () {
  var STORAGE_KEY = "xuchao-homepage-language";
  var supportedLanguages = ["en", "zh"];

  function normalizeLanguage(language) {
    if (!language) {
      return "en";
    }

    return String(language).toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }

  function getValue(source, path) {
    return path.split(".").reduce(function (value, key) {
      return value && Object.prototype.hasOwnProperty.call(value, key) ? value[key] : undefined;
    }, source);
  }

  function setText(languagePack, element) {
    var value = getValue(languagePack, element.getAttribute("data-i18n"));
    if (typeof value === "string") {
      element.textContent = value;
    }
  }

  function setHtml(languagePack, element) {
    var value = getValue(languagePack, element.getAttribute("data-i18n-html"));
    if (typeof value === "string") {
      element.innerHTML = value;
    }
  }

  function setAttributes(languagePack, element) {
    var mappings = element.getAttribute("data-i18n-attr");
    if (!mappings) {
      return;
    }

    mappings.split(";").forEach(function (mapping) {
      var parts = mapping.split(":");
      var attribute = parts[0] && parts[0].trim();
      var key = parts[1] && parts[1].trim();
      var value = key ? getValue(languagePack, key) : undefined;

      if (attribute && typeof value === "string") {
        element.setAttribute(attribute, value);
      }
    });
  }

  function updateToggle(language) {
    document.querySelectorAll("[data-lang-option]").forEach(function (button) {
      var isActive = button.getAttribute("data-lang-option") === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function applyLanguage(language) {
    var nextLanguage = normalizeLanguage(language);
    var dictionary = window.siteI18n || {};
    var languagePack = dictionary[nextLanguage] || dictionary.en;

    if (!languagePack) {
      return;
    }

    document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
    document.body.setAttribute("data-language", nextLanguage);

    if (languagePack.meta && languagePack.meta.title) {
      document.title = languagePack.meta.title;
    }

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      setText(languagePack, element);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
      setHtml(languagePack, element);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (element) {
      setAttributes(languagePack, element);
    });

    updateToggle(nextLanguage);

    try {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch (error) {
      // Browsers can disable localStorage; the switch still works for this page view.
    }
  }

  function preferredLanguage() {
    try {
      var storedLanguage = window.localStorage.getItem(STORAGE_KEY);
      if (storedLanguage) {
        return normalizeLanguage(storedLanguage);
      }
    } catch (error) {
      return "en";
    }

    return "en";
  }

  function initLanguageToggle() {
    document.querySelectorAll("[data-lang-option]").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        var language = button.getAttribute("data-lang-option");
        if (supportedLanguages.indexOf(language) !== -1) {
          applyLanguage(language);
        }
      });
    });

    applyLanguage(preferredLanguage());
  }

  function initAnchorScrolling() {
    if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.smoothScroll) {
      return;
    }

    var offset = -1 * ((document.querySelector(".masthead") || {}).offsetHeight || 70) - 18;
    window.xuchaoAnchorOffset = offset;
    window.jQuery("a").smoothScroll({ offset: offset });
  }

  function initNavActiveState() {
    var navLinks = document.querySelectorAll("#site-nav .masthead__menu-item > a");

    function normalizeHref(link) {
      var href = link.getAttribute("href") || "";
      return href.charAt(0) === "/" ? href.slice(1) : href;
    }

    function setCurrentNav(currentLink) {
      navLinks.forEach(function (link) {
        link.classList.toggle("is-current-nav", link === currentLink);
      });
    }

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (normalizeHref(link).charAt(0) === "#") {
          setCurrentNav(link);
        }
      });
    });

    var currentHash = window.location.hash || "#about-me";
    navLinks.forEach(function (link) {
      if (normalizeHref(link) === currentHash) {
        setCurrentNav(link);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initLanguageToggle();
      initNavActiveState();
      window.setTimeout(initAnchorScrolling, 100);
    });
  } else {
    initLanguageToggle();
    initNavActiveState();
    window.setTimeout(initAnchorScrolling, 100);
  }
}());
