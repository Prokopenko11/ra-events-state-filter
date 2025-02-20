import React from 'react';

class ProjectList extends React.Component {
  render() {
    const { projects } = this.props;

    return (
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="img-wrapper" key={index}>
            <img
              src={project.img}
              alt={project.category}
              className="project-img"
            />
          </div>
        ))}
      </div>
    )
  }
}

export default ProjectList;