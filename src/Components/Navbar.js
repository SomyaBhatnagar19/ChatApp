import React from "react";
import chat from '../img/chat.png'; 
import '../style.scss';
// import user from '../img/user.png';
const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">
            <img src={chat} alt="chat-icon" />Let's Chat</span>
            <div className="user">
                <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60' alt="user-icon" />
                <span>Jane</span>
                <button>Logout</button>
            </div>
        </div>
        
    )
}
export default Navbar;