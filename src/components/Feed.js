import React, { useState, useEffect } from 'react'
import './Feed.css'

import ImageIcon from '@material-ui/icons/Image'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay'

import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import Post from './Post'
import { db } from '../firebase'
import firebase from 'firebase';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )))
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
    }

    return (
        <div className="feed">
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={ e => setInput(e.target.value)} type='text'/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed_inputOptions'>
                    <InputOption title='Photo' Icon={ImageIcon} color='#70B5F9'/>
                    <InputOption title='Video' Icon={SubscriptionIcon} color='#E7A33E'/>
                    <InputOption title='Event' Icon={EventNoteIcon} color='#COCBCD'/>
                    <InputOption title='Write Article' Icon={CalenderViewDayIcon} color='#7FC15E'/>
                </div>
            </div>
            <FlipMove>
                {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message = {message}
                        photoUrl = {photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
