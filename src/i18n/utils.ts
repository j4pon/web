import { ui, defaultLang, showDefaultLang } from './ui';

/*
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}
*/

export function getLangFromUrl(url: URL) {
  // Divide el pathname en partes
  const parts = url.pathname.split('/').filter(part => part);

  // Verifica si la segunda parte (index 1) o la tercera parte (index 2) es un idioma válido
  const lang = parts.length > 1 && parts[1] in ui
    ? parts[1]
    : parts.length > 2 && parts[2] in ui
    ? parts[2]
    : defaultLang;

  return lang as keyof typeof ui;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? `/web${path}` : `/web/${l}${path}`
  }
}

export function normalizeUrl(url: string): string {
  return url.replace(/([^:]\/)\/+/g, "$1");
}

export function getBasePath(site: string, url: URL): string {
  const pathSegments = url.pathname.split('/');
  // Elimina segmentos vacíos causados por barras adicionales
  const filteredSegments = pathSegments.filter(segment => segment !== '');
  
  // Si la URL tiene una estructura `web/en` o `/en`
  if (filteredSegments.length === 2 || (filteredSegments.length === 1 && filteredSegments[0] !== 'web')) {
    return `${site}/${filteredSegments.join('/')}`;
  }
  
  return site;
}