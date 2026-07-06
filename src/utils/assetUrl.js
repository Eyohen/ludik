export function assetUrl(path) {
  if (!path || !path.startsWith('/')) return path

  const separator = path.includes('?') ? '&' : '?'
  return `${path}${separator}v=${encodeURIComponent(import.meta.env.VITE_BUILD_VERSION)}`
}
