import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {"An MSc graduate from Queen Mary University of London in Computing and Information Systems. Graduated with distinction in September 2021."}
              <br></br>
              <br></br>
              {"My portfolio is a composition of University, dissertation, and personal projects. Personal projects focus on websites/web apps developed through ReactJS/Native & NodeJS with implementation of Machine Learning Algorithms."}
              <br></br>
              <br></br>
              {"Experienced with Python/PostgreSQL and SQL/GraphQL for Database Management and Data Analysis."}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
