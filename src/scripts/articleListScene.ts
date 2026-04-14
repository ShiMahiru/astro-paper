const ARTICLE_LIST_SCENE = "article-list-scene";
const DESKTOP_MEDIA = "(min-width: 1024px)";
const LEGACY_DISPLAY_ATTR = "data-display-style";
const LIST_SELECTOR = "[data-article-list]";
const LIST_SCENE_ATTR = "data-list-scene";
const DEFAULT_SCENE = "default";

function isDesktop(): boolean {
  return window.matchMedia(DESKTOP_MEDIA).matches;
}

function getSavedScene(): string {
  const legacyScene = document.documentElement.getAttribute(LEGACY_DISPLAY_ATTR);
  if (legacyScene) return legacyScene;
  return localStorage.getItem(ARTICLE_LIST_SCENE) ?? DEFAULT_SCENE;
}

function saveScene(scene: string): void {
  localStorage.setItem(ARTICLE_LIST_SCENE, scene);
}

function clearLegacyGlobalAttr(): void {
  document.documentElement.removeAttribute(LEGACY_DISPLAY_ATTR);
}

function applySceneToArticleLists(scene: string): void {
  const articleLists = document.querySelectorAll<HTMLElement>(LIST_SELECTOR);
  if (articleLists.length === 0) return;

  const desktop = isDesktop();
  for (const articleList of articleLists) {
    if (desktop) {
      articleList.setAttribute(LIST_SCENE_ATTR, scene);
    } else {
      articleList.removeAttribute(LIST_SCENE_ATTR);
    }
  }
}

function setScene(scene: string): void {
  saveScene(scene);
  clearLegacyGlobalAttr();
  applySceneToArticleLists(scene);
}

function setupLegacyBridge(): void {
  const root = document.documentElement;
  const observer = new MutationObserver(() => {
    const legacyScene = root.getAttribute(LEGACY_DISPLAY_ATTR);
    if (!legacyScene) return;
    setScene(legacyScene);
  });

  observer.observe(root, {
    attributes: true,
    attributeFilter: [LEGACY_DISPLAY_ATTR],
  });
}

function setupResizeSync(): void {
  const media = window.matchMedia(DESKTOP_MEDIA);
  media.addEventListener("change", () => {
    applySceneToArticleLists(getSavedScene());
  });
}

function setupCustomEvent(): void {
  document.addEventListener("article-list-scene:change", event => {
    const customEvent = event as CustomEvent<{ scene?: string }>;
    if (typeof customEvent.detail?.scene !== "string") return;
    setScene(customEvent.detail.scene);
  });
}

function setupArticleListScene(): void {
  setScene(getSavedScene());
  setupLegacyBridge();
  setupResizeSync();
  setupCustomEvent();
}

setupArticleListScene();
document.addEventListener("astro:after-swap", () => {
  applySceneToArticleLists(getSavedScene());
});

window.articleListScene = {
  getScene: getSavedScene,
  setScene,
};
