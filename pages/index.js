import './style.css'
import AboutMe from "../components/AboutMe";
import Dropdown from 'react-bootstrap/Dropdown';
import Projects from "../components/Projects";

function Portfolio (){
    return (
        <div className = "global">
            <header>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
                <title>
                    Malkmus Solutions
                </title>
            </header>
                <div className="landing" id="homePnpm age">

                        <div className="logoContainer">
                            <img id = "brand" src ="/static/MalkmusSolutionsOpacity0.png" alt="logo"/>
                            <span>Malkmus Solutions</span>   
                        </div>

                        <div className="links">
                                    <div className = "linkContainers">
                                        <a href="#aboutMe" alt="about me">
                                            About Me
                                        </a> 
                                    </div>
                                    <div className = "linkContainers">
                                        <a href="#projects" alt="projects">
                                            Projects
                                        </a> 
                                    </div>
                                    <Dropdown className = "linkContainers">
                                        <Dropdown.Toggle className="contactToggle">
                                            Contact
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="https://www.github.com/bmalkmus" target="_blank" rel="noopener noreferrer">
                                                <img className="logoLinks" src="/static/github-logo.svg"/>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="https://www.linkedin.com/in/bmalkmus23" target="_blank" rel="noopener noreferrer">
                                                <img className="logoLinks" src="/static/linkedin-logo.svg"/>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="/static/BenjaminMalkmus.pdf" target="_blank" rel="noopener noreferrer">
                                                <img className="logoLinks" src="/static/curriculum-vitae.svg"/>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                Benjamin.Malkmus@outlook.com
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                        </div>

                        <div className="sloganContainer">
                            <div className="transparentContainter">
                                <p>
                                A<span>M</span>BITIOUS.<br/>
                                ALTRUI<span>S</span>TIC.<br/>
                                ADAPTIVE.
                                </p>
                            </div>
                        </div>     
                </div>
                <AboutMe/>
                <h2 id="projects">Projects</h2>
                <Projects/>
            
        </div>
    )
}

export default Portfolio