import React       from 'react'

import { Message } from '@ui/message'

const Chat = () => {
  const ava = 'https://moscows.top/media/img/d-avatar.jpg'
  const text =
    'Это лучший способ установки языка для всех веб-страниц, включены там переносы или нет. Установка языка поможет инструментам для автоматического перевода, скринридерам и другим вспомогательным программам.'
  const data = new Date(2020, 8, 28, 12, 0)

  const ava1 = 'https://moscows.top/media/img/d-avatar.jpg'
  const text1 =
    'Это лучший способ установки языка для всех веб-страниц, включены там переносы или нет. Установка языка поможет инструментам для автоматического перевода, скринридерам и другим вспомогательным программам.'
  const data1 = new Date(2020, 8, 28, 12, 0)
  const isMe1 = true
  const isSend1 = true
  const isRead1 = true
  const isSuccess1 = true

  return (
    <>
      <Message ava={ava} text={text} data={data} />
      <Message
        ava={ava1}
        text={text1}
        data={data1}
        isMe={isMe1}
        isSend={isSend1}
        isSuccess={isSuccess1}
        isRead={isRead1}
      />
    </>
  )
}

export default Chat
