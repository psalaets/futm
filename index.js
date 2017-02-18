module.exports = forgetUtm;

function forgetUtm(url) {
  const modified = new URL(url);
  const params = modified.searchParams;

  for (let key of params.keys()) {
    if (/^utm_/.test(key)) {
      params.delete(key);
    }
  }

  return preservePathname(url, modified);
}

// all this to prevent https://blah.com => https://blah.com/
function preservePathname(source, modified) {
  const parts = new URL(source);

  // path is empty
  if (parts.pathname === '/' && source[parts.origin.length] !== '/') {
    return modified.origin + modified.pathname.slice(0, -1) + modified.search + modified.hash;
  }

  return modified.toString();
}
