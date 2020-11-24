import React from 'react';
import "./style.css";

function Contact(){
    return (
        <div id="Contact">
            <h2>How to Connect</h2>
            <p>Thank you for taking your time to visit my portfolio. Below are links to my other professional social media and works.</p>
            <span>Benjamin.Malkmus@outlook.com</span>
            <div>
                <a href="/static/BenjaminMalkmus.pdf" target="_blank" rel="noopener noreferrer"> <img src="/static/github-logo.svg"/></a>
                <a href="/static/BenjaminMalkmus.pdf" target="_blank" rel="noopener noreferrer"><img src="/static/linkedin-logo.svg"/></a>
                <a href="/static/BenjaminMalkmus.pdf" target="_blank" rel="noopener noreferrer"><img src="/static/curriculum-vitae.svg"/></a>
            </div>
            
        </div>
    )
}

export default Contact