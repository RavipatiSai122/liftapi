export function setSEO({
  title,
  description,
  image,
  url = window.location.href,
  keywords = "",
  schema = null,
}) {
  // TITLE
  document.title = title;

  // UPDATE / CREATE META TAGS
  const setTag = (selector, attr, value) => {
    let tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement("meta");
      document.head.appendChild(tag);
    }
    tag.setAttribute(attr, value);
  };

  // BASIC META
  setTag('meta[name="description"]', "content", description);
  setTag('meta[name="keywords"]', "content", keywords);
  setTag('link[rel="canonical"]', "href", url);

  // OPEN GRAPH
  setTag('meta[property="og:title"]', "content", title);
  setTag('meta[property="og:description"]', "content", description);
  setTag('meta[property="og:image"]', "content", image);
  setTag('meta[property="og:url"]', "content", url);
  setTag('meta[property="og:type"]', "content", "website");

  // TWITTER
  setTag('meta[name="twitter:title"]', "content", title);
  setTag('meta[name="twitter:description"]', "content", description);
  setTag('meta[name="twitter:image"]', "content", image);
  setTag('meta[name="twitter:card"]', "content", "summary_large_image");

  // STRUCTURED DATA / JSON-LD
  if (schema) {
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(schema);
  }
}
