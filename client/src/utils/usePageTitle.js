import { useEffect } from "react";

const DEFAULT_TITLE = "DESIGN DEN — Spaces designed around how you live.";

const DEFAULT_DESCRIPTION =
  "DESIGN DEN creates thoughtful interiors with factory-direct execution, premium materials, and quality control at every stage.";

function setMeta(name, content) {
  let element = document.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setProperty(property, content) {
  let element = document.querySelector(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

function usePageTitle(title, options = {}) {
  const { description = DEFAULT_DESCRIPTION, image = "/og-image.png" } =
    options;

  useEffect(() => {
    const finalTitle = title || DEFAULT_TITLE;

    document.title = finalTitle;

    const canonicalUrl = new URL(
      window.location.pathname,
      window.location.origin,
    ).href;

    const imageUrl = new URL(image, window.location.origin).href;

    setMeta("description", description);

    setProperty("og:type", "website");
    setProperty("og:title", finalTitle);
    setProperty("og:description", description);
    setProperty("og:url", canonicalUrl);
    setProperty("og:image", imageUrl);
    setProperty("og:image:alt", "DESIGN DEN interior design concept");

    setProperty("twitter:card", "summary_large_image");
    setProperty("twitter:title", finalTitle);
    setProperty("twitter:description", description);
    setProperty("twitter:image", imageUrl);

    setCanonical(canonicalUrl);
  }, [title, description, image]);
}

export default usePageTitle;
