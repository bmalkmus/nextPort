import React from 'react';
import useSwr from 'swr';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./style.css";

const fetcher = (url) => fetch(url).then((res) => res.json())

function Projects(){

const { data, error } = useSwr('/api/projects', fetcher)
if (error) return <div>Failed to load users</div>
if (!data) return <div>Loading...</div>



    return (
        <div className="cardsContainer">
            {[...data].map(project => {
                const keyName = project.name + 1
                return (
                    <div key={keyName} className="mobileCards">
                        <h3>{project.name}</h3>
                        <img alt = "Project image" src={project.imgPath}/>
                        <p>{project.description}</p>
                        <p>Technologies: {project.technologies}</p>
                        <p>Deployed: <a href={project.deployed}>{project.deployed}</a></p>
                        <p>Repo: <a href={project.repo}>{project.repo}</a></p>
                        <br/>
                        <br/>
                        <a href="#homePage" alt="back to top">Back to Homepage</a>
                        
                    </div>
                )
            })}
            <div className="slideContainer">
                <Carousel>
                    {[...data].map(project=>{
                        const key = project.name+2
                        return(
                            <div key={key}>
                                <p className="slideTitle">{project.name}</p>
                                <img src={project.imgPath}/>
                                <div>
                                    <p>{project.description}</p>
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