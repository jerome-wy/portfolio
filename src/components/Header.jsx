import React from "react";
import { Link } from "react-scroll";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Header() {
  const isLinkClicked = false;

  return (
    <div className="Header">
      <div className="desktop-header">
        <ul>
          <li>
            <Link to="about" spy={true} smooth={true}>
              <button className="header-btn">about</button>
            </Link>
          </li>

          <li>
            <Link to="projects" spy={true} smooth={true}>
              <button className="header-btn">projects</button>
            </Link>
          </li>

          <li>
            <Link to="skills" spy={true} smooth={true}>
              <button className="header-btn">skills</button>
            </Link>
          </li>

          <li>
            <Link to="experience" spy={true} smooth={true}>
              <button className="header-btn">experience</button>
            </Link>
          </li>

          <li>
            <a
              href="https://docs.google.com/document/d/1hitkqyvyU74KK7S1uMuS0Ca83f6HYGF-/edit"
              target="_blank"
              alt="resume"
            >
              <button className="resume-btn">resume</button>
            </a>
          </li>
        </ul>

        <ul>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/jerome-wy/"
              alt="linkedin profile"
            >
              <SiLinkedin size={40} color={"#4b5e74"} />
            </a>
          </li>
          <li className="social-icons">
            <a href="https://www.github.com/jerome-wy" alt="github profile">
              <SiGithub size={40} color={"#4b5e74"} />
            </a>
          </li>
        </ul>
      </div>

      <div className="mobile-header">
        <ul>
          <li>
            <Link to="about" spy={true} smooth={true}>
              <button className="header-btn">about</button>
            </Link>
          </li>

          <li>
            <Link to="projects" spy={true} smooth={true}>
              <button className="header-btn">projects</button>
            </Link>
          </li>

          <li>
            <Link to="skills" spy={true} smooth={true}>
              <button className="header-btn">skills</button>
            </Link>
          </li>

          <li>
            <Link to="experience" spy={true} smooth={true}>
              <button className="header-btn">experience</button>
            </Link>
          </li>

          <li>
            <a
              href="https://docs.google.com/document/d/1hitkqyvyU74KK7S1uMuS0Ca83f6HYGF-/edit"
              target="_blank"
              alt="resume"
            >
              <button className="resume-btn">resume</button>
            </a>
          </li>

          {/* <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/jerome-wy/"
              alt="linkedin profile"
            >
              <SiLinkedin size={30} color={"#4b5e74"} />
            </a>
          </li>
          <li className="social-icons">
            <a href="https://www.github.com/jerome-wy" alt="github profile">
              <SiGithub size={30} color={"#4b5e74"} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}