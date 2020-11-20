import './style.css'
import AboutMe from "../components/AboutMe";
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
            <body>
                <div className="landing">

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
                                    <div className = "linkContainers">
                                        <a href="#contactMe" alt="contact me">
                                            Contact Me
                                        </a>
                                    </div>      
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
                <Projects/>
            </body>
            
        </div>
    )
}

export default Portfolio