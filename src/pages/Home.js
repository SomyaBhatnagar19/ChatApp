import React from "react";
import SideBar from "../Components/SideBar";
import Chats from "../Components/Chats";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <SideBar/>
        <Chats/>
      </div>
    </div>
  );
};
export default Home;
