import React from 'react'
import IsMe from './IsMe'
import Other from './Other'

const ChatItem = ({isme}) => {
    if (isme) {
        return <IsMe/>
    }
    return <Other/>
}

export default ChatItem