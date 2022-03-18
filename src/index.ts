/**
 * @author       Yannick Deubel (https://github.com/yandeu)
 * @copyright    Copyright (c) 2016 Ivan Krechetov
 * @copyright    Copyright (c) 2022 Yannick Deubel
 * @license      {@link https://github.com/ikr/normalize-for-search#license-mit | MIT}
 * @license      {@link https://github.com/yandeu/normalize-for-search/blob/main/LICENSE | MIT}
 */

export const normalizeForSearch = (str: string) => {
  function customNormalize(c: string) {
    switch (c) {
      case 'æ':
        return 'ae'

      case 'œ':
        return 'oe'

      case 'ß':
        return 'ss'

      default:
        return c
    }
  }

  let normalized = ''

  // lowerCase
  str = str.toLowerCase()
  // trim
  str = str.trim()
  // standard normalization
  str = str.normalize('NFKD').replace(/[\u0300-\u036F]/g, '')

  // custom normalization
  for (let i = 0, l = str.length; i < l; i = i + 1) {
    normalized = normalized + customNormalize(str.charAt(i))
  }

  // replace ae, oe, ue
  normalized = normalized.replace(/ae/g, 'a')
  normalized = normalized.replace(/oe/g, 'o')
  normalized = normalized.replace(/ue/g, 'u')

  // remove too many spaces
  normalized = normalized.replace(/\s+/g, ' ')

  return normalized
}
