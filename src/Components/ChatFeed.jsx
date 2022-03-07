import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

export default function ChatFeed(props) {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
            key={`read_${index}`}
            className="readReceipt"
            style={{
                float: isMyMessage ? 'right' : 'left',
                backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
            }}
        />
    ));

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="messageBlock">
                        {isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
                    </div>
                    <div className="readReceipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            );
        });
    };

    if (!chat) return <div />;


    return (
        <div className="chatFeed">
            <div className="chatTitleContainer">
                <div className="chatTitle">{chat?.title}</div>
                <div className="chatSubtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="messageFormContainer">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}
