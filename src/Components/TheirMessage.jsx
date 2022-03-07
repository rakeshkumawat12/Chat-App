import React from 'react'

export default function TheirMessage({ lastMessage, message }) {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="messageRow">
      {isFirstMessageByUser && (
        <div
          className="messageAvatar"
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
      )}
      {message.attachments && message.attachments.length > 0
        ? (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="messageImage"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        )
        : (
          <div className="message" style={{ float: 'left', backgroundColor: '#9999ff', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
            {message.text}
          </div>
        )}
    </div>
  )
}
