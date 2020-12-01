import React from 'react';
// import useSwr from 'swr';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./style.css";

// const fetcher = (url) => fetch(url).then((res) => res.json())

function Projects({projects}){


// const { data, error } = useSwr('/api/projects', fetcher)
// if (error) return <div>Failed to load users</div>
// if (!data) return <div>Loading...</div>



    return (
        <div className="cardsContainer">
            {[...projects].map(project => {
                const keyName = project.name + 1
                return (
                    <div key={keyName} className="mobileCards">
                        <h3>{project.name}</h3>
                        <img alt = "Project image" src={project.imgPath}/>
                        <div className="cardInfo">
                            <p>{project.description}</p>
                            <p>Technologies: {project.technologies}</p>
                            <p>Deployed: <a className="externalLinks" target="_blank" rel="noopener noreferrer" href={project.deployed}>{project.deployed}</a></p>
                            <p>Repo: <a className="externalLinks" target="_blank" rel="noopener noreferrer" href={project.repo}>{project.repo}</a></p>
                        </div>
                        <br/>
                        <a className= "backToTop" href="#homePage" alt="back to top">Back to Homepage</a>
                        
                    </div>
                )
            })}
            <div className="slideContainer">
                <Carousel>
                    {[...projects].map(project=>{
                        const key = project.name+2
                        return(
                            <div className="slideContent" key={key}>
                                <h2>{project.name}</h2>
                                    <img src={project.imgPath} className="slideImg" alt="project image"/>
                                    <div className="contentContainer">
                                        <p>{project.description}</p>
                                        <p>Technologies: {project.technologies}</p>
                                        <p>Deployed: <a className="externalLinks" target="_blank" rel="noopener noreferrer" href={project.deployed}>{project.deployed}</a></p>
                                        <p>Repo: <a className="externalLinks" target="_blank" rel="noopener noreferrer" href={project.repo}>{project.repo}</a></p>
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