import React from "react";
import chat from '../img/chat.png'; // Import the image using the correct path
import gallery from '../img/gallery.png';

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          <img src={chat} alt="chat-icon" /> Let's Chat
        </span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" name="image" style={{ display: 'none' }} />
          <label htmlFor="file">
            <img src={gallery} alt="gallery-icon" />Add an image.
          </label>
          <button>Sign Up</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
