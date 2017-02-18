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
  if (hasEmptyPathname(source)) {
    return omitPathname(modified);
  }

  return modified.toString();
}

function hasEmptyPathname(source) {
  const parts = new URL(source);
  return parts.pathname === '/' && source[parts.origin.length] !== '/';
}

function omitPathname(modified) {
  return modified.origin + modified.search + modified.hash;
}
