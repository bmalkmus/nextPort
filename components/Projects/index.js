import React from 'react';
import useSwr from 'swr';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
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
                <Slide easing="ease">
                    {[...data].map(project => {
                        console.log(project)
                        const keyName2 = project.name+2;
                        return (
                            <div key={keyName2} className="eachSlide">
                                <div className="each-slide">
                                    <div style={{'backgroundImage': `url("/static/Burger_App.png")`}}>
                                        <span>Slide 1</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slide>
            </div>
            


        </div>
    )
}


export default Projects