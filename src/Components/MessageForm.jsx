import React from 'react'
import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';


export default function MessageForm(props) {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleChange = (event) => {
      setValue(event.target.value);

      isTyping(props, chatId);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      const text = value.trim();

      if (text.length > 0) {
        sendMessage(creds, chatId, { text });
      }

      setValue('');
    };

    const handleUpload = (event) => {
      sendMessage(creds, chatId, { files: event.target.files, text: '' });
    };


    return (
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          className="messageInput"
          placeholder="Send a message..."
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <label htmlFor="upload-button">
          <span className="imageButton">
            <PictureOutlined className="pictureIcon" />
          </span>
        </label>
        <input
          type="file"
          multiple={false}
          id="uploadButton"
          style={{ display: 'none' }}
          onChange={handleUpload.bind(this)}
        />
        <button type="submit" className="sendButton">
          <SendOutlined className="sendIcon" />
        </button>
      </form>
    )
}
