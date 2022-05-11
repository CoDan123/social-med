import "./rightbar.css";

export default function Rightbar() {
    return(
        <div className="right-bar">
            <div className="right-bar-wrapper">
                <div className="birthday-container">
                    <img className="birthday-img" src="" alt="" />
                    <span className="birthday-text">John and 7 other friends have a birthday today</span>
                </div>
                <img className="rightbar-ad" src="" alt="" />
                <h4 className="rightbar-title">Online Friends</h4>
                <ul className="rightbar-friend-list">
                    <li className="rightbar-friend">
                        <div className="rightbar-profile-img-container">
                            <img className="rightbar-profile-img" src="" alt="" />
                            <span className="rightbar-online"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}