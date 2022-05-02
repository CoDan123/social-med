import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';

export default function Share() {
    return (
        <div className="share">
            <div className="share-wrapper">
                <div className="share-top">
                    <img className="share-profile-img" src="" alt="" />
                    <input placeholder="What's on your mind?" className="share-input" />
                </div>
                <hr className="share-hr"/>
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <PermMediaIcon className="share-icon"/>
                            <span className="share-option-text">Photo or Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}