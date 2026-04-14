// Constants
const THEME = "theme";
const DARK = "dark";
const FROST = "frost";

// Initial color scheme
// Can be "dark" or "frost"
const initialColorScheme = FROST;

function getPreferTheme(): string {
  // get theme data from local storage (user's explicit choice)
  const currentTheme = localStorage.getItem(THEME);
  if (currentTheme) return currentTheme;

  // return initial color scheme if it is set (site default)
  if (initialColorScheme) return initialColorScheme;

  // return site default when user has no explicit preference
  return FROST;
}

// Use existing theme value from inline script if available, otherwise detect
let themeValue = window.theme?.themeValue ?? getPreferTheme();
const themeLabelMap: Record<string, string> = {
  [DARK]: "当前深色白字效果",
  [FROST]: "白色毛玻璃黑字效果",
};

function setPreference(): void {
  localStorage.setItem(THEME, themeValue);
  reflectPreference();
}

function hasUserPreference(): boolean {
  return localStorage.getItem(THEME) !== null;
}

function reflectPreference(): void {
  document.firstElementChild?.setAttribute("data-theme", themeValue);
  document.firstElementChild?.setAttribute("data-display-style", themeValue);

  document
    .querySelector("#theme-btn")
    ?.setAttribute("aria-label", themeLabelMap[themeValue] ?? "主题模式");

  // Get a reference to the body element
  const body = document.body;

  // Check if the body element exists before using getComputedStyle
  if (body) {
    // Get the computed styles for the body element
    const computedStyles = window.getComputedStyle(body);

    // Get the background color property
    const bgColor = computedStyles.backgroundColor;

    // Set the background color in <meta theme-color ... />
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
}

// Update the global theme API
if (window.theme) {
  window.theme.setPreference = setPreference;
  window.theme.reflectPreference = reflectPreference;
} else {
  window.theme = {
    themeValue,
    setPreference,
    reflectPreference,
    getTheme: () => themeValue,
    setTheme: (val: string) => {
      themeValue = val;
    },
  };
}

// Ensure theme is reflected (in case body wasn't ready when inline script ran)
reflectPreference();

function setThemeFeature(): void {
  // set on load so screen readers can get the latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  const themeBtn = document.querySelector("#theme-btn") as HTMLElement | null;
  if (!themeBtn || themeBtn.dataset.themeBound === "true") return;

  themeBtn.addEventListener("click", () => {
    themeValue = themeValue === DARK ? FROST : DARK;
    window.theme?.setTheme(themeValue);
    setPreference();
  });
  themeBtn.dataset.themeBound = "true";
}

// Set up theme features after page load
setThemeFeature();

// Runs on view transitions navigation
document.addEventListener("astro:after-swap", setThemeFeature);

// Set theme-color value before page transition
// to avoid navigation bar color flickering in Android dark mode
document.addEventListener("astro:before-swap", event => {
  const astroEvent = event;
  const bgColor = document
    .querySelector("meta[name='theme-color']")
    ?.getAttribute("content");

  if (bgColor) {
    astroEvent.newDocument
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
});

// sync with system changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (hasUserPreference()) return;
  themeValue = FROST;
  window.theme?.setTheme(themeValue);
  reflectPreference();
});
