import React from "react";
import { useState } from "react";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { GiSkills } from "react-icons/gi";
import Stacks from "./stacks";

function About() {

    const box = {
        backgroundColor: "#111111",
        borderRadius: "4px",
    }
    

    const [selectedCategory, setSelectedCategory] = useState("frontend");
    const [selectedStyle, setSelectedStyle] = useState("frontend");

    return (
        <div className="web">
            <div className="main-card">
                <h1>
                    <HiOutlineBriefcase/> About
                </h1>
                <div className="about-me-card">
                    <p>
                        I'm a an aspiring software engineer with a strong foundation in computer programming 
                        and a deep interest in coding, self-improvement, philosophy, finance and business. 
                        I am currently honing my skills in web development, software engineering,
                         and IT-related fields to build innovative and efficient solutions. <br/><br/>
                        Beyond coding, I am dedicated to continuous growth—both mentally and physically. 
                        My journey in MMA, boxing, and Muay Thai has taught me discipline, resilience, 
                        and the power of consistency—values that I bring into my work as a programmer. <br/><br/>
                        With a strong belief in self-mastery and lifelong learning, 
                        I am always seeking new challenges that push me toward becoming the best version of myself. 
                        My ultimate goal is to live a good life everyday making the most out of it, achieve my goals and purposes towards the things that are important for me, 
                        and inspire others through my journey. <br/><br/>
                        Let's connect and build something great together!
                    </p>
                </div>
                    <div className="skills">
                        <h2>
                            <GiSkills /> Tech Stack    
                        </h2>
                        <div className="skills-container">
                            <div className="skills-container-categories">
                                <h4 className="first" onClick={() => {setSelectedCategory("frontend") && setSelectedStyle("frontend")}}
                                    style={selectedCategory === "frontend" ? box : {}}>Frontend</h4>

                                <h4 className="second" onClick={() => {setSelectedCategory("backend") && setSelectedStyle("backend")}}
                                    style={selectedCategory === "backend" ? box : {}}>Backend</h4>
                            </div>                         
                        <div className="skills-container-list">
                            {selectedCategory === "frontend" && (
                                <div className="frontend">
                                    <h5><Stacks logo="react.png" text="React"/></h5>
                                    <h5><Stacks logo="js.png" text="JavaScript"/></h5>
                                    <h5><Stacks logo="html.png" text="HTML"/></h5>
                                    <h5><Stacks logo="css.png" text="CSS"/></h5>
                                </div>
                            )}
                            {selectedCategory === "backend" && (
                                <div className="backend">
                                    <h5><Stacks logo="react.png" text="Java"/></h5>
                                    <h5><Stacks logo="react.png" text="PHP"/></h5>
                                    <h5><Stacks logo="react.png" text="MySQL"/></h5>
                                    <h5><Stacks logo="csharp.png" text="C#"/></h5>                    
                                </div>
                            )}    
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default About;