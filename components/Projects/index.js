import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from "./Projects.module.css";


function Projects({projects}){

    return (
        <div className={styles.cardsContainer}>
            {[...projects].map(project => {
                const keyName = project.name + 1
                return (
                    <div key={keyName} className={styles.mobileCards}>
                        <h3>{project.name}</h3>
                        <img alt = "Project image" src={project.imgPath}/>
                        <div className={styles.cardInfo}>
                            <p>{project.description}</p>
                            <p>Technologies: {project.technologies}</p>
                            <p>Deployed: <a className={styles.externalLinks} target="_blank" rel="noopener noreferrer" href={project.deployed}>{project.deployed}</a></p>
                            <p>Repo: <a className={styles.externalLinks} target="_blank" rel="noopener noreferrer" href={project.repo}>{project.repo}</a></p>
                        </div>
                        <br/>
                        <a className={styles.backToTop} href="#homePage" alt="back to top">Back to Homepage</a>
                        
                    </div>
                )
            })}
            <div className="slideContainer">
                <Carousel>
                    {[...projects].map(project=>{
                        const key = project.name+2
                        return(
                            <div className={styles.slideContent} key={key}>
                                <h2>{project.name}</h2>
                                    <img src={project.imgPath} className={styles.slideImg} alt="project image"/>
                                    <div className={styles.contentContainer}>
                                        <p>{project.description}</p>
                                        <p>Technologies: {project.technologies}</p>
                                        <p>Deployed: <a className={styles.externalLinks} target="_blank" rel="noopener noreferrer" href={project.deployed}>{project.deployed}</a></p>
                                        <p>Repo: <a className={styles.externalLinks} target="_blank" rel="noopener noreferrer" href={project.repo}>{project.repo}</a></p>
                                    </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            


        </div>
    )
}




export default Projects