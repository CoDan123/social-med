import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../someData";

export default function Post({post}) {
    console.log(post)
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-profile-img" src="" alt="" />
                        <span className="post-username">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="post-date">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">{post?.desc}</span>
                    <img className="post-img" src={post.photo} alt="" />
            
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img className="like-icon" src="" alt="" />
                        <img className="like-icon" src="" alt="" />
                        <span className="post-like-counter">{post.like} people like this</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}