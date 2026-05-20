const site = import.meta.env.SITE || "";
const base = site ? new URL(site).pathname.replace(/\/$/, "") : "";

export function sitePath(path = "/") {
  if (/^(https?:)?\/\//.test(path)) {
    return path;
  }

  if (path === "/") {
    return base ? `${base}/` : "/";
  }

  if (base && path.startsWith(`${base}/`)) {
    return path;
  }

  if (path.startsWith("/")) {
    return `${base}${path}`;
  }

  return base ? `${base}/${path}` : `/${path}`;
}
