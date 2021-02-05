import ruLocale                     from 'date-fns/locale/ru'
import React, { FC }                from 'react'
import { formatDistanceToNow }      from 'date-fns'

import { Avatar }                   from '@ui/avatar'
import { Bubbling, CheckIcon }      from '@ui/icons'
import { Box, Column, Layout, Row } from '@ui/layout'
import { Text }                     from '@ui/text'
import { theme }                    from '@ui/theme'

interface MessageProps {
  ava?: string
  text?: string
  data?: any
  isMe?: boolean
  isSend?: boolean
  isRead?: boolean
  isSuccess?: boolean
  isTyping?: boolean
}

export const Message: FC<MessageProps> = ({
  ava,
  text,
  data,
  isMe,
  isSend,
  isRead,
  isSuccess,
  isTyping,
}) => {
  return (
    <Column>
      <Layout flexBasis={20} />
      <Row flexDirection={isMe ? 'row-reverse' : 'row'}>
        <Avatar ava={ava} />
        <Layout flexBasis={20} />
        <Column maxWidth={400}>
          <Box
            alignItems='center'
            justifyContent='center'
            bg={isMe ? theme.colors.white : theme.colors.blue}
            width='fit-content'
            border={isMe ? theme.border.s : 'none'}
            borderRadius={theme.borderRadius.m}
            maxWidth={400}
            p={20}
          >
            {isTyping ? <Bubbling /> : null}
            {text && (
              <Text
                fontFamily={theme.fontFamily.text}
                fontSize={theme.fontSize.xs}
                color={isMe ? theme.colors.grey : theme.colors.white}
              >
                {text}
              </Text>
            )}
          </Box>
          <Layout flexBasis={10} />
          <Layout maxWidth={400}>
            <Text
              fontFamily={theme.fontFamily.text}
              fontSize={theme.fontSize.xs}
              color={theme.colors.grey}
            >
              {data ? formatDistanceToNow(data, { addSuffix: true, locale: ruLocale }) : null}
            </Text>
          </Layout>
        </Column>
        {isSend && isMe ? (
          <CheckIcon
            isSuccess={isSuccess}
            fill={isRead ? theme.colors.lightBlue : theme.colors.grey}
          />
        ) : null}
      </Row>
      <Layout flexBasis={20} />
    </Column>
  )
}
