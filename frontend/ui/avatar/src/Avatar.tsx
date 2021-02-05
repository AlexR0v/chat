import styled       from '@emotion/styled'

import { NameIcon } from '@ui/icons'
import { theme }    from '@ui/theme'

export const Avatar: any = styled('div')(({ ava }: any) => ({
  width: '50px',
  height: '50px',
  backgroundImage: `url('${ava ? ava : NameIcon}')`, // eslint-disable-line
  backgroundSize: '100% 100%',
  border: theme.border.s,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '50%',
}))
