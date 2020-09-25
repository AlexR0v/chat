/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-empty */
import { injectGlobal } from 'emotion'

import { fontFaces }    from './FontFaces'

const fontFace = (family, type) => ({
  '@font-face': {
    fontFamily: family,
    src: `local('${family}-${type}'),
          url('/fonts/${family}-${type}.ttf') format('ttf')`,
  },
})

fontFaces.map(({ family, type }) => {
  return injectGlobal(fontFace(family, type))
})

export default injectGlobal({
  body: {
    margin: 0,
  },
})
