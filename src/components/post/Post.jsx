import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-profile-img" src="" alt="" />
                        <span className="post-username">Username here</span>
                        <span className="post-date">10 mins ago</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">Hello! Here is a post!</span>
                    <img className="post-img" src="" alt="" />
            
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left"></div>
                    <div className="post-bottom-right"></div>
                </div>
            </div>
        </div>
    )
}