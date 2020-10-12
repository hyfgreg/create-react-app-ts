import React from 'react';
import api from './api'

import ProjectCard from './ProjectCard'
// import { Layout, Menu } from 'antd';

// const { Header, Content, Footer } = Layout;



interface ProjectList {
  state: {
    projectList: ILooseObject[]
  }
}

class ProjectList extends React.Component {
  constructor(props:ILooseObject) {
    super(props);
    this.state = {
      projectList: []
    }
  }

  componentDidMount() {
    this.fetchProject()
  }

  fetchProject = async () => {
    try {
      const projectResp:any[] = await api.getProject()
      this.setState({
        projectList: projectResp
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const projectItems = this.state.projectList.map((project:ILooseObject) =>
      <ProjectCard key={project.id} project={project} />
    );
    return (
      <div>
        {projectItems}
      </div>
    )
  }
}

export default ProjectList;
