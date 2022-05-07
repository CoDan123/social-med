import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

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
                            <PermMediaIcon htmlColor="tomato" className="share-icon"/>
                            <span className="share-option-text">Photo or Video</span>
                        </div>
                        <div className="share-option">
                            <LabelIcon htmlColor="blue" className="share-icon"/>
                            <span className="share-option-text">Tag</span>
                        </div>
                        <div className="share-option">
                            <LocationOnIcon htmlColor="green" className="share-icon"/>
                            <span className="share-option-text">Location</span>
                        </div>
                        <div className="share-option">
                            <EmojiEmotionsIcon htmlColor="goldenrod" className="share-icon"/>
                            <span className="share-option-text">Feelings</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}