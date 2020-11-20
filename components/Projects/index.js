import React from 'react';
import "./style.css";


function Projects({projects}){

    console.log(projects);


    return (
        <div>
            <h2>TEST DATA IMPORT</h2>
        </div>
    )
}

Projects.getInitialProps = async (ctx) => {
    const res = await fetch('/data/projects')
    const json = await res.json()
    return { projects: json }
  }

export default Projects