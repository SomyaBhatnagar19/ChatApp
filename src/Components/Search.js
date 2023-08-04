import React from "react";
// import '../style.scss';
const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text"/>
            </div>
            <div className="userChat">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" alt='user-icon'></img>
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}
export default Search;