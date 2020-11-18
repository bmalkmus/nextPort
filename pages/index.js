import './style.css'

function Portfolio (){
    return (
        <div className = "global">
            <header>
                <title>
                    Malkmus Solutions
                </title>
                <body>
                    <div className="section">

                            <div className="logoContainer">
                                <img id = "brand" src ="/static/MalkmusSolutionsOpacity0.png" alt="logo"/>   
                            </div>

                            <div className="links">
                                <ul>
                                    <li>
                                        <a href="#aboutMe" alt="about me">
                                            About Me
                                        </a>
                                    </li>  
                                    <li>
                                        <a href="#projects" alt="projects">
                                            Projects
                                        </a>
                                    </li>  
                                    <li>
                                        <a href="#contactMe" alt="contact me">
                                            Contact Me
                                        </a>
                                    </li>  
                                </ul>
                            </div>

                            <div className="sloganContainer">
                                <p>
                                A<span>M</span>BITIOUS.<br/>
                                ALTRUI<span>S</span>TIC.<br/>
                                ADAPTIVE.
                                </p>
                            </div>     
                    </div>
                    <div className="section">
                        <h2>About Me</h2>
                    </div>
                    <div className="section">
                        <h2>Projects</h2>
                    </div>
                    <div className="section">
                        <h2>Contact Me</h2>
                    </div>
                </body>
            </header>
        </div>
    )
}

export default Portfolio