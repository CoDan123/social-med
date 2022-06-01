import "./rightbar.css";
import { Users } from "../../someData";
import Online from "../online/Online"

export default function Rightbar({profile}) {

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthday-container">
                    <img className="birthday-img" src="" alt="" />
                    <span className="birthday-text">John and 7 other friends have a birthday today</span>
                </div>
                <img className="rightbar-ad" src="" alt="" />
                <h4 className="rightbar-title">Online Friends</h4>
                <ul className="rightbar-friend-list">
                    {Users.map(u=>(
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
            <h4 className="rightbar-title">User Information</h4>
            <div className="rightbar-info">
                <div className="rightbar-info-item">
                    <span className="rightbar-info-key">City:</span>
                    <span className="rightbar-info-key">New York</span>
                </div>
                <div className="rightbar-info-item">
                    <span className="rightbar-info-key">From:</span>
                    <span className="rightbar-info-key">Madrid</span>
                </div>
                <div className="rightbar-info-item">
                    <span className="rightbar-info-key">Relatioship:</span>
                    <span className="rightbar-info-key">Single</span>
                </div>
            </div>
            <h4 className="rightbar-title">User Information</h4>
            <div className="rightbar-followings">
                <div className="rightbar-following">
                    <img src="assets/person/1.jpeg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Follower name</span>
                </div>
                <div className="rightbar-following">
                    <img src="assets/person/1.jpeg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Follower name</span>
                </div>
                <div className="rightbar-following">
                    <img src="assets/person/1.jpeg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Follower name</span>
                </div>
                <div className="rightbar-following">
                    <img src="assets/person/1.jpeg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Follower name</span>
                </div>
                <div className="rightbar-following">
                    <img src="assets/person/1.jpeg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Follower name</span>
                </div>
                <div className="rightbar-following">
                    <img src="assets/person/1.jpeg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Follower name</span>
                </div>
                <div className="rightbar-following">
                    <img src="assets/person/1.jpeg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Follower name</span>
                </div>
            </div>
            </>
        )
    }

    return(
        <div className="right-bar">
            <div className="right-bar-wrapper">
                <ProfileRightBar/>
            </div>
        </div>
    )
}