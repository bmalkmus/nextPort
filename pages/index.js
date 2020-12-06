import styles from '../CSS-page/Portfolio.module.css';
import AboutMe from "../components/AboutMe";
import Dropdown from 'react-bootstrap/Dropdown';
import Projects from "../components/Projects";

function Portfolio ({data}){
    return (
        <div className = {styles.global}>
            <header>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
                <title>
                    Malkmus Solutions
                </title>
            </header>
                <div className={styles.landing} id="homePage">

                        <div className={styles.logoContainer}>
                            <img className = {styles.brand} src ="/static/MalkmusSolutionsOpacity0.png" alt="logo"/>
                            <span>Malkmus Solutions</span>   
                        </div>

                        <div className={styles.links}>
                                    <div className = {styles.linkContainers}>
                                        <a href="#aboutMe" alt="about me">
                                            About Me
                                        </a> 
                                    </div>
                                    <div className = {styles.linkContainers}>
                                        <a href="#projects" alt="projects">
                                            Projects
                                        </a> 
                                    </div>
                                    <Dropdown className = {styles.linkContainers}>
                                        <Dropdown.Toggle className={styles.contactToggle}>
                                            Contact
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className={styles.dropdownMenu}>
                                            <Dropdown.Item href="https://www.github.com/bmalkmus" target="_blank" rel="noopener noreferrer">
                                                <img className={styles.logoLinks} src="/static/github-logo.svg"/>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="https://www.linkedin.com/in/bmalkmus23" target="_blank" rel="noopener noreferrer">
                                                <img className={styles.logoLinks} src="/static/linkedin-logo.svg"/>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="/static/BenjaminMalkmus.pdf" target="_blank" rel="noopener noreferrer">
                                                <img className={styles.logoLinks} src="/static/curriculum-vitae.svg"/>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                Benjamin.Malkmus@outlook.com
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                        </div>

                        <div className={styles.sloganContainer}>
                            <div className={styles.transparentContainer}>
                                <p>
                                A<span>M</span>BITIOUS.<br/>
                                ALTRUI<span>S</span>TIC.<br/>
                                ADAPTIVE.
                                </p>
                            </div>
                        </div>     
                </div>
                <AboutMe/>
                <h2 className = {styles.projects}>Projects</h2>
                <Projects projects = {data}/>
            
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`https://23projectsapi.azurewebsites.net/api/project-Load`);
    const data = await res.json()
    return { props: {data,}, }
  }

export default Portfolio