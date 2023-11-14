import React from 'react';
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

function skills() {
  return (
    <>
   <section id="skills">
       <span className="skillTitle">What I do</span>
       <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly website. I have a strong understanding of design and a keen eye for details.I am proficient in HTML,CSS, and Javascript as well as design software such as Adobe photishop and illustrator.</span>
       <div className="skillsBars">
       <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>You can write ur own content</p>
            </div>
        </div>
        <div className="skillBar">
        <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Website Design</h2>
                <p>You can write ur own content</p>
            </div>
            </div>
            <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>AppDesign</h2>
                <p>You can write ur own content</p>
            </div>
        </div>
        </div>
       
   </section>
   </>
  )
}

export default skills
