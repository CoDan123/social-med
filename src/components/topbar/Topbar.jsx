import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar() {
    return (
        <div className="topbar-container">

            <div className="topbar-left">
                <span className="logo">Social-Med</span>
            </div>

            <div className="topbar-center">
                <div className="search-bar">
                    <SearchIcon />
                    <input placeholder="Search for friends, posts or videos" className="search-input" />
                </div>
            </div>

            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-link">Homepage</span>
                    <span className="topbar-link">Timeline</span>
                </div>
            </div>

        </div>
    )
}