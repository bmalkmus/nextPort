import React from 'react';
import useSwr from 'swr';
import "./style.css";

const fetcher = (url) => fetch(url).then((res) => res.json())

function Projects(){

const { data, error } = useSwr('/api/projects', fetcher)
if (error) return <div>Failed to load users</div>
if (!data) return <div>Loading...</div>

  console.log(data)


    return (
        <div>
            <h2>TEST DATA IMPORT</h2>
        </div>
    )
}


export default Projects