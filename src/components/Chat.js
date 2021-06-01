import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import firebase from 'firebase'
import styled from 'styled-components'
import { db } from '../firebase'
import { selectMessages, getMessagesAsync, sendMessageAsync, getMessages } from '../features/chat/chatSlice'
import ChatList from './ChatList'

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const authState = useSelector(state => state.auth)
    const messageState = useSelector(selectMessages)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(messageState)
        if (db) {
           const unsubscribe = db
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .limit(12)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }))
                dispatch(getMessages({data}))
                // update state
                // setMessages(data)
            })
            // detach listner
            return unsubscribe
        }
    }, [])
    const [message, setMessage] = useState('')
    function handleClick() {
        dispatch(sendMessageAsync({ message, authState }))
        setMessage('')
    }
    return (
        <>
            <ul>
             {messageState.messages.data?.map((message) => {
                 return (
                     <ChatList 
                     key={message.id}
                     message={message}
                     />
                 )
             })}
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
                        <button disabled={message.length < 1
                        } className="button" onClick={handleClick}>Send</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Chat
