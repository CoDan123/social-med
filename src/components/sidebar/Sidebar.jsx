import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from "../../someData";
import userEvent from '@testing-library/user-event';

export default function Sidebar({ post }) {


    return (
        <div className='sidebar'>
            <div className="sidebar-wrapper">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <RssFeedIcon className='sidebar-icon'/>
                        <span className="sidebar-list-item-text">Feed</span>
                    </li>
                    <li className="sidebar-list-item">
                        <ChatIcon className='sidebar-icon'/>
                        <span className="sidebar-list-item-text">Chat</span>
                    </li>
                    <li className="sidebar-list-item">
                        <PlayCircleFilledWhiteIcon className='sidebar-icon'/>
                        <span className="sidebar-list-item-text">Videos</span>
                    </li>
                    <li className="sidebar-list-item">
                        <GroupIcon className='sidebar-icon'/>
                        <span className="sidebar-list-item-text">Groups</span>
                    </li>
                    <li className="sidebar-list-item">
                        <BookmarkIcon className='sidebar-icon'/>
                        <span className="sidebar-list-item-text">Bookmarks</span>
                    </li>
                    <li className="sidebar-list-item">
                        <HelpOutlineIcon className='sidebar-icon'/>
                        <span className="sidebar-list-item-text">Help</span>
                    </li>
                    <li className="sidebar-list-item">
                        <WorkOutlineIcon className='sidebar-icon'/>
                        <span className="sidebar-list-item-text">Jobs</span>
                    </li>
                    <li className="sidebar-list-item">
                        <EventIcon className='sidebar-icon'/>
                        <span className="sidebar-list-item-text">Events</span>
                    </li>
                    <li className="sidebar-list-item">
                        <SchoolIcon className='sidebar-icon'/>
                        <span className="sidebar-list-item-text">Courses</span>
                    </li>
                </ul>
                <button className="sidebar-button">Show more</button>
                <hr className='sidebar-hr'/>
                <ul className="sidebar-friend-list">
                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}