import React from 'react';
import { details } from '../portfolio';
import Project from './Project/Project';
import Fade from 'react-reveal/Fade';
import "./Projects.css"

const Projects = () => {
    return <section className="projects" id="projects">
        <h1 className="project-title"><Fade bottom cascade>Projects</Fade></h1>
        {details.map((prj) =>
            <Project key={prj.id} title={prj.title} desc={prj.desc} tech={prj.tech} feature={prj.feature} img={prj.img} link={prj.link} frontend={prj.frontend} backend={prj.backend} deploy={prj.deploy} />
        )}
    </section>
}

export default Projects 