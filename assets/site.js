const LANGUAGES = [
  "en", "cs", "da", "de", "el", "es", "fi", "fr", "hu", "it",
  "ja", "ko", "nl", "no", "pl", "pt", "sv", "tr", "uk", "zh"
];

const SITE_COPY = {
  en: {
    appearance: "Appearance", system: "System", light: "Light", dark: "Dark",
    homeTitle: "Apps made with care.",
    homeLede: "A quiet home for the apps by Flux76. Clear, privacy-friendly and built to last.",
    coming: "More apps will follow."
  },
  cs: {
    appearance: "Vzhled", system: "Systém", light: "Světlý", dark: "Tmavý",
    homeTitle: "Aplikace tvořené s péčí.",
    homeLede: "Klidné místo pro aplikace Flux76. Přehledné, šetrné k soukromí a vytvořené tak, aby vydržely.",
    coming: "Další aplikace budou následovat."
  },
  da: {
    appearance: "Udseende", system: "System", light: "Lys", dark: "Mørk",
    homeTitle: "Apps skabt med omtanke.",
    homeLede: "Et roligt hjem til apps fra Flux76. Enkle, privatlivsvenlige og bygget til at holde.",
    coming: "Flere apps følger."
  },
  de: {
    appearance: "Darstellung", system: "System", light: "Hell", dark: "Dunkel",
    homeTitle: "Apps mit Sorgfalt gemacht.",
    homeLede: "Ein ruhiges Zuhause für die Apps von Flux76. Klar, datenschutzfreundlich und für die Zukunft gebaut.",
    coming: "Weitere Apps folgen."
  },
  el: {
    appearance: "Εμφάνιση", system: "Σύστημα", light: "Φωτεινό", dark: "Σκούρο",
    homeTitle: "Εφαρμογές φτιαγμένες με φροντίδα.",
    homeLede: "Ένα ήρεμο σπίτι για τις εφαρμογές της Flux76. Απλές, φιλικές προς την ιδιωτικότητα και φτιαγμένες για να αντέχουν.",
    coming: "Θα ακολουθήσουν περισσότερες εφαρμογές."
  },
  es: {
    appearance: "Apariencia", system: "Sistema", light: "Claro", dark: "Oscuro",
    homeTitle: "Apps hechas con cuidado.",
    homeLede: "Un espacio tranquilo para las apps de Flux76. Claras, respetuosas con la privacidad y hechas para durar.",
    coming: "Pronto llegarán más apps."
  },
  fi: {
    appearance: "Ulkoasu", system: "Järjestelmä", light: "Vaalea", dark: "Tumma",
    homeTitle: "Huolella tehtyjä sovelluksia.",
    homeLede: "Rauhallinen koti Flux76:n sovelluksille. Selkeitä, yksityisyyttä kunnioittavia ja tehty kestämään.",
    coming: "Lisää sovelluksia on tulossa."
  },
  fr: {
    appearance: "Apparence", system: "Système", light: "Clair", dark: "Sombre",
    homeTitle: "Des apps conçues avec soin.",
    homeLede: "Un espace calme pour les apps de Flux76. Claires, respectueuses de la vie privée et faites pour durer.",
    coming: "D'autres apps suivront."
  },
  hu: {
    appearance: "Megjelenés", system: "Rendszer", light: "Világos", dark: "Sötét",
    homeTitle: "Gondosan készített appok.",
    homeLede: "Nyugodt otthon a Flux76 appjainak. Átláthatók, adatvédelem-központúak és hosszú távra készültek.",
    coming: "További appok érkeznek."
  },
  it: {
    appearance: "Aspetto", system: "Sistema", light: "Chiaro", dark: "Scuro",
    homeTitle: "App realizzate con cura.",
    homeLede: "Uno spazio tranquillo per le app di Flux76. Chiare, attente alla privacy e fatte per durare.",
    coming: "Altre app arriveranno."
  },
  ja: {
    appearance: "表示", system: "システム", light: "ライト", dark: "ダーク",
    homeTitle: "こだわって作ったアプリ。",
    homeLede: "Flux76のアプリのための落ち着いた場所。分かりやすく、プライバシーに配慮し、長く使えるように作られています。",
    coming: "今後さらにアプリが加わります。"
  },
  ko: {
    appearance: "화면 모드", system: "시스템", light: "라이트", dark: "다크",
    homeTitle: "정성을 담아 만든 앱.",
    homeLede: "Flux76 앱을 위한 차분한 공간입니다. 명확하고 개인정보를 존중하며 오래 사용할 수 있도록 만들었습니다.",
    coming: "더 많은 앱이 추가될 예정입니다."
  },
  nl: {
    appearance: "Weergave", system: "Systeem", light: "Licht", dark: "Donker",
    homeTitle: "Apps met aandacht gemaakt.",
    homeLede: "Een rustig thuis voor de apps van Flux76. Duidelijk, privacyvriendelijk en gebouwd om lang mee te gaan.",
    coming: "Meer apps volgen."
  },
  no: {
    appearance: "Utseende", system: "System", light: "Lys", dark: "Mørk",
    homeTitle: "Apper laget med omtanke.",
    homeLede: "Et rolig hjem for appene fra Flux76. Tydelige, personvernvennlige og bygget for å vare.",
    coming: "Flere apper kommer."
  },
  pl: {
    appearance: "Wygląd", system: "System", light: "Jasny", dark: "Ciemny",
    homeTitle: "Aplikacje tworzone z troską.",
    homeLede: "Spokojne miejsce dla aplikacji Flux76. Przejrzyste, przyjazne prywatności i stworzone na lata.",
    coming: "Pojawią się kolejne aplikacje."
  },
  pt: {
    appearance: "Aparência", system: "Sistema", light: "Claro", dark: "Escuro",
    homeTitle: "Apps criadas com cuidado.",
    homeLede: "Um espaço tranquilo para as apps da Flux76. Claras, focadas na privacidade e feitas para durar.",
    coming: "Mais apps chegarão."
  },
  sv: {
    appearance: "Utseende", system: "System", light: "Ljust", dark: "Mörkt",
    homeTitle: "Appar skapade med omsorg.",
    homeLede: "Ett lugnt hem för apparna från Flux76. Tydliga, integritetsvänliga och byggda för att hålla.",
    coming: "Fler appar kommer."
  },
  tr: {
    appearance: "Görünüm", system: "Sistem", light: "Açık", dark: "Koyu",
    homeTitle: "Özenle geliştirilen uygulamalar.",
    homeLede: "Flux76 uygulamaları için sakin bir yuva. Anlaşılır, gizlilik dostu ve uzun ömürlü.",
    coming: "Daha fazla uygulama gelecek."
  },
  uk: {
    appearance: "Вигляд", system: "Система", light: "Світлий", dark: "Темний",
    homeTitle: "Застосунки, створені з турботою.",
    homeLede: "Спокійний дім для застосунків Flux76. Зрозумілі, дружні до приватності та створені надовго.",
    coming: "Згодом з'являться інші застосунки."
  },
  zh: {
    appearance: "外观", system: "跟随系统", light: "浅色", dark: "深色",
    homeTitle: "用心打造的应用。",
    homeLede: "Flux76 应用的简洁空间。清晰、注重隐私，并为长久使用而打造。",
    coming: "更多应用即将推出。"
  }
};

const pageName = document.body.dataset.page;
let languageRequest = 0;

function preferredLanguage() {
  const saved = localStorage.getItem("flux76-language");
  if (LANGUAGES.includes(saved)) {
    return saved;
  }

  const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
  return LANGUAGES.includes(browserLanguage) ? browserLanguage : "en";
}

function pageCopy(language, locale) {
  const site = SITE_COPY[language];

  if (pageName === "home") {
    return {
      hero_title: site.homeTitle,
      hero_lede: site.homeLede,
      app_platform: locale.routes.ios.label,
      app_description: locale.routes.ios.body,
      coming_note: site.coming
    };
  }

  return {
    platform: locale.routes.ios.label,
    eyebrow: locale.hero.eyebrow,
    hero_title: locale.hero.accent,
    hero_lede: locale.hero.lead,
    store_aria: locale.hero.appStore,
    screenshot_alt: locale.showcase.mobileLibrary,
    benefit_1_title: locale.capabilities.items[0].title,
    benefit_1_text: locale.capabilities.items[0].body,
    benefit_2_title: locale.capabilities.items[1].title,
    benefit_2_text: locale.capabilities.items[1].body,
    benefit_3_title: locale.trust.noTrackingTitle,
    benefit_3_text: locale.trust.noTrackingBody
  };
}

async function applyLanguage(language) {
  const activeLanguage = LANGUAGES.includes(language) ? language : "en";
  const request = ++languageRequest;
  const response = await fetch(`/assets/locales/${activeLanguage}.json`);

  if (!response.ok) {
    throw new Error(`Unable to load locale ${activeLanguage}: HTTP ${response.status}`);
  }

  const locale = await response.json();
  if (request !== languageRequest) {
    return;
  }

  const copy = pageCopy(activeLanguage, locale);
  const site = SITE_COPY[activeLanguage];

  document.documentElement.lang = activeLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value) {
      element.alt = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value) {
      element.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll(".language-select").forEach((select) => {
    select.value = activeLanguage;
    select.setAttribute("aria-label", locale.nav.language);
    select.title = locale.nav.language;
  });

  document.querySelectorAll(".theme-select").forEach((select) => {
    select.setAttribute("aria-label", site.appearance);
    select.title = site.appearance;
    select.options[0].textContent = site.system;
    select.options[1].textContent = site.light;
    select.options[2].textContent = site.dark;
  });

  const storeBadge = document.querySelector(".store-badge");
  if (storeBadge) {
    storeBadge.src = `/assets/img/app-store-badge-${activeLanguage}.svg`;
  }

  localStorage.setItem("flux76-language", activeLanguage);
}

function reportLanguageError(error) {
  document.body.dataset.localeError = "true";
  console.error("Flux76 locale could not be applied.", error);
}

function applyTheme(theme) {
  if (theme === "light" || theme === "dark") {
    document.documentElement.dataset.theme = theme;
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  document.querySelectorAll(".theme-select").forEach((select) => {
    select.value = theme;
  });

  localStorage.setItem("flux76-theme", theme);
}

document.querySelectorAll(".language-select").forEach((select) => {
  select.addEventListener("change", (event) => {
    applyLanguage(event.target.value).catch(reportLanguageError);
  });
});

document.querySelectorAll(".theme-select").forEach((select) => {
  select.addEventListener("change", (event) => applyTheme(event.target.value));
});

const savedTheme = localStorage.getItem("flux76-theme");
applyTheme(["light", "dark", "system"].includes(savedTheme) ? savedTheme : "system");
applyLanguage(preferredLanguage()).catch(reportLanguageError);

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
