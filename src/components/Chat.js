import React from 'react'
import styled from 'styled-components'
import ChatList from './ChatList'
const Chat = () => {
    return (
        <>
        <ChatList/>
        <div class="field">
            <label class="label">Message</label>
            <div className="columns">
                <div className="column">
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input" />
                    </div>
                </div>
                <div className="column">
                    <button className="button">Send</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default Chat
