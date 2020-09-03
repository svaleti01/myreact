import React from 'react'
import { Widget, addResponseMessage, addLinkSnippet } from 'react-chat-widget'

import styles from 'react-chat-widget/lib/styles.css'

import './ChatWidget.css'

import banklogo from './logo_oriental.png'

const handleNewUserMessage = (newMessage) => {
  console.log(`New message incoming! ${newMessage}`)
  addResponseMessage('Welcome to Oriental Bank!')
  addLinkSnippet({
    title: 'Visit Oriental bank website',
    link: 'https://orientalbank.com/',
    target: '_blank',
  })
  // Now send the message throught the backend API
}

const ChatWidget = ({}) => {
  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      profileAvatar={banklogo}
      title="OFGBank Corp."
      subtitle="Always there to help!!"
    />
  )
}

export default ChatWidget
