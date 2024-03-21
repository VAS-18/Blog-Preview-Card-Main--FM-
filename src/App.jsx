import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="Card">
      <div className="BackCard"></div>
      <div className="Card-container">
        <div className="Card-top">
          <img src="/assets/images/illustration-article.svg" alt="" />
          <div className="HeadingCard">
            <p className="Heading">Learning</p>
          </div>
          <div className="Date">
            <p>Published 21 Dec 2023</p>
          </div>
          <div className="ArticleHeading">HTML & CSS foundations</div>
          <div className="Content">
            <p>These Languages are the backbone of every <br />website defining structure content and <br />presentation</p>
          </div>
          <div className="Person">
            <img className='profile' src="/assets/images/image-avatar.webp" alt="" />
            <p className="name">Greg Hooper</p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
