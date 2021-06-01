import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import firebase from 'firebase'
import styled from 'styled-components'
import { db } from '../firebase'
import { getMessagesAsync, sendMessageAsync, create } from '../features/chat/chatSlice'
import ChatList from './ChatList'

const Chat = () => {
    const [messages, setMessages] = useState(['']);
    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
         dispatch(getMessagesAsync())
    }, [dispatch])
    const [message, setMessage] = useState('')
    function handleClick() {
        dispatch(sendMessageAsync({ message, authState }))
        setMessage('')
    }
    return (
        <>
            <ul>
                {messages.map(message => (
                    <ChatList message={message} />
                ))}
            </ul>
            <div class="field">
                <label class="label">Message</label>
                <div className="columns">
                    <div className="column">
                        <div class="control">
                            <input class="input" value={message} onChange={e => setMessage(e.target.value)} type="text" placeholder="Text input" />
                        </div>
                    </div>
                    <div className="column">
                        <button className="button" onClick={handleClick}>Send</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Chat
