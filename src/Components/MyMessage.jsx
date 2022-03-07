import React from 'react'

export default function MyMessage(message) {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="messageImage"
        style={{ float: 'right' }}
      />
    );
  }
  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#9999ff' }}>
      {message.text}
    </div>
  )
}
