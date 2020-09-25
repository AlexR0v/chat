import styled                            from '@emotion/styled'
import { borders, color, layout, space } from 'styled-system'

import { theme }                         from '@ui/theme'

export const Button = styled('div')(
  {
    borderRadius: theme.borderRadius.s,
    width: '340px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.colors.blue,
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    ':hover': { background: theme.colors.liteBlue },
  },
  space,
  color,
  borders,
  layout
)
