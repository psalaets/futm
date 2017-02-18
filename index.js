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

  // path is empty or a single slash
  if (parts.pathname === '/') {
    // it really is a single slash
    if (source[parts.origin.length] === '/') {
      return modified.toString();
    } else {
      return modified.origin + trimTrailingSlash(modified.pathname) + modified.search + modified.hash;
    }
  } else {
    return modified.toString();
  }
}

function trimTrailingSlash(str) {
  return str.endsWith('/') ? str.slice(0, -1) : str;
}