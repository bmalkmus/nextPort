import './style.css'

function Portfolio (){
    return (
        <div className = "global">
            <header>
                <title>
                    Malkmus Solutions
                </title>
                <body>
                    <div className="landing">

                            <div className="logoContainer">
                                <img id = "brand" src ="/static/MalkmusSolutionsOpacity0.png" alt="logo"/>   
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
                                <div className="transparentContainter"></div>
                                <p>
                                A<span>M</span>BITIOUS.<br/>
                                ALTRUI<span>S</span>TIC.<br/>
                                ADAPTIVE.
                                </p>
                            </div>     
                    </div>
                </body>
            </header>
        </div>
    )
}

export default Portfolio