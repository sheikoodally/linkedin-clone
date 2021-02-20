import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import "./Sidebar.css"

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItems = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-1300x500.jpeg" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar_avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,543</p>
                </div> 

                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">2,448</p>
                </div> 
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItems('Reactjs')}
                {recentItems('Programming')}
                {recentItems('Frontend Development')}
                {recentItems('Design')}
            </div>

        </div>
    )
}

export default Sidebar
