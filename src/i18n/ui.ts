import { en } from "./en";
import { es } from "./es";

export const languages = {
    es: 'Español',
    en: 'English'
  };
  
  export const defaultLang = 'es';
  
  export const ui = {
    es: es,
    en: en,
  } as const;

  export const showDefaultLang = false;
