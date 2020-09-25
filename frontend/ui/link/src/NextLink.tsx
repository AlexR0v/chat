import Link      from 'next/link'
import React     from 'react'
import styled    from '@emotion/styled'

import { theme } from '@ui/theme'

const LinkStyled = styled.a({
  cursor: 'pointer',
  color: theme.colors.grey,
  textDecoration: 'underline',
  fontSize: theme.fontSize.xs,
  fontFamily: theme.fontFamily.text,
  ':hover': {
    textDecoration: 'none',
    color: theme.colors.greyDark,
  },
})

export const NextLink = ({ href, children }) => (
  <Link href={{ pathname: href }}>
    <LinkStyled>{children}</LinkStyled>
  </Link>
)
