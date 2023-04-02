import React, { useState } from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters"

const Skills = () => { 
    const [letterClass, setLetterClass] = useState('text-animate') 
    return (
        <>
            <div className="skills">
                <h1 className="skills-title">
                    <AnimatedLetters 
                    letterClass={letterClass}
                    stringArray={"working on it!".split("")}
                    idx={15} // 1.5 milisecond delay


                    />
                </h1>
            </div>
        </>
    )
}

export default Skills