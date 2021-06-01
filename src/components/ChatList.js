import React from 'react'

const ChatList = ({message}) => {
    return (
        <li>
            <h1>{message.text}</h1>
        </li>
    )
}

export default ChatList
