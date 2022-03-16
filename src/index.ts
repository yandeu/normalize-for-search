/**
 * @author       Yannick Deubel (https://github.com/yandeu)
 * @copyright    Copyright (c) 2016 Ivan Krechetov
 * @copyright    Copyright (c) 2022 Yannick Deubel
 * @license      {@link https://github.com/ikr/normalize-for-search#license-mit | MIT}
 * @license      {@link https://github.com/yandeu/normalize-for-search/blob/main/LICENSE | MIT}
 */

export const normalizeForSearch = (str: string) => {
  function filter(c: string) {
    switch (c) {
      case 'æ':
      case 'ä':
        return 'ae'

      case 'å':
        return 'a' // 'aa'

      case 'á':
      case 'à':
      case 'ã':
      case 'â':
        return 'a'

      case 'ç':
      case 'č':
        return 'c'

      case 'é':
      case 'ê':
      case 'è':
      case 'ë':
      case 'ē':
        return 'e'

      case 'î':
      case 'ï':
      case 'í':
        return 'i'

      case 'œ':
      case 'ö':
        return 'oe'

      case 'ó':
      case 'õ':
      case 'ô':
        return 'o'

      case 'ś':
      case 'š':
        return 's'

      case 'ü':
        return 'ue'

      case 'ù':
      case 'ú':
      case 'ŭ':
        return 'u'

      case 'ß':
        return 'ss'

      case 'ё':
        return 'e'

      default:
        return c
    }
  }

  let normalized = ''
  str = str.toLowerCase()
  str = str.trim()

  for (let i = 0, l = str.length; i < l; i = i + 1) {
    normalized = normalized + filter(str.charAt(i))
  }

  // replace ae, oe, ue
  normalized = normalized.replace(/ae/g, 'a')
  normalized = normalized.replace(/oe/g, 'o')
  normalized = normalized.replace(/ue/g, 'u')

  return normalized
}
