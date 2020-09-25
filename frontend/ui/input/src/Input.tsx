import styled    from '@emotion/styled'

import { theme } from '@ui/theme'

export const Input = styled.input({
  height: '45px',
  width: '100%',
  outline: 'none',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: theme.border.s,
  borderRadius: theme.borderRadius.s,
  fontFamily: theme.fontFamily.text,
  fontSize: theme.fontSize.xs,
  color: theme.colors.grey,
})
