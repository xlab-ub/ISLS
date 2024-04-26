import React from "react";
import "./styles/project.css";

const Project = (props) => {
    const { logo, title, description, link } = props;

    return (
        <React.Fragment>
            <div className="project">
                <div className="project-container">
                    <img src={logo} alt="logo" />
                    <div className="project-title">
                        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                    </div>
                    <div className="project-description">{description}</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;
