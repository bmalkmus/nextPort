import React from 'react';
import styles from "./AboutMe.module.css";

function AboutMe(){
    return (
        <div className={styles.partAboutMe} id="aboutMe">
            <br/>
            <h2>About Me</h2>
            <div id="abtContent" className={styles.abtContent}>
                <div id="imgContainer" className={styles.imgContainer}>
                    <img className={styles.imgPhone} alt="thumbnail image" src="/static/ProfileThumb.png"/>
                    <img className={styles.imgDesk} alt="desktop image" src="/static/mainProfile.png"/>
                </div>
                <br/>
                <br/>
                <div className={styles.paragraphContainer}>
                    <p>
                        My name is Benjamin Malkmus and I am a web developer. 
                        I’m based out of Bellevue, WA and have lived in the surrounding Seattle area in 2016. 
                        From 2004-2019, I was in the hospitality industry. 
                        It has given me hands on experience on working with clients to make sure that my services are completed 100% to the client’s expectations.
                    </p>
                    <p>
                        My friends would describe me as someone who always tries to find the positives of every problem given in life. 
                        They would also describe me as someone who doesn’t stress out when under pressure and still knows how to find time to have fun with every situation. 
                        When not working, you can find me outside by a body of water or watching some type of sport live or on television.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe