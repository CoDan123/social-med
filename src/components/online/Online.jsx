import "./online.css";

export default function Online({user}){
    return (
        <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
                <img className="rightbar-profile-img" src="" alt="" />
                <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">John D.</span>
        </li>
    )
}